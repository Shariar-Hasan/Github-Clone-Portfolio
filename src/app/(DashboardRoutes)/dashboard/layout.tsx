import { dashboardRoutes } from '@/utils/routes'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Sidebar here */}
      <div>
        {dashboardRoutes?.map(({title, path}, index) => {
          return <Link key={index} href={path} className='px-2 border mx-2'>{title}</Link>
        })}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
