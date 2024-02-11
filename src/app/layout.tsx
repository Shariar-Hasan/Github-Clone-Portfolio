import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/BaseUI/MainLayout";
import { NextFont } from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({ subsets: ["latin"] });
// const roboto: NextFont = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });
// const notoSans: NextFont = Noto_Sans({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio | Shariar Hasan",
  description: "This is a Github Portfolio website for Developer Shariar Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //  ${inter.className}
  return (
    <html lang="en" className="dark scrollb ar-brand">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      <body
        className={`
      ${inter.className}
      delayed bg-back`}
      >
        <div className="bg-back text-site">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
