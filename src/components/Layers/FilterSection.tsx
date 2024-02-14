"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectInput from "../FormElements/SelectNonForm";
import { BASE_URL } from "@/utils/siteConstants";
import Select from "../FormElements/SelectNonForm";
type CategoryType = { category: string; count: number };
const FilterSection = () => {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const searchParams = useSearchParams();
  // fetch categories from database
  useEffect(() => {
    fetch(`${BASE_URL}/api/projects/categories`)
      .then((response) => response.json())
      .then((data: { data: CategoryType[] }) => {
        setCategoryList(data.data);
        console.log("re fetched", data.data);
      });
  }, []);
  useEffect(() => {
    router.push(`/my-projects?category=${category}`);
  }, [category]);

  useEffect(() => {
    // const changedCategory = searchParams.get("category");
    console.log("cahgnesd category: " + searchParams);
  }, [searchParams]);
  return (
    <div className="grid grid-cols-4">
      <Select
        defaultValue="All"
        label="All"
        list={categoryList.map(({ category, count }: CategoryType) => ({
          title: `${category} (${count})`,
          value: category,
        }))}
        setValue={setCategory}
      />
      <div>
        <select
          className="w-full p-2 mt-2 border bg-inherit rounded-md focus:outline-none focus:ring-2"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={"All"}
        >
          <option className="" value={"All"}>
            All
          </option>
          {categoryList?.map(({ category, count }, i) => {
            return (
              <option key={category + i} className="" value={category}>
                {category} ({count})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
