export const courseData = {
  title: "大学生AI+项目系统化培训课程大纲",
  core_idea: "帮助大学生从AI基础认知到项目落地，循序渐进地拓宽思维、掌握主流AI工具与方法，并在'AI+企业降本增效'、'AI+自媒体'、'AI+编程开发'、'AI+应用创新'与'AI+办公自动化'五大方向中选定项目，最终实现成果落地。",
  overview_modules: [
    {"name": "AI基础与思维拓展", "desc": "打牢理论根基，培养AI思维与跨领域视野"},
    {"name": "主流AI工具实操", "desc": "熟悉并掌握ChatGPT、LLM平台、AutoML、计算云服务等"},
    {"name": "AI+领域专题实践", "desc": "设立五大赛道，进行深度案例剖析与专项训练"},
    {"name": "项目管理与落地方法", "desc": "从需求调研、方案设计到数据采集、模型部署与监测"},
    {"name": "综合项目实战与展示", "desc": "团队或个人项目，完成项目文档、演示与评审"}
  ],
  syllabus: [
    {
      module: "模块一：AI基础与思维拓展",
      hours: 12,
      sections: [
        {"title": "人工智能概论", "bullets": ["AI发展史与现状","AI关键概念：机器学习、深度学习、强化学习"]},
        {"title": "AI项目思维", "bullets": ["从问题到方案：AI项目流程与价值链（Porter价值链模型）","需求挖掘与AI机会矩阵"]},
        {"title": "数据与算法入门", "bullets": ["数据类型、5V特征与数据治理","监督学习、无监督学习、强化学习简介"]}
      ]
    },
    {
      module: "模块二：主流AI工具实操",
      hours: 24,
      sections: [
        {"title": "Python与AI框架基础", "bullets": ["Python环境搭建与常用库（NumPy、Pandas、Scikit-Learn）","TensorFlow、PyTorch入门"]},
        {"title": "自然语言处理与大模型", "bullets": ["NLTK基础、Transformer架构","ChatGPT、Bard、Claude等API调用与Prompt工程"]},
        {"title": "计算机视觉与深度学习", "bullets": ["OpenCV图像处理","CNN模型搭建与图像识别案例"]},
        {"title": "AutoML与低代码平台", "bullets": ["Google Vertex AI AutoML、Azure ML Studio实战","模型自动化训练与部署"]}
      ]
    },
    {
      module: "模块三：AI+领域专题实践（五大赛道）",
      hours: "每赛道12–16",
      tracks: [
        {
          "name": "AI+企业降本增效", 
          "description": "深度聚焦企业运营与管理场景，提升业务效率、降低成本、优化流程。",
          "bullets": [
            "业务流程自动化（RPA与流程挖掘）：从流程建模到机器人部署，实战搭建自动化流水线",
            "预测性维护与需求预测：利用时间序列与机器学习模型预估设备故障/客户需求",
            "ERP、CRM系统AI集成：对接SAP/Oracle/金蝶等系统，引入智能推荐与异常检测"
          ],
          "cases": ["智能客服系统：多轮对话＋知识库检索", "供应链优化：基于订单与库存的智能调度", "财务报表自动化：凭证生成与财务指标预警"],
          "projects": [
            "以某制造企业生产线为例，构建从订单接单→物料计划→排产调度的自动化方案",
            "开发面向仓储设备的故障预测仪表板，结合传感器IoT数据与LSTM模型",
            "在开源ERP环境中，集成智能异常交易检测插件"
          ]
        },
        {
          "name": "AI+自媒体", 
          "description": "聚焦内容创作与社交网络运营，赋能新媒体平台与个人品牌建设。",
          "bullets": [
            "内容生成与编辑（文本、音频、视频）：掌握GPT写作、TTS/ASR、视频脚本与自动剪辑",
            "个性化推荐与用户画像：深度学习用户行为，优化内容分发效果",
            "社交网络舆情分析：爬虫采集＋主题建模＋情感分析"
          ],
          "cases": ["内容创作工具：自动生成文章大纲、短视频脚本", "短视频生成：AI驱动的自动配音、自动剪辑", "用户画像分析：标签挖掘与精准营销"],
          "projects": [
            "基于实时热点，设计一个自动化文章/脚本生成与发布管道",
            "构建短视频'趣味剪辑'Demo，实现一键自动拼接与字幕生成",
            "通过微博/抖音评论数据，完成舆情趋势可视化与风险预警仪表板"
          ]
        },
        {
          "name": "AI+编程开发", 
          "description": "聚焦智能开发与工程效率，提升软件交付质量与团队协作。",
          "bullets": [
            "代码生成与质量检测（GitHub Copilot等）：掌握自动补全、单元测试生成与代码重构",
            "智能助手与IDE插件：定制VSCode、PyCharm插件，加速开发流程",
            "DevOps中的AI应用：CI/CD智能化、日志异常检测、性能预测"
          ],
          "cases": ["代码审查助手：静态分析＋自动建议", "自动化测试：生成测试用例、接口自动化脚本", "智能IDE插件：实时性能分析、依赖分析"],
          "projects": [
            "基于开源项目，集成Copilot风格的代码补全与规范检查",
            "搭建CI流水线，加入AI驱动的测试用例生成与覆盖率评估",
            "设计智能日志监控模块，使用NLP检测异常并自动创建工单"
          ]
        },
        {
          "name": "AI+应用创新", 
          "description": "面向行业前沿与跨界融合，探索AI在教育、医疗、金融等领域的创新应用。",
          "bullets": [
            "智能客服与对话系统：多领域知识图谱＋情感识别",
            "智能家居与物联网：边缘AI、设备协同与隐私保护",
            "行业应用拓展（教育、医疗、金融等）：定制化模型与合规性设计"
          ],
          "cases": ["教育辅助系统：自动批改、个性化学习路径推荐", "医疗诊断助手：医学影像分析＋电子病历智能摘要", "金融风控模型：反欺诈、信用评分与资产配置"],
          "projects": [
            "构建教育平台上的智能测评模块，实现自动出题与知识点诊断",
            "开发一款基于CNN的病理切片分类器，并与临床系统集成",
            "设计金融机构反欺诈引擎，结合交易行为建模与图神经网络"
          ]
        },
        {
          "name": "AI+办公自动化", 
          "description": "聚焦日常办公场景，提升个人及团队协作效率，减轻重复性工作负担。",
          "bullets": [
            "文档自动化生成与总结：模板填充、摘要提取与报告撰写",
            "智能表格与数据可视化：公式自动推荐、动态BI仪表盘",
            "日程与邮件自动化管理：智能催办、日程冲突识别与邮件分类"
          ],
          "cases": ["文档智能处理：合同审核助手、会议纪要生成", "会议纪要生成：语音转写＋要点抽取", "邮件自动分类：主题识别＋优先级排序"],
          "projects": [
            "基于企业内部文档库，开发一键摘要与关键条款高亮工具",
            "搭建智能报表系统，实现数据更新后自动生成图表并推送",
            "实现邮件机器人，可自动分拣、标记与回复常见问询"
          ]
        }
      ]
    },
    {
      module: "模块四：项目管理与落地方法",
      hours: 8,
      sections: [
        {"title": "项目策划与需求分析", "bullets": ["AI项目Canvas画布使用","可行性评估与风险管控"]},
        {"title": "数据采集与预处理", "bullets": ["数据清洗、标注与增强","隐私与伦理合规要点"]},
        {"title": "模型部署与监控", "bullets": ["容器化与云端部署实战","性能监测与优化"]},
        {"title": "团队协作与沟通", "bullets": ["敏捷开发与CI/CD流程","对接业务方与技术文档撰写"]}
      ]
    },
    {
      module: "模块五：综合项目实战与评审",
      hours: 16,
      sections: [
        {"title": "项目立项与团队分工","bullets": []},
        {"title": "中期成果汇报与导师指导","bullets": []},
        {"title": "最终项目演示与答辩","bullets": []},
        {"title": "项目成果上线与推广指导","bullets": []}
      ]
    }
  ],
  implementation_suggestions: [
    "全程采用'理论讲授+实操练习+案例分析+项目驱动'相结合的方式。",
    "每模块设置小测验与小项目，确保学习效果。",
    "邀请企业与学界导师担任客座讲师，进行实时指导与行业分享。",
    "期末项目评审可与企业对接，争取项目落地机会。"
  ],
  expected_outcomes: [
    "具备完整的AI+项目思维与实操能力",
    "能够独立或团队形式开展'AI+'创新项目",
    "实现从概念到落地的全流程闭环"
  ],
  mentors: [
    {
      name: "Adam",
      title: "AI+ 编程与自动化导师",
      education: "武汉轻工大学 · 信息管理与信息系统 本科",
      summary: "9年连续创业者，深耕跨境电商、Web3 与 AI+；擅长把业务需求快速落为自动化工作流与可运行原型。",
      expertise: ["AI+ 编程", "流程自动化/RPA", "低代码与集成", "数据驱动增长", "跨境电商数字化"],
      avatar_svg: "https://api.dicebear.com/9.x/croodles/svg?seed=adam-doodle-2025&radius=50&backgroundType=solid&backgroundColor=f5f5f5",
      avatar_png: "https://api.dicebear.com/9.x/croodles/png?seed=adam-doodle-2025&radius=50&backgroundType=solid&backgroundColor=f5f5f5",
      avatar_alt: "导师 Adam 的手绘涂鸦头像",
      tags: ["创业者", "实战型"]
    },
    {
      name: "周义",
      title: "全栈与产品化落地导师",
      education: "华中科技大学 · 计算机系 硕士（前腾讯）",
      summary: "全栈工程师，离职创业；长期实践从0到1的产品验证与交付，强调工程可靠性与成本可控。",
      expertise: ["全栈开发", "Agent/工具调用", "工程化与性能优化", "A/B与监控", "云原生"],
      avatar_svg: "https://api.dicebear.com/9.x/croodles/svg?seed=zhouyi-doodle-2025&radius=50&backgroundType=solid&backgroundColor=fff7ed",
      avatar_png: "https://api.dicebear.com/9.x/croodles/png?seed=zhouyi-doodle-2025&radius=50&backgroundType=solid&backgroundColor=fff7ed",
      avatar_alt: "导师周义的手绘涂鸦头像",
      tags: ["全栈", "创业"]
    },
    {
      name: "老驴",
      title: "全栈与企业级工程导师",
      education: "华中科技大学 · 计算机 硕士（前华为）",
      summary: "熟悉大中型系统架构与交付，注重安全、稳定与可维护性。",
      expertise: ["企业级全栈", "微服务/容器化", "CI/CD", "数据治理", "合规基线"],
      avatar_svg: "https://api.dicebear.com/9.x/croodles/svg?seed=laolv-doodle-2025&radius=50&backgroundType=solid&backgroundColor=eff6ff",
      avatar_png: "https://api.dicebear.com/9.x/croodles/png?seed=laolv-doodle-2025&radius=50&backgroundType=solid&backgroundColor=eff6ff",
      avatar_alt: "导师老驴的手绘涂鸦头像",
      tags: ["架构", "工程化"]
    },
    {
      name: "周亚瑜",
      title: "前端工程与交互体验导师",
      education: "中南大学 · 计算机系 硕士（小米 前端工程师）",
      summary: "聚焦高性能前端与可用性设计，擅长将复杂信息结构化呈现，提升转化与学习体验。",
      expertise: ["前端工程化", "可访问性/响应式", "可视化", "设计系统", "组件库"],
      avatar_svg: "https://api.dicebear.com/9.x/croodles/svg?seed=zhouyayu-doodle-2025&radius=50&backgroundType=solid&backgroundColor=fdf2f8",
      avatar_png: "https://api.dicebear.com/9.x/croodles/png?seed=zhouyayu-doodle-2025&radius=50&backgroundType=solid&backgroundColor=fdf2f8",
      avatar_alt: "导师周亚瑜的手绘涂鸦头像",
      tags: ["前端", "体验"]
    }
  ]
} as const;