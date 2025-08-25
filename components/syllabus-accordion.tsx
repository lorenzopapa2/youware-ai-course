"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { courseData } from "@/lib/data"
import { CheckCircleIcon } from "lucide-react"

const SyllabusAccordion = () => {
  return (
    <section id="syllabus" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">详细课程大纲</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            按模块逐节展开，支持一键收起/展开查看完整内容
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {courseData.syllabus.map((moduleData, index) => (
              <AccordionItem key={index} value={`module-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="text-lg font-semibold">{moduleData.module}</h3>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  {/* 普通章节 */}
                  {'sections' in moduleData && moduleData.sections && (
                    <div className="space-y-6">
                      {moduleData.sections.map((section, sectionIndex) => (
                        <Card key={sectionIndex} className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-3 text-primary">{section.title}</h4>
                            {section.bullets && section.bullets.length > 0 && (
                              <ul className="space-y-2">
                                {section.bullets.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="flex items-start">
                                    <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* 赛道章节 */}
                  {'tracks' in moduleData && moduleData.tracks && (
                    <div className="space-y-6">
                      {moduleData.tracks.map((track, trackIndex) => (
                        <Card key={trackIndex} className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-3 text-primary">{track.name}</h4>
                            <ul className="space-y-2">
                              {track.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default SyllabusAccordion