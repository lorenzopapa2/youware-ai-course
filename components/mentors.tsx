"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { courseData } from "@/lib/data"
import { 
  GraduationCapIcon, 
  BriefcaseIcon, 
  SparklesIcon,
  UserIcon,
  CodeIcon,
  RocketIcon,
  LayersIcon,
  PaletteIcon
} from "lucide-react"

interface Mentor {
  name: string
  title: string
  education: string
  tags: string[]
  avatar_svg: string
  avatar_png: string
  avatar_alt: string
  summary: string
  expertise: string[]
}

const Mentors = () => {
  const getIconForTag = (tag: string) => {
    switch(tag) {
      case "创业者":
      case "创业":
        return RocketIcon
      case "实战型":
        return BriefcaseIcon
      case "全栈":
        return LayersIcon
      case "架构":
        return CodeIcon
      case "工程化":
        return CodeIcon
      case "前端":
        return PaletteIcon
      case "体验":
        return SparklesIcon
      default:
        return UserIcon
    }
  }

  return (
    <section id="mentors" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4 text-gradient">导师团队</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            汇聚行业精英，理论与实战并重，助力学员快速成长
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {(courseData.mentors as unknown as Mentor[]).map((mentor, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-muted/50 bg-gradient-to-br from-background to-muted/10 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative pb-4">
                {/* Avatar */}
                <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-background shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={mentor.avatar_png || mentor.avatar_svg}
                    alt={mentor.avatar_alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Name & Title */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {mentor.title}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex justify-center gap-2 mt-3">
                  {mentor.tags.map((tag, tagIndex) => {
                    const TagIcon = getIconForTag(tag)
                    return (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="px-2 py-1 text-xs glass border-blue-200/30 dark:border-blue-800/30"
                      >
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    )
                  })}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Education */}
                <div className="flex items-start space-x-2">
                  <GraduationCapIcon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {mentor.education}
                  </p>
                </div>

                {/* Summary */}
                <CardDescription className="text-xs leading-relaxed line-clamp-3">
                  {mentor.summary}
                </CardDescription>

                {/* Expertise */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground">专长领域</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.slice(0, 4).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="text-xs px-2 py-0.5 border-muted-foreground/30 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {mentor.expertise.length > 4 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs px-2 py-0.5 border-muted-foreground/30"
                      >
                        +{mentor.expertise.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground mb-6">
            强大的导师阵容，为您的AI+学习之旅保驾护航
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <BriefcaseIcon className="w-4 h-4 mr-2" />
              实战经验丰富
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <GraduationCapIcon className="w-4 h-4 mr-2" />
              理论基础扎实
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <SparklesIcon className="w-4 h-4 mr-2" />
              一对一指导
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentors