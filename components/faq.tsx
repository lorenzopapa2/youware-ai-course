"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ = () => {
  const faqs = [
    {
      question: "课程适合什么基础的学生参与？",
      answer: "课程设计了从零基础到进阶的完整路径。无论是计算机专业还是其他专业的学生，只要对AI技术有兴趣，都可以参与。我们提供基础知识补充和分层教学，确保每位学生都能跟上进度。"
    },
    {
      question: "课程是线上还是线下进行？",
      answer: "采用线上线下相结合的混合式教学模式。理论课程以线上直播为主，实操练习和项目指导采用线下面授，确保最佳的学习效果和互动体验。"
    },
    {
      question: "需要自己准备什么硬件或软件？",
      answer: "学生需要准备基本的电脑设备，我们会提供完整的软件安装指导和云平台账号。大部分实验和项目都可以在云端完成，降低硬件要求。"
    },
    {
      question: "如何选择适合的赛道方向？",
      answer: "课程前期会有各赛道的介绍和体验环节，学生可以根据自己的兴趣、专业背景和就业意向选择。我们也提供导师一对一咨询，帮助学生做出最适合的选择。"
    },
    {
      question: "如何保证教学质量和学习效果？",
      answer: "采用多元化评价体系，包括过程性评价和结果性评价。每个模块都有实操考核，项目进度实时跟踪，确保每位学生都能扎实掌握相关技能。"
    }
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            为您解答课程相关的常见疑问
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left hover:no-unterline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ