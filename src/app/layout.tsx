import { Inter } from 'next/font/google'
import './globals.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import StoreProvider from '@/components/BaseUI/StoreProvider'
import ScrollToTop from '@/components/SmallUI/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import HeadNavbar from '@/components/Layers/HeadNavbar'
import Navbar from '@/components/Layers/Navbar'
import { getUser } from '@/actions/GET'
import { BASE_URL } from '@/utils/SiteRelatedInfo/siteConstants'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
const inter: NextFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    absolute: 'Hello from Shariar 👋',
    template: '%s | Shariar Hasan',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>
  }
  const { data: userData } = await getUser()
  return (
    <html lang="en" className="dark scrollbar-brand">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`
      ${inter.className}
      delayed bg-back`}
      >
        <NextTopLoader
          height={2}
          color="#00ff5d"
          showSpinner={false}
          easing="ease-in-out"
        />
        <div className="bg-back text-site">
          <StoreProvider>
            <ScrollToTop />
            <Toaster position="bottom-left" reverseOrder={false} />
            <nav>
              <HeadNavbar userData={userData} />
              <Navbar />
            </nav>
            {children}
          </StoreProvider>
        </div>
      </body>
    </html>
  )
}
