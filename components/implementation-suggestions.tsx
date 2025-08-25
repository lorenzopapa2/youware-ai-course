import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { courseData } from "@/lib/data"
import { BookOpenIcon, ClipboardCheckIcon, UsersIcon, BuildingIcon } from "lucide-react"

const ImplementationSuggestions = () => {
  const suggestionCategories = [
    {
      icon: BookOpenIcon,
      title: "教学方法",
      content: courseData.implementation_suggestions[0],
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    },
    {
      icon: ClipboardCheckIcon,
      title: "质量保证",
      content: courseData.implementation_suggestions[1],
      color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
    },
    {
      icon: UsersIcon,
      title: "师资配置",
      content: courseData.implementation_suggestions[2],
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
    },
    {
      icon: BuildingIcon,
      title: "产学对接",
      content: courseData.implementation_suggestions[3],
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300"
    }
  ]

  return (
    <section id="implementation" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">课程实施建议</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            基于教学实践的建议方案，确保课程质量与学习效果
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {suggestionCategories.map((category, index) => {
            const Icon = category.icon
            
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {category.content}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 预期成果 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">预期学习成果</h3>
            <p className="text-muted-foreground">完成课程后，学生将获得以下核心能力</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {courseData.expected_outcomes.map((outcome, index) => (
                <Card key={index} className="text-center border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{index + 1}</div>
                    <p className="text-sm leading-relaxed">{outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplementationSuggestions