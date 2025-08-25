"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { courseData } from "@/lib/data"
import { BookOpenIcon, TrendingUpIcon, CodeIcon, RocketIcon } from "lucide-react"

const Hero = () => {
  const coreIdeas = [
    { icon: BookOpenIcon, text: "理论与实践结合" },
    { icon: TrendingUpIcon, text: "循序渐进培养" },
    { icon: CodeIcon, text: "五大方向专精" },
    { icon: RocketIcon, text: "项目落地导向" },
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-purple-50/30 to-pink-100/70 dark:from-blue-950/40 dark:via-purple-950/20 dark:to-pink-950/40 animate-gradient" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center animate-slide-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-gradient-animated">
            {courseData.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {courseData.core_idea}
          </p>

          {/* Core Ideas Badges with Animation */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {coreIdeas.map((idea, index) => {
              const Icon = idea.icon
              return (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-5 py-3 text-base glass border-blue-200/50 dark:border-blue-800/50 hover:scale-105 transition-transform cursor-default animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {idea.text}
                </Badge>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero