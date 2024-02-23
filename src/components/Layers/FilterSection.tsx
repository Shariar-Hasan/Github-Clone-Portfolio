'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SelectInput from '../FormElements/SelectNonForm'
import { BASE_URL } from '@/utils/siteConstants'
import Select from '../FormElements/SelectNonForm'
// custom sort list data
const sortList: { title: string; value: string }[] = [
  { title: 'Newest First', value: 'desc' },
  { title: 'Oldest First', value: 'asc' },
]
type CategoryType = { category: string; count: number }

const FilterSection = ({
  categoryFetchString,
}: {
  categoryFetchString: string
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [category, setCategory] = useState(
    searchParams.get('category') || 'All'
  )
  const [sort, setSort] = useState(searchParams.get('sort') || 'desc')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  // fetch categories from database
  useEffect(() => {
    fetch(`${categoryFetchString}`)
      .then((response) => response.json())
      .then((data: { data: CategoryType[] }) => {
        const categoryData = data.data
        const totalData = data?.data?.reduce((acc, { count }) => acc + count, 0)
        categoryData.unshift({ category: 'All', count: totalData })
        setCategoryList(categoryData)
        // console.log("Re Fetched categorylist");
      })
  }, [])

  // fetch accoding to query
  useEffect(() => {
    const queryParams = {
      category,
      sort,
    }
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    router.replace(`${pathname}/?${queryString}`)
  }, [category, sort])

  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-end gap-2 my-5">
        <div className="min-w-[150px]">
          <Select
            defaultValue="All"
            label="Select Category"
            list={categoryList.map(({ category, count }: CategoryType) => ({
              title: `${category} (${count})`,
              value: category,
            }))}
            setValue={setCategory}
          />
        </div>

        <div className="min-w-[150px]">
          <Select
            defaultValue={sort}
            label="Sorted by"
            list={sortList}
            setValue={setSort}
          />
        </div>
      </div>
      {/* <div className="divider-x" /> */}
    </div>
  )
}

export default FilterSection
