"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { courseData } from "@/lib/data"
import { 
  BuildingIcon, 
  PenToolIcon, 
  CodeIcon, 
  LightbulbIcon, 
  ClipboardIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  TargetIcon,
  RocketIcon
} from "lucide-react"

const TracksTabs = () => {
  const trackIcons = [BuildingIcon, PenToolIcon, CodeIcon, LightbulbIcon, ClipboardIcon]
  const trackModule = courseData.syllabus.find(module => 'tracks' in module && module.tracks)
  const tracks = trackModule && 'tracks' in trackModule ? trackModule.tracks : []

  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4 text-gradient">五大实践赛道</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            深度聚焦不同应用领域，通过典型案例与实战项目掌握核心技能
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="track-0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 p-1 h-auto glass">
              {tracks.map((track, index) => {
                const Icon = trackIcons[index]
                return (
                  <TabsTrigger 
                    key={index} 
                    value={`track-${index}`}
                    className="flex items-center space-x-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-500/20"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm font-medium">{track.name.replace('AI+', '')}</span>
                    <span className="sm:hidden text-xs">{track.name.replace('AI+', '').slice(0, 4)}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {tracks.map((track, index) => {
              const Icon = trackIcons[index]
              
              return (
                <TabsContent key={index} value={`track-${index}`} className="mt-0 animate-slide-in">
                  <Card className="border-none shadow-xl bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="text-center pb-8">
                      <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl w-fit animate-pulse-scale">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-3 text-gradient-animated">{track.name}</CardTitle>
                      <CardDescription className="text-base max-w-2xl mx-auto">
                        {track.description || "深度案例剖析与专项训练，掌握该领域的核心AI应用技能"}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {/* 核心能力培养 */}
                      <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-6">
                        <div className="flex items-center mb-6">
                          <TargetIcon className="w-6 h-6 text-primary mr-3" />
                          <h4 className="text-xl font-bold">核心能力培养</h4>
                        </div>
                        <div className="space-y-4">
                          {track.bullets.map((bullet, bulletIndex) => (
                            <div key={bulletIndex} className="flex items-start group">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 典型应用案例 */}
                      {track.cases && (
                        <div>
                          <div className="flex items-center mb-6">
                            <SparklesIcon className="w-6 h-6 text-primary mr-3" />
                            <h4 className="text-xl font-bold">典型应用案例</h4>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {track.cases.map((case_, caseIndex) => (
                              <Card key={caseIndex} className="group hover:shadow-lg transition-all hover:-translate-y-1 border-muted">
                                <CardContent className="p-4">
                                  <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 group-hover:scale-150 transition-transform" />
                                    <p className="text-sm leading-relaxed">{case_}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 项目建议 */}
                      {track.projects && (
                        <div className="bg-gradient-to-r from-orange-50/50 to-pink-50/50 dark:from-orange-950/20 dark:to-pink-950/20 rounded-xl p-6">
                          <div className="flex items-center mb-6">
                            <RocketIcon className="w-6 h-6 text-primary mr-3" />
                            <h4 className="text-xl font-bold">项目建议</h4>
                          </div>
                          <div className="space-y-4">
                            {track.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className="flex items-start group cursor-pointer hover:translate-x-2 transition-transform">
                                <Badge variant="outline" className="mr-3 mt-0.5">{projectIndex + 1}</Badge>
                                <p className="text-muted-foreground leading-relaxed flex-1">{project}</p>
                                <ArrowRightIcon className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Separator className="my-8" />

                      {/* Call to Action */}
                      <div className="text-center py-4">
                        <p className="text-muted-foreground mb-4">
                          深入探索{track.name}的无限可能，开启您的AI创新之旅
                        </p>
                        <div className="flex justify-center gap-4">
                          <Badge variant="secondary" className="px-4 py-2">
                            实战导向
                          </Badge>
                          <Badge variant="secondary" className="px-4 py-2">
                            项目驱动
                          </Badge>
                          <Badge variant="secondary" className="px-4 py-2">
                            成果落地
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default TracksTabs