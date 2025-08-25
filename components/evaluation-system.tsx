"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircleIcon, PresentationIcon, AwardIcon, TrendingUpIcon } from "lucide-react"

const EvaluationSystem = () => {
  const evaluationPhases = [
    {
      icon: CheckCircleIcon,
      title: "项目立项",
      description: "确定项目方向与团队组建",
      criteria: ["需求明确性", "技术可行性", "团队配置", "时间规划"],
      weight: "20%"
    },
    {
      icon: PresentationIcon,
      title: "中期答辩",
      description: "展示阶段性成果与进展",
      criteria: ["进度完成度", "技术实现", "问题解决", "团队协作"],
      weight: "30%"
    },
    {
      icon: AwardIcon,
      title: "最终评审",
      description: "项目成果综合评估",
      criteria: ["功能完整性", "创新性", "实用价值", "演示效果"],
      weight: "40%"
    },
    {
      icon: TrendingUpIcon,
      title: "上线推广",
      description: "项目落地与应用推广",
      criteria: ["部署质量", "用户反馈", "推广效果", "持续优化"],
      weight: "10%"
    }
  ]

  const deliverables = [
    { category: "项目文档", items: ["需求分析报告", "技术方案文档", "用户手册", "部署指南"] },
    { category: "代码资产", items: ["完整源代码", "API文档", "测试用例", "配置文件"] },
    { category: "演示材料", items: ["项目演示视频", "PPT汇报材料", "产品原型", "效果截图"] },
    { category: "学习成果", items: ["技术总结报告", "经验分享文档", "问题解决记录", "改进建议"] }
  ]

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4 text-gradient">综合项目实战与评审</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            全流程项目管理，多维度评审体系，确保学习成果的质量与实用性
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* 评审流程 */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">评审流程与指标</h3>
            <div className="space-y-6">
              {evaluationPhases.map((phase, index) => {
                const Icon = phase.icon
                
                return (
                  <Card key={index} className="relative overflow-hidden card-hover group animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Weight Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="glass">{phase.weight}</Badge>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{phase.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {phase.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.criteria.map((criterion, criterionIndex) => (
                          <Badge key={criterionIndex} variant="outline" className="text-xs justify-center">
                            {criterion}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 交付物清单 */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">交付物清单</h3>
            <Card>
              <CardHeader>
                <CardTitle>项目完整交付物</CardTitle>
                <CardDescription>
                  每个项目团队需要提交完整的项目资料包
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {deliverables.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-3 text-primary">{category.category}</h4>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    {index < deliverables.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EvaluationSystem