import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "大学生AI+项目系统化培训课程大纲",
  description: "帮助大学生从AI基础认知到项目落地，循序渐进地拓宽思维、掌握主流AI工具与方法，并在五大方向中选定项目，最终实现成果落地。",
  keywords: ["AI培训", "人工智能", "大学生项目", "AI工具", "机器学习"],
  openGraph: {
    title: "大学生AI+项目系统化培训课程大纲",
    description: "帮助大学生从AI基础认知到项目落地，循序渐进地拓宽思维、掌握主流AI工具与方法",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "大学生AI+项目系统化培训课程大纲",
    description: "帮助大学生从AI基础认知到项目落地，循序渐进地拓宽思维、掌握主流AI工具与方法",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "大学生AI+项目系统化培训课程大纲",
              "description": "帮助大学生从AI基础认知到项目落地，循序渐进地拓宽思维、掌握主流AI工具与方法，并在五大方向中选定项目，最终实现成果落地。",
              "provider": {
                "@type": "Organization",
                "name": "教育机构",
                "url": "https://example.edu"
              },
              "educationalLevel": "大学",
              "courseMode": "理论讲授+实操练习+案例分析+项目驱动",
              "teaches": [
                "AI基础与思维拓展",
                "主流AI工具实操",
                "AI+领域专题实践",
                "项目管理与落地方法",
                "综合项目实战与展示"
              ]
            })
          }}
        />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}