import React from "react"
import { Separator } from "@/components/ui/separator"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container py-20">

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <MailIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">邮箱咨询</h3>
            <p className="text-muted-foreground">contact@example.edu</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <PhoneIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">电话咨询</h3>
            <p className="text-muted-foreground">400-123-4567</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <MapPinIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">地址</h3>
            <p className="text-muted-foreground">北京市海淀区中关村大街1号</p>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 大学生AI+项目培训. 保留所有权利.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
            <a href="#" className="hover:text-foreground transition-colors">服务条款</a>
            <a href="#" className="hover:text-foreground transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer