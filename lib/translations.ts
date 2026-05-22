export type Language = "en" | "zh";

const en = {
  common: {
    save: "Save changes",
    saved: "Saved!",
    viewAll: "View all",
    live: "Live",
    draft: "Draft",
    inReview: "In Review",
    offline: "Offline",
    complete: "Complete",
    view: "View",
    uploadedOn: "Uploaded",
    onHomepage: "On homepage",
    notOnHomepage: "Not on homepage",
    edit: "Edit",
    markOff: "Mark off",
    enable: "Enable",
    unavailable: "Unavailable",
    planStarter: "Starter",
    planGrowth: "Growth",
    planPremium: "Premium",
    statusPending: "Pending",
    statusInProgress: "In Progress",
    statusCompleted: "Completed",
    catFood: "Food",
    catInterior: "Interior",
    catTeam: "Team",
    catEvents: "Events",
    catLogo: "Logo",
  },

  landing: {
    nav: {
      pricing: "Pricing",
      ownerLogin: "Owner Login",
      viewDemo: "View Demo",
    },
    badge: "Built for local restaurants & small businesses",
    hero: {
      headline1: "A better website for your restaurant,",
      headline2: "without the tech headache.",
      sub: "We design and build a clean, modern site for your restaurant — then hand you a simple owner portal to keep menus, hours, and photos up to date. You run your restaurant. We handle the rest.",
      ctaDemo: "View Demo Dashboard",
      ctaSample: "Request a Sample Site",
    },
    stats: {
      responseLabel: "24h",
      responseDesc: "Average response time",
      mobileLabel: "100%",
      mobileDesc: "Mobile-first design",
      noCodeLabel: "No code",
      noCodeDesc: "required from you",
    },
    problems: {
      label: "The Problem",
      heading: "Most restaurant websites are hurting your business",
      items: [
        {
          title: "Outdated website",
          desc: "Your site looks like it was built in 2010 — and customers notice.",
        },
        {
          title: "Poor mobile experience",
          desc: "Over 70% of diners search on their phones. Most restaurant sites break on mobile.",
        },
        {
          title: "Hard-to-update menus",
          desc: "Prices change, items disappear — but updating your website takes a phone call to a developer.",
        },
        {
          title: "Old or missing photos",
          desc: "Your food looks amazing. Your website photos are from 2017.",
        },
        {
          title: "Wrong hours and contact info",
          desc: "Customers show up when you're closed. That's a review waiting to happen.",
        },
      ],
    },
    solutions: {
      label: "The Solution",
      heading: "Your restaurant, online — the way it should be",
      items: [
        {
          title: "A modern, beautiful website",
          desc: "Custom-designed for your restaurant — fast, mobile-first, and built to impress.",
        },
        {
          title: "Simple owner dashboard",
          desc: "Update anything yourself — no tech skills needed. Just log in and click.",
        },
        {
          title: "Easy photo & menu updates",
          desc: "Upload photos, update prices, or mark items unavailable in seconds.",
        },
        {
          title: "Submit change requests",
          desc: "Need something more complex? Send a request and we handle it for you.",
        },
        {
          title: "Human-reviewed publishing",
          desc: "Every change is reviewed before it goes live. No accidental mistakes.",
        },
      ],
    },
    pricing: {
      label: "Pricing",
      heading: "Simple, honest pricing",
      sub: "Every project is quoted individually — no surprises, no hidden fees.",
      customQuote: "Custom quote",
      cta: "Get a quote",
      plans: [
        {
          name: "Starter Site",
          desc: "Everything you need to get online with a site that actually works.",
          features: [
            "Custom design",
            "Mobile-responsive",
            "Menu & hours page",
            "Owner dashboard",
            "1 round of revisions",
          ],
        },
        {
          name: "Ongoing Care",
          desc: "Keep your site fresh with monthly updates and priority support.",
          features: [
            "Everything in Starter",
            "Unlimited change requests",
            "Monthly review call",
            "Photo updates",
            "Priority response",
          ],
        },
        {
          name: "Premium Support",
          desc: "Full-service for busy owners who want zero involvement in the tech.",
          features: [
            "Everything in Ongoing Care",
            "Menu management",
            "SEO optimization",
            "Online ordering setup",
            "Social media links",
          ],
        },
      ],
    },
    footer: {
      tagline: "Beautiful websites for local restaurants and small businesses.",
      ownerPortal: "Owner Portal",
      admin: "Admin",
    },
  },

  sidebar: {
    ownerPortal: "Owner Portal",
    powered: "Powered by Local Site Studio",
    preview: "Preview your site",
    nav: {
      dashboard: "Home",
      content: "My Info",
      requests: "Get Help",
      photos: "Photos",
      menu: "My Menu",
      settings: "Settings",
    },
    navDesc: {
      content: "Hours, address, contact",
      requests: "Ask us to make a change",
      photos: "Gallery and homepage images",
      menu: "Dishes, prices, availability",
      settings: "Account and preferences",
    },
  },

  dashboard: {
    greeting: "Hi, David.",
    websiteLive: "Your website is live",
    websiteOffline: "Your website is offline",
    previewSite: "Preview your site →",
    actionsHeading: "What would you like to do?",
    actions: [
      {
        title: "Update your menu",
        desc: "Change prices, add new dishes, or mark items that aren't available right now.",
        href: "/dashboard/menu",
      },
      {
        title: "Add or change photos",
        desc: "Upload new food photos or update the images on your homepage.",
        href: "/dashboard/photos",
      },
      {
        title: "Update your hours or info",
        desc: "Change opening hours, phone number, address, or any details on your site.",
        href: "/dashboard/content",
      },
      {
        title: "Ask us to change something",
        desc: "Need something updated that you can't do yourself? Send us a note — we handle it.",
        href: "/dashboard/requests",
      },
    ],
    attentionHeading: "Needs your attention",
    attentionMsg:
      "Your photos haven't been updated in a while. Fresh photos make a big difference to how customers see your restaurant.",
    attentionAction: "Update Photos",
    recentActivity: "Recent activity",
    noActivity: "No recent requests.",
    statusPending: "Waiting",
    statusInProgress: "We're on it",
    statusCompleted: "Done",
  },

  requests: {
    title: "Ask Us for a Change",
    sub: "Tell us what you need and we'll take care of it — usually within 24 hours.",
    newRequest: "New request",
    successMsg: "Request submitted! We'll review it shortly.",
    fields: {
      type: "Request type",
      priority: "Priority",
      page: "Page affected",
      description: "Description",
      required: "required",
      placeholder: "Describe what you'd like changed...",
      notes: "Additional notes",
      optional: "optional",
      notesPlaceholder: "Anything else we should know?",
    },
    submit: "Submit request",
    previous: "Previous requests",
    types: [
      "Menu Update",
      "Hours Change",
      "Photo Upload",
      "Text Edit",
      "New Page",
      "Other",
    ],
    priorities: ["Low", "Normal", "High", "Urgent"],
    pages: [
      "Homepage",
      "Menu",
      "About",
      "Contact",
      "Gallery",
      "Reservations",
      "Other",
    ],
  },

  content: {
    title: "Website Content",
    sub: "Edit your business information. Changes go to review before publishing.",
    savedMsg:
      "Changes saved and queued for review. We'll publish them within 24 hours.",
    businessInfo: "Business info",
    fields: {
      name: "Business name",
      tagline: "Tagline",
      phone: "Phone number",
      email: "Email address",
      address: "Address",
      instagram: "Instagram handle",
      reservationLink: "Reservation / order link",
      description: "Description",
    },
    announcement: "Featured announcement",
    announcementHint:
      "Shown as a banner on your homepage. Leave blank to hide.",
    hours: "Opening hours",
    closed: "Closed",
    to: "to",
  },

  photos: {
    title: "Photos",
    sub: "Upload new photos for your website. All photos are reviewed before publishing.",
    notice:
      "Photos you upload are reviewed by our team before they appear on your website. We'll let you know when they're live — usually within 24 hours.",
    dragDrop: "Drag and drop photos here",
    browse: "browse from your device",
    fileTypes: "JPG, PNG, WEBP — max 20MB each",
    yourPhotos: "Your photos",
    onHomepageCount: "on homepage",
  },

  menu: {
    title: "Menu",
    sub: "Manage your menu items. Changes go live after review.",
    addItem: "Add item",
    uploadCard: {
      title: "Too busy to update this yourself?",
      desc: "Upload a PDF or photo of your menu and we'll handle it. We'll update your digital menu within 24 hours.",
      btn: "Upload menu file",
    },
    addTo: "Add to",
    sections: {
      Appetizers: "Appetizers",
      Entrees: "Entrees",
      Drinks: "Drinks",
      Desserts: "Desserts",
    },
  },

  settings: {
    title: "Settings",
    sub: "Manage your website preferences and account settings.",
    savedMsg: "Settings saved and queued for review.",
    profile: "Business profile",
    fields: {
      ownerName: "Owner name",
      businessName: "Business name",
      loginEmail: "Login email",
    },
    preferences: "Website preferences",
    brandColor: "Brand color",
    brandColorHint: "Used for buttons, accents, and highlights",
    styleLabel: "Website style",
    styles: ["Modern", "Warm", "Minimal", "Bold"],
    emphasisLabel: "Homepage emphasis",
    emphases: ["Food photos", "Reservations", "Catering", "Online ordering"],
    plan: {
      current: "Current plan: Growth",
      desc: "Unlimited change requests, monthly review call, priority support.",
      active: "Active",
      upgrade: "Upgrade to Premium",
    },
    billing: {
      title: "Billing",
      desc: "Billing is managed directly with your account representative. To update payment info or view invoices, contact us.",
    },
    danger: {
      title: "Danger zone",
      desc: "These actions are permanent. Please contact us if you need help.",
      delete: "Request account deletion",
    },
  },

  admin: {
    title: "Operator Dashboard",
    sub: "Manage all client sites, requests, and tasks from one place.",
    viewDemo: "View demo client",
    marketingSite: "Marketing site",
    stats: {
      activeClients: "Active clients",
      openRequests: "Open requests",
      acrossClients: "Across all clients",
      pendingReview: "Pending review",
      needAttention: "Need your attention",
      sitesLive: "Sites live",
    },
    clients: "Clients",
    incoming: "Incoming requests",
    ownerLabel: "Owner",
    taskPanel: {
      title: "Claude Code Task Preview",
      sub: "Automatically turns a restaurant owner's request into a structured developer task.",
      ownerRequest: "Owner request",
      generated: "Generated Claude Code task",
      generate: "Generate Claude Code task",
      markComplete: "Mark completed",
    },
  },

  mockData: {
    businessTagline: "Modern Asian cuisine with a warm neighborhood feel",
    businessDescription:
      "We serve thoughtfully crafted Asian-inspired dishes made from locally sourced ingredients. Our kitchen blends traditional techniques with modern sensibilities — come for the food, stay for the atmosphere.",
    businessAnnouncement:
      "Now open for Sunday brunch 10am–2pm. Reservations recommended.",
    menuItems: {
      "mi-001": {
        name: "Edamame Dumplings",
        description: "Handmade dumplings filled with edamame, ginger & tofu",
      },
      "mi-002": {
        name: "Crispy Pork Belly Bao",
        description: "Pillowy steamed bun, pickled daikon, hoisin aioli",
      },
      "mi-003": {
        name: "Winter Mushroom Soup",
        description: "Seasonal mushroom broth with crispy shallots",
      },
      "mi-004": {
        name: "Miso Glazed Black Cod",
        description: "Sake-marinated black cod, bok choy, dashi broth",
      },
      "mi-005": {
        name: "Wok-Fired Beef Tenderloin",
        description:
          "Five-spice dry rub, garlic fried rice, ginger scallion oil",
      },
      "mi-006": {
        name: "Mapo Tofu (V)",
        description:
          "Silken tofu, Sichuan chili oil, crispy mushrooms, jasmine rice",
      },
      "mi-007": {
        name: "Lychee Jasmine Spritz",
        description: "Lychee, jasmine green tea, yuzu, sparkling water",
      },
      "mi-008": {
        name: "House-Made Plum Wine",
        description: "Small-batch plum wine, served chilled",
      },
      "mi-009": {
        name: "Black Sesame Panna Cotta",
        description: "Creamy panna cotta, sesame brittle, honey drizzle",
      },
      "mi-010": {
        name: "Matcha Lava Cake",
        description:
          "Warm matcha cake, molten white chocolate center, red bean ice cream",
      },
    },
  },
};

const zh: typeof en = {
  common: {
    save: "保存更改",
    saved: "已保存！",
    viewAll: "查看全部",
    live: "已上线",
    draft: "草稿",
    inReview: "审核中",
    offline: "已下线",
    complete: "完成",
    view: "查看",
    uploadedOn: "上传于",
    onHomepage: "已在首页",
    notOnHomepage: "未在首页",
    edit: "编辑",
    markOff: "标记下架",
    enable: "重新上架",
    unavailable: "暂不提供",
    planStarter: "基础版",
    planGrowth: "成长版",
    planPremium: "高级版",
    statusPending: "待处理",
    statusInProgress: "处理中",
    statusCompleted: "已完成",
    catFood: "美食",
    catInterior: "室内环境",
    catTeam: "团队",
    catEvents: "活动",
    catLogo: "标志",
  },

  landing: {
    nav: {
      pricing: "价格",
      ownerLogin: "商家登录",
      viewDemo: "查看演示",
    },
    badge: "专为本地餐厅和小型企业打造",
    hero: {
      headline1: "为您的餐厅打造更好的网站，",
      headline2: "无需任何技术烦恼。",
      sub: "我们为您的餐厅设计并搭建精美网站，然后交给您一个简单的后台管理系统，轻松更新菜单、营业时间和图片。您专注经营餐厅，其余的交给我们。",
      ctaDemo: "查看演示后台",
      ctaSample: "申请示例网站",
    },
    stats: {
      responseLabel: "24小时",
      responseDesc: "平均响应时间",
      mobileLabel: "100%",
      mobileDesc: "移动端优先设计",
      noCodeLabel: "无需",
      noCodeDesc: "您编写任何代码",
    },
    problems: {
      label: "痛点所在",
      heading: "大多数餐厅网站正在损害您的生意",
      items: [
        {
          title: "网站过时陈旧",
          desc: "您的网站看起来像2010年建的——顾客会注意到这一点。",
        },
        {
          title: "移动端体验差",
          desc: "超过70%的顾客用手机搜索餐厅。大多数餐厅网站在手机上显示混乱。",
        },
        {
          title: "菜单难以更新",
          desc: "价格变动、菜品下架——但更新网站却需要联系开发人员。",
        },
        {
          title: "照片陈旧或缺失",
          desc: "您的食物看起来很棒，但网站上的照片还是2017年拍的。",
        },
        {
          title: "营业时间和联系方式错误",
          desc: "顾客在您休息时登门，这就是一条差评的由来。",
        },
      ],
    },
    solutions: {
      label: "解决方案",
      heading: "让您的餐厅以最佳姿态呈现在网上",
      items: [
        {
          title: "现代精美的网站",
          desc: "为您的餐厅量身设计——快速、移动端优先，令人印象深刻。",
        },
        {
          title: "简洁的商家后台",
          desc: "自行更新任何内容——无需技术背景，登录即可操作。",
        },
        {
          title: "轻松更新照片和菜单",
          desc: "几秒钟内上传照片、更新价格或标记菜品下架。",
        },
        {
          title: "提交修改申请",
          desc: "需要更复杂的修改？提交申请，我们来处理。",
        },
        {
          title: "人工审核发布",
          desc: "每项修改在上线前均经过人工审核，杜绝意外错误。",
        },
      ],
    },
    pricing: {
      label: "价格方案",
      heading: "透明实惠的价格",
      sub: "每个项目单独报价——无任何隐藏费用。",
      customQuote: "定制报价",
      cta: "获取报价",
      plans: [
        {
          name: "基础版网站",
          desc: "上线运营所需的一切基础功能。",
          features: [
            "定制设计",
            "移动端适配",
            "菜单与营业时间页面",
            "商家后台",
            "1次修改机会",
          ],
        },
        {
          name: "持续维护版",
          desc: "每月更新与优先支持，保持网站新鲜感。",
          features: [
            "基础版所有功能",
            "无限修改申请",
            "每月回顾沟通",
            "照片更新",
            "优先响应",
          ],
        },
        {
          name: "高级支持版",
          desc: "全程托管，繁忙的老板无需参与技术事务。",
          features: [
            "持续维护版所有功能",
            "菜单代管理",
            "SEO优化",
            "在线点餐设置",
            "社交媒体链接",
          ],
        },
      ],
    },
    footer: {
      tagline: "为本地餐厅和小型企业打造精美网站。",
      ownerPortal: "商家后台",
      admin: "管理员",
    },
  },

  sidebar: {
    ownerPortal: "商家后台",
    powered: "由 Local Site Studio 提供支持",
    preview: "预览您的网站",
    nav: {
      dashboard: "首页",
      content: "我的信息",
      requests: "获取帮助",
      photos: "照片",
      menu: "我的菜单",
      settings: "设置",
    },
    navDesc: {
      content: "营业时间、地址、联系方式",
      requests: "请我们帮您修改",
      photos: "图片库和首页图片",
      menu: "菜品、价格、供应状态",
      settings: "账户和偏好设置",
    },
  },

  dashboard: {
    greeting: "您好，David。",
    websiteLive: "您的网站已上线",
    websiteOffline: "您的网站已下线",
    previewSite: "预览您的网站 →",
    actionsHeading: "您今天想做什么？",
    actions: [
      {
        title: "更新菜单",
        desc: "修改价格、添加新菜品，或标记暂时没有的菜品。",
        href: "/dashboard/menu",
      },
      {
        title: "添加或更换照片",
        desc: "上传新的美食照片，或更新首页的图片。",
        href: "/dashboard/photos",
      },
      {
        title: "更新营业时间或信息",
        desc: "修改营业时间、电话、地址或网站上的任何信息。",
        href: "/dashboard/content",
      },
      {
        title: "请我们帮您修改",
        desc: "有什么自己不方便改的？给我们留言，我们来处理。",
        href: "/dashboard/requests",
      },
    ],
    attentionHeading: "需要您关注",
    attentionMsg:
      "您的照片已经有一段时间没有更新了。更新新照片能让您的网站更吸引顾客。",
    attentionAction: "更新照片",
    recentActivity: "最近动态",
    noActivity: "暂无最近申请。",
    statusPending: "等待中",
    statusInProgress: "处理中",
    statusCompleted: "已完成",
  },

  requests: {
    title: "请我们帮您修改",
    sub: "告诉我们您需要什么，我们通常会在24小时内处理。",
    newRequest: "新建申请",
    successMsg: "申请已提交！我们将尽快审核。",
    fields: {
      type: "申请类型",
      priority: "优先级",
      page: "涉及页面",
      description: "说明",
      required: "必填",
      placeholder: "请描述您希望做出的修改...",
      notes: "补充说明",
      optional: "选填",
      notesPlaceholder: "还有其他需要我们了解的吗？",
    },
    submit: "提交申请",
    previous: "历史申请",
    types: [
      "菜单更新",
      "营业时间修改",
      "照片上传",
      "文字修改",
      "新增页面",
      "其他",
    ],
    priorities: ["低", "普通", "高", "紧急"],
    pages: [
      "首页",
      "菜单",
      "关于我们",
      "联系我们",
      "图片库",
      "预订",
      "其他",
    ],
  },

  content: {
    title: "网站内容",
    sub: "编辑您的商家信息。修改内容将在发布前进行审核。",
    savedMsg: "修改已保存并进入审核队列。我们将在24小时内发布。",
    businessInfo: "商家信息",
    fields: {
      name: "商家名称",
      tagline: "口号",
      phone: "联系电话",
      email: "电子邮箱",
      address: "地址",
      instagram: "Instagram账号",
      reservationLink: "预订/点餐链接",
      description: "简介",
    },
    announcement: "特别公告",
    announcementHint: "将显示为首页横幅。留空则不显示。",
    hours: "营业时间",
    closed: "休息",
    to: "至",
  },

  photos: {
    title: "图片管理",
    sub: "为您的网站上传新照片。所有照片在发布前将经过审核。",
    notice:
      "您上传的照片在显示到网站之前，将由我们的团队进行审核。通常在24小时内完成，届时会通知您。",
    dragDrop: "将照片拖放到此处",
    browse: "从设备浏览",
    fileTypes: "支持 JPG、PNG、WEBP 格式，每张最大 20MB",
    yourPhotos: "您的照片",
    onHomepageCount: "已在首页展示",
  },

  menu: {
    title: "菜单管理",
    sub: "管理您的菜品。修改经审核后上线。",
    addItem: "添加菜品",
    uploadCard: {
      title: "太忙了，没时间自己更新？",
      desc: "上传菜单的PDF或照片，我们来处理。我们将在24小时内更新您的电子菜单。",
      btn: "上传菜单文件",
    },
    addTo: "添加至",
    sections: {
      Appetizers: "前菜",
      Entrees: "主菜",
      Drinks: "饮品",
      Desserts: "甜点",
    },
  },

  settings: {
    title: "设置",
    sub: "管理您的网站偏好设置和账户信息。",
    savedMsg: "设置已保存并进入审核队列。",
    profile: "商家资料",
    fields: {
      ownerName: "负责人姓名",
      businessName: "商家名称",
      loginEmail: "登录邮箱",
    },
    preferences: "网站偏好",
    brandColor: "品牌色",
    brandColorHint: "用于按钮、强调色和高亮显示",
    styleLabel: "网站风格",
    styles: ["现代", "温馨", "简约", "大胆"],
    emphasisLabel: "首页重点",
    emphases: ["美食照片", "预订", "外卖/宴席", "在线点餐"],
    plan: {
      current: "当前套餐：成长版",
      desc: "无限修改申请、每月回顾沟通、优先支持。",
      active: "生效中",
      upgrade: "升级至高级版",
    },
    billing: {
      title: "账单",
      desc: "账单由您的客户代表直接管理。如需更新付款信息或查看发票，请联系我们。",
    },
    danger: {
      title: "危险操作",
      desc: "这些操作不可撤销。如需帮助，请联系我们。",
      delete: "申请删除账户",
    },
  },

  admin: {
    title: "运营后台",
    sub: "在一个地方管理所有客户网站、申请和任务。",
    viewDemo: "查看演示客户",
    marketingSite: "营销网站",
    stats: {
      activeClients: "活跃客户",
      openRequests: "待处理申请",
      acrossClients: "来自所有客户",
      pendingReview: "待审核",
      needAttention: "需要您关注",
      sitesLive: "已上线网站",
    },
    clients: "客户列表",
    incoming: "新增申请",
    ownerLabel: "负责人",
    taskPanel: {
      title: "Claude Code 任务预览",
      sub: "自动将商家申请转化为结构化开发任务。",
      ownerRequest: "商家申请",
      generated: "生成的 Claude Code 任务",
      generate: "生成 Claude Code 任务",
      markComplete: "标记为已完成",
    },
  },

  mockData: {
    businessTagline: "现代亚洲料理，温馨社区氛围",
    businessDescription:
      "我们提供精心烹制的亚洲风味菜肴，食材均来自当地供应商。我们的厨房将传统技艺与现代理念融为一体——来品尝美食，留下难忘时光。",
    businessAnnouncement: "周日早午餐现已开放，时间为上午10点至下午2点，建议提前预约。",
    menuItems: {
      "mi-001": {
        name: "毛豆饺子",
        description: "手工制作的毛豆、生姜和豆腐饺子",
      },
      "mi-002": {
        name: "脆皮五花肉包",
        description: "松软蒸包，腌制萝卜，海鲜酱蒜泥",
      },
      "mi-003": {
        name: "冬菇汤",
        description: "时令菌菇汤底，配炸葱酥",
      },
      "mi-004": {
        name: "味噌鳕鱼",
        description: "清酒腌制鳕鱼，配小白菜和柴鱼汤",
      },
      "mi-005": {
        name: "爆炒牛里脊",
        description: "五香干揉，蒜香炒饭，姜葱油",
      },
      "mi-006": {
        name: "麻婆豆腐（素食）",
        description: "嫩滑豆腐，四川辣椒油，香脆蘑菇，茉莉香米",
      },
      "mi-007": {
        name: "荔枝茉莉气泡饮",
        description: "荔枝、茉莉绿茶、柚子、气泡水",
      },
      "mi-008": {
        name: "自酿梅酒",
        description: "小批量梅酒，冷藏后饮用",
      },
      "mi-009": {
        name: "黑芝麻奶冻",
        description: "丝滑奶冻，芝麻脆糖，蜂蜜淋面",
      },
      "mi-010": {
        name: "抹茶熔岩蛋糕",
        description: "温热抹茶蛋糕，白巧克力熔岩芯，红豆冰淇淋",
      },
    },
  },
};

export const translations = { en, zh };
export type Translations = typeof en;
