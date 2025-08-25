import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, PenIcon, DatabaseIcon, RocketIcon, BarChartIcon } from "lucide-react"

const ProjectTimeline = () => {
  const timeline = [
    {
      icon: SearchIcon,
      title: "需求调研",
      description: "深度挖掘业务痛点，明确AI应用场景",
      deliverables: ["需求分析报告", "可行性评估", "技术选型方案"],
      methods: ["用户访谈", "业务流程分析", "竞品调研"]
    },
    {
      icon: PenIcon,
      title: "方案设计",
      description: "制定完整的技术架构与实施路径",
      deliverables: ["系统架构图", "API设计文档", "项目计划书"],
      methods: ["原型设计", "技术预研", "风险评估"]
    },
    {
      icon: DatabaseIcon,
      title: "数据采集",
      description: "构建高质量数据集，确保模型训练效果",
      deliverables: ["数据集", "清洗脚本", "标注规范"],
      methods: ["数据爬取", "人工标注", "数据增强"]
    },
    {
      icon: RocketIcon,
      title: "模型部署",
      description: "将训练好的模型部署到生产环境",
      deliverables: ["部署文档", "API接口", "监控面板"],
      methods: ["容器化", "云端部署", "自动化测试"]
    },
    {
      icon: BarChartIcon,
      title: "监测优化",
      description: "持续监控模型表现，不断优化迭代",
      deliverables: ["性能报告", "优化建议", "迭代计划"],
      methods: ["A/B测试", "用户反馈", "数据分析"]
    }
  ]

  return (
    <section id="project" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">项目管理与落地方法</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从概念到落地的完整流程方法论，确保每个项目都能成功交付
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {timeline.map((phase, index) => {
                const Icon = phase.icon
                
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {phase.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* 方法 */}
                        <div>
                          <h5 className="font-medium text-sm mb-2">主要方法</h5>
                          <div className="flex flex-wrap gap-2">
                            {phase.methods.map((method, methodIndex) => (
                              <Badge key={methodIndex} variant="outline" className="text-xs">
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* 交付物 */}
                        <div>
                          <h5 className="font-medium text-sm mb-2">关键交付物</h5>
                          <ul className="space-y-1">
                            {phase.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="text-xs text-muted-foreground">
                                • {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectTimeline