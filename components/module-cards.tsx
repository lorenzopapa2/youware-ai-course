"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courseData } from "@/lib/data"
import { ArrowRightIcon, BookIcon, WrenchIcon, TargetIcon, ProjectorIcon, TrophyIcon } from "lucide-react"

const ModuleCards = () => {
  const moduleIcons = [BookIcon, WrenchIcon, TargetIcon, ProjectorIcon, TrophyIcon]

  return (
    <section id="modules" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">模块化课程设计概览</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            五大核心模块，系统化构建AI+项目能力体系
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courseData.overview_modules.map((module, index) => {
            const Icon = moduleIcons[index]
            
            return (
              <Card 
                key={index} 
                className="h-full card-hover card-glow group relative overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:animate-pulse-scale" />
                  </div>
                  <CardTitle className="text-lg font-bold">{module.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="mb-4 leading-relaxed">
                    {module.desc}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn overflow-hidden relative"
                    onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="relative z-10">查看详情</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ModuleCards