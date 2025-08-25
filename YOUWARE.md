# YOUWARE.md

这个文件为 YOUWARE Agent (youware.com) 在此代码库中工作提供指导。

## 项目概述

**项目类型**: Next.js 14+ (App Router) + 静态HTML混合项目
**主要目标**: 大学生AI+项目系统化培训课程大纲展示网站
**入口点**: `index.html` (静态版本) 和 `app/page.tsx` (Next.js版本)

## 技术架构

### 前端技术栈
- **Next.js 14+**: App Router架构，支持现代React开发
- **TypeScript**: 类型安全的JavaScript超集
- **Tailwind CSS**: 原子化CSS框架，快速样式开发
- **shadcn/ui**: 高质量可复用UI组件库
- **Lucide React**: 现代图标库

### 项目结构
```
app/                    # Next.js App Router目录
├── layout.tsx         # 全局布局，包含ThemeProvider和SEO
└── page.tsx          # 首页，组织所有组件

components/            # 可复用组件库
├── ui/               # shadcn/ui基础组件
└── [feature-components] # 功能组件

lib/                  # 工具和数据
├── data.ts          # 课程数据（从JSON转换为TypeScript）
└── utils.ts         # 通用工具函数

styles/
└── globals.css      # 全局样式，包含Tailwind和中文字体优化
```

### 双版本架构
1. **Next.js版本** (`app/` 目录): 适合开发和动态功能扩展
2. **静态HTML版本** (`index.html`): 适合直接部署和演示

## 核心功能特性

### 页面结构（按用户要求的信息架构）
1. 顶部导航 - 粘性导航，锚点跳转
2. Hero区 - 课程标题、核心理念、CTA按钮
3. 模块概览 - 5个核心模块卡片展示
4. 详细大纲 - 手风琴交互展开/收起
5. 五大赛道 - 标签页展示不同AI应用方向
6. 项目管理流程 - 时间线展示
7. 评审体系 - 项目评估标准
8. 实施建议 - 教学方法和预期成果
9. FAQ - 常见问题解答
10. 联系信息 - 包含合规说明

### 设计系统
- **响应式设计**: 12列栅格系统，支持桌面/平板/移动端
- **中文优化**: 1.7行高，Inter字体，适合中文阅读
- **可访问性**: 符合WCAG 2.2 AA标准
- **暗色模式**: 完整的主题切换支持
- **SEO优化**: 结构化数据和完整meta标签

## 常用开发命令

### Next.js开发
```bash
npm install          # 安装依赖
npm run dev         # 开发服务器 (http://localhost:3000)
npm run build       # 生产构建
npm run start       # 生产服务器
npm run lint        # 代码检查
```

### 静态版本
- 直接打开 `index.html` 即可预览
- 所有样式和功能都内联在单文件中

## 数据管理

### 课程数据结构 (`lib/data.ts`)
```typescript
export const courseData = {
  title: string,           // 课程标题
  core_idea: string,       // 核心理念
  overview_modules: [...], // 模块概览
  syllabus: [...],        // 详细大纲
  // ... 其他数据字段
}
```

### 数据更新流程
1. 修改 `lib/data.ts` 中的课程数据
2. Next.js版本会自动更新
3. 静态版本需要手动同步更新HTML中的内容

## 重要实现细节

### 组件通信
- 使用React Context进行主题管理
- 通过props传递数据，避免复杂状态管理
- 静态版本使用原生JavaScript处理交互

### 样式处理
- Tailwind CSS作为主要样式框架
- 中文排版优化（行高1.7-1.8）
- 响应式断点：sm(640px), md(768px), lg(1024px), xl(1280px)

### 交互功能
- 手风琴组件：可展开/收起的内容区域
- 标签页切换：五大赛道展示
- 平滑滚动：锚点导航跳转
- 移动端菜单：响应式导航

### 构建特殊处理
- TypeScript类型检查可能在模块数据上出现联合类型问题
- 需要使用类型保护：`'sections' in moduleData && moduleData.sections`
- Tailwind CDN在生产环境会有警告，建议使用PostCSS插件

## 未来扩展建议

### 动态功能扩展
- 集成Youware Backend实现真实报名表单
- 添加用户系统和课程进度跟踪
- 集成AI SDK实现智能客服或内容生成

### 内容管理优化
- 考虑使用Headless CMS管理课程内容
- 添加多语言国际化支持
- 实现内容搜索和筛选功能

### 性能优化
- 图片懒加载和优化
- 代码分割和预加载
- CDN部署和缓存策略

## 注意事项

1. **字体加载**: Google Fonts可能有CORS问题，已内置Inter字体作为备选
2. **图标系统**: 使用Lucide图标，需要调用`lucide.createIcons()`初始化
3. **主题切换**: 已预留暗色模式功能，可进一步完善
4. **数据同步**: 修改课程数据时需要同步更新两个版本
5. **移动端适配**: 特别注意中文在小屏幕上的可读性

此项目展示了完整的课程大纲网站开发流程，从需求分析到最终实现，包含了现代Web开发的最佳实践。