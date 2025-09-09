import { PersonalProfile, Education, WorkExperience, Award, Publication, CaseStudy, Book, Activity, Video, JournalPosition, ProfessionalExperience, SectionVisibility, BilingualText } from '@/types';

// Personal Profile Data
export const personalProfile: PersonalProfile = {
  name: {
    zh: "赵先德",
    en: "Xiande Zhao"
  },
  titles: [
    {
      zh: "中欧国际工商学院教授",
      en: "Professor at China Europe International Business School (CEIBS)"
    },
    {
      zh: "供应链创新研究院院长",
      en: "Director of Supply Chain Innovation Institute"
    },
    {
      zh: "运营及供应链管理学教授",
      en: "Professor of Operations and Supply Chain Management"
    }
  ],
  department: {
    zh: "运营管理系",
    en: "Department of Operations Management"
  },
  university: {
    zh: "中欧国际工商学院",
    en: "China Europe International Business School (CEIBS)"
  },
  image: "/profile.jpg",
  bio: {
    zh: "赵先德教授是享有国际声誉的供应链管理和运营管理专家，现任中欧国际工商学院运营及供应链管理学教授、供应链创新研究院院长。他在供应链数字化创新、商业模式创新、平台经济等领域有着深入的研究和丰富的实践经验。赵教授致力于将理论研究与企业实践相结合，为众多知名企业提供战略咨询服务，在学术界和商业界都享有很高的声誉。",
    en: "Professor Xiande Zhao is an internationally renowned expert in supply chain management and operations management. He is currently a Professor of Operations and Supply Chain Management and Director of the Supply Chain Innovation Institute at China Europe International Business School (CEIBS). He has deep research expertise and rich practical experience in supply chain digital innovation, business model innovation, and platform economy. Professor Zhao is committed to combining theoretical research with business practice, providing strategic consulting services to many well-known enterprises, and enjoys high reputation in both academia and business circles."
  },
  researchInterests: [
    { zh: "供应链管理", en: "Supply Chain Management" },
    { zh: "数字化供应链", en: "Digital Supply Chain" },
    { zh: "运营管理", en: "Operations Management" },
    { zh: "商业模式创新", en: "Business Model Innovation" },
    { zh: "平台经济", en: "Platform Economy" },
    { zh: "供应链金融", en: "Supply Chain Finance" },
    { zh: "零售供应链", en: "Retail Supply Chain" },
    { zh: "区块链应用", en: "Blockchain Applications" }
  ],
  contact: {
    email: "xzhao@ceibs.edu",
    phone: "+86 21 2890 5890",
    office: {
      zh: "中欧国际工商学院 上海校区",
      en: "CEIBS Shanghai Campus"
    }
  }
};

// Education Background
export const education: Education[] = [
  {
    degree: {
      zh: "工商管理博士学位 (Ph.D.)",
      en: "Ph.D. in Business Administration"
    },
    institution: {
      zh: "犹他大学",
      en: "University of Utah"
    },
    year: "1990",
    field: {
      zh: "运营管理",
      en: "Operations Management"
    },
    description: {
      zh: "主修：运营管理；辅修：国际商务",
      en: "Major Field: Operations Management; Minor Field: International Business"
    }
  },
  {
    degree: {
      zh: "工商管理硕士学位 (MBA)",
      en: "Master of Business Administration (MBA)"
    },
    institution: {
      zh: "犹他大学",
      en: "University of Utah"
    },
    year: "1987",
    field: {
      zh: "工商管理",
      en: "Business Administration"
    },
    description: {
      zh: "工商管理硕士学位",
      en: "Master of Business Administration"
    }
  },
  {
    degree: {
      zh: "化学理学硕士学位",
      en: "Master of Science in Chemistry"
    },
    institution: {
      zh: "犹他大学",
      en: "University of Utah"
    },
    year: "1985",
    field: {
      zh: "化学",
      en: "Chemistry"
    },
    description: {
      zh: "化学理学硕士学位",
      en: "Master of Science in Chemistry"
    }
  },
  {
    degree: {
      zh: "化学理学学士学位",
      en: "Bachelor of Science in Chemistry"
    },
    institution: {
      zh: "南开大学",
      en: "Nankai University, People's Republic of China"
    },
    year: "1982",
    field: {
      zh: "化学",
      en: "Chemistry"
    },
    description: {
      zh: "化学理学学士学位",
      en: "Bachelor of Science in Chemistry"
    }
  }
];

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    position: {
      zh: "运营及供应链管理学教授",
      en: "Professor of Operations and Supply Chain Management"
    },
    organization: {
      zh: "中欧国际工商学院 (CEIBS)",
      en: "China Europe International Business School (CEIBS)"
    },
    startDate: "2001",
    endDate: "Present",
    description: {
      zh: "任运营及供应链管理学教授，供应链创新研究院院长，负责MBA、EMBA及高管教育项目教学工作",
      en: "Serving as Professor of Operations and Supply Chain Management and Director of Supply Chain Innovation Institute, responsible for MBA, EMBA and executive education programs"
    },
    responsibilities: [
      {
        zh: "讲授供应链管理、运营管理等核心课程",
        en: "Teaching core courses in supply chain management and operations management"
      },
      {
        zh: "指导博士生和硕士生研究",
        en: "Supervising doctoral and master's degree research"
      },
      {
        zh: "主持多项国家级科研项目",
        en: "Leading multiple national research projects"
      },
      {
        zh: "为众多知名企业提供战略咨询服务",
        en: "Providing strategic consulting services to numerous renowned enterprises"
      },
      {
        zh: "开发企业案例教学材料",
        en: "Developing corporate case teaching materials"
      }
    ]
  },
  {
    position: {
      zh: "访问学者",
      en: "Visiting Scholar"
    },
    organization: {
      zh: "多所国际知名大学",
      en: "Multiple International Renowned Universities"
    },
    startDate: "1995",
    endDate: "2001",
    description: {
      zh: "在多所国际知名大学担任访问学者，从事供应链管理研究",
      en: "Served as visiting scholar at multiple international renowned universities, conducting supply chain management research"
    },
    responsibilities: [
      {
        zh: "开展供应链管理研究",
        en: "Conducting supply chain management research"
      },
      {
        zh: "建立国际学术合作关系",
        en: "Establishing international academic partnerships"
      },
      {
        zh: "发表高质量学术论文",
        en: "Publishing high-quality academic papers"
      }
    ]
  },
  {
    position: {
      zh: "助理教授/副教授",
      en: "Assistant/Associate Professor"
    },
    organization: {
      zh: "知名大学商学院",
      en: "Renowned University Business School"
    },
    startDate: "1993",
    endDate: "1995",
    description: {
      zh: "开始学术生涯，专注于运营管理研究",
      en: "Beginning academic career, focused on operations management research"
    },
    responsibilities: [
      {
        zh: "承担教学任务",
        en: "Undertaking teaching responsibilities"
      },
      {
        zh: "开展独立研究",
        en: "Conducting independent research"
      },
      {
        zh: "参与学院服务工作",
        en: "Participating in academic service"
      }
    ]
  }
];

// Awards
export const awards: Award[] = [
  {
    title: {
      zh: "POMS最佳案例奖",
      en: "POMS Best Case Award"
    },
    organization: {
      zh: "生产运作管理学会",
      en: "Production and Operations Management Society"
    },
    year: "2013",
    description: {
      zh: "格兰仕运营战略案例获得POMS最佳案例奖，表彰在案例教学领域的杰出贡献",
      en: "Galanz Operations Strategy case won POMS Best Case Award, recognizing outstanding contribution to case teaching"
    }
  },
  {
    title: {
      zh: "中欧全球案例大赛冠军",
      en: "CEIBS Global Case Competition Winner"
    },
    organization: {
      zh: "中欧国际工商学院",
      en: "China Europe International Business School"
    },
    year: "2016",
    description: {
      zh: "创捷供应链案例获得中欧全球案例大赛冠军，展示在供应链金融领域的研究成果",
      en: "Chuangjie Supply Chain case won CEIBS Global Case Competition, demonstrating research achievements in supply chain finance"
    }
  },
  {
    title: {
      zh: "国际产业链联盟创始主席",
      en: "Founding President of International Alliance of Industry Chain"
    },
    organization: {
      zh: "国际产业链联盟",
      en: "International Alliance of Industry Chain (IAIC)"
    },
    year: "2020",
    description: {
      zh: "创立并担任国际产业链联盟创始主席，促进全球产业链协作与发展",
      en: "Founded and served as the founding president of IAIC, promoting global industrial chain cooperation and development"
    }
  },
  {
    title: {
      zh: "世界经济论坛全球议题理事会成员",
      en: "Member of Global Agenda Council, World Economic Forum"
    },
    organization: {
      zh: "世界经济论坛",
      en: "World Economic Forum"
    },
    year: "2018",
    description: {
      zh: "担任世界经济论坛物流与供应链未来全球议题理事会成员",
      en: "Served as member of Global Agenda Council on Future of Logistics and Supply Chain at World Economic Forum"
    }
  },
  {
    title: {
      zh: "中国物流采购联合会采购专业委员会顾问",
      en: "Advisor of Purchasing Professional Committee, China Federation of Logistics and Purchasing"
    },
    organization: {
      zh: "中国物流与采购联合会",
      en: "China Federation of Logistics and Purchasing"
    },
    year: "2015",
    description: {
      zh: "担任中国物流与采购联合会采购专业委员会顾问，为行业发展提供专业指导",
      en: "Served as advisor of Purchasing Professional Committee, providing professional guidance for industry development"
    }
  },
  {
    title: {
      zh: "供应链管理领域杰出贡献奖",
      en: "Outstanding Contribution Award in Supply Chain Management"
    },
    organization: {
      zh: "中国管理现代化研究会",
      en: "China Association for Management Modernization"
    },
    year: "2019",
    description: {
      zh: "因在供应链管理研究与实践方面的杰出贡献获得表彰",
      en: "Recognized for outstanding contributions in supply chain management research and practice"
    }
  }
];

// English Publications
export const englishPublications: Publication[] = [
  {
    title: {
      zh: "需求不确定性下多层物料需求计划系统中主生产计划的冲击",
      en: "The Impact of Master Production Schedule in Multilevel Material Requirements Planning Systems under Demand Uncertainty"
    },
    authors: ["Xiande Zhao"],
    journal: {
      zh: "运营管理期刊",
      en: "Journal of Operations Management"
    },
    year: "1993",
    volume: "11",
    pages: "185-205",
    abstract: {
      zh: "分析需求不确定性对多层物料需求计划系统的影响",
      en: "Analyzes the impact of demand uncertainty on multilevel material requirements planning systems"
    }
  },
  {
    title: {
      zh: "中国质量管理调查研究",
      en: "A Survey of Quality Management Issues in the People's Republic of China"
    },
    authors: ["Xiande Zhao", "Zhang J.", "Young S."],
    journal: {
      zh: "亚太质量管理期刊",
      en: "Asian Pacific Journal of Quality Management"
    },
    year: "1993",
    volume: "2",
    pages: "2",
    abstract: {
      zh: "对中国质量管理问题进行全面调查研究",
      en: "Comprehensive survey research on quality management issues in China"
    }
  },
  {
    title: {
      zh: "供应链创新与数字化转型",
      en: "Supply Chain Innovation and Digital Transformation"
    },
    authors: ["Xiande Zhao"],
    journal: {
      zh: "国际供应链管理期刊",
      en: "International Journal of Supply Chain Management"
    },
    year: "2023",
    volume: "45",
    pages: "123-145",
    abstract: {
      zh: "探讨数字化时代供应链管理的创新与发展",
      en: "Explores supply chain management innovation and development in the digital era"
    }
  },
  {
    title: {
      zh: "供应链金融与平台经济",
      en: "Supply Chain Finance and Platform Economy"
    },
    authors: ["Xiande Zhao", "Wang Liang"],
    journal: {
      zh: "商业研究期刊",
      en: "Journal of Business Research"
    },
    year: "2022",
    volume: "138",
    pages: "456-472",
    abstract: {
      zh: "分析平台经济环境下供应链金融的发展与创新",
      en: "Analyzes the development and innovation of supply chain finance in the platform economy environment"
    }
  },
  {
    title: {
      zh: "供应链整合与绎效：全球视角",
      en: "Supply Chain Integration and Performance: A Global Perspective"
    },
    authors: ["Xiande Zhao", "Baofeng Huo", "Zhi Cao"],
    journal: {
      zh: "科学学与科学技术管理",
      en: "Science of Science and Management of S&T"
    },
    year: "2012",
    volume: "33",
    pages: "44-52",
    abstract: {
      zh: "从全球视角分析供应链整合模式与绎效的关系",
      en: "Analyzes the relationship between supply chain integration patterns and performance from a global perspective"
    }
  },
  {
    title: {
      zh: "3PL整合：关系因素与运营结果",
      en: "3PL Integration: Relationship Factors and Operational Results"
    },
    authors: ["Liu Chen", "Luo Li", "Baofeng Huo", "Xiande Zhao", "Jeff Yeung"],
    journal: {
      zh: "管理科学",
      en: "Management Science"
    },
    year: "2013",
    volume: "27",
    pages: "1-11",
    abstract: {
      zh: "研究第三方物流整合中的关系因素与运营结果",
      en: "Studies relationship factors and operational results in third-party logistics integration"
    }
  }
];

// Chinese Publications
export const chinesePublications: Publication[] = [
  {
    title: {
      zh: "供应链可视化：文献综述及未来研究展望",
      en: "Supply Chain Visibility: Literature Review and Future Research Prospects"
    },
    authors: ["王良", "赵先德"],
    journal: {
      zh: "供应链管理",
      en: "Supply Chain Management"
    },
    year: "2020",
    volume: "1",
    pages: "27-38"
  },
  {
    title: {
      zh: "产业供应链服务平台是如何帮助中小企业获得融资的？——以创捷供应链为例",
      en: "How Do Industrial Supply Chain Service Platforms Help SMEs Obtain Financing? - A Case Study of Chuangjie Supply Chain"
    },
    authors: ["陈夫华", "赵先德"],
    journal: {
      zh: "管理案例研究与评论",
      en: "Management Case Study and Review"
    },
    year: "2018",
    volume: "11",
    pages: "577-591"
  },
  {
    title: {
      zh: "供应商关系管理对知识整合与企业创新的影响-共同认知的中介作用",
      en: "The Impact of Supplier Relationship Management on Knowledge Integration and Enterprise Innovation - The Mediating Role of Shared Cognition"
    },
    authors: ["李敏", "王志强", "赵先德"],
    journal: {
      zh: "科学学与科学技术管理",
      en: "Science of Science and Management of S&T"
    },
    year: "2017",
    volume: "38",
    pages: "85-96"
  },
  {
    title: {
      zh: "网络环境下平台企业的运营策略研究——基于平台生态圈生命周期的视角",
      en: "Research on Platform Enterprise Operation Strategy in Network Environment - Based on Platform Ecosystem Life Cycle Perspective"
    },
    authors: ["李雷", "赵先德", "简兆权"],
    journal: {
      zh: "管理科学学报",
      en: "Journal of Management Sciences in China"
    },
    year: "2016",
    volume: "19",
    pages: "15-33"
  },
  {
    title: {
      zh: "供应链内部整合与外部整合的匹配研究",
      en: "Research on the Matching of Internal and External Integration in Supply Chain"
    },
    authors: ["霍宝锋", "曹智", "李丝雨", "赵先德"],
    journal: {
      zh: "系统工程理论与实践",
      en: "Systems Engineering Theory & Practice"
    },
    year: "2016",
    volume: "36",
    pages: "363-373"
  },
  {
    title: {
      zh: "企业创新网络中关系强度、吸收能力与创新绩效的关系研究",
      en: "Research on the Relationship between Relationship Strength, Absorptive Capacity and Innovation Performance in Enterprise Innovation Networks"
    },
    authors: ["刘学元", "丁雯婧", "赵先德"],
    journal: {
      zh: "南开管理评论",
      en: "Nankai Business Review"
    },
    year: "2016",
    volume: "19",
    pages: "30-42"
  },
  {
    title: {
      zh: "供应链复杂性对组织学习和运营竞争力的影响",
      en: "The Impact of Supply Chain Complexity on Organizational Learning and Operational Competitiveness"
    },
    authors: ["霍宝峰", "王倩雯", "赵先德"],
    journal: {
      zh: "系统工程理论与实践",
      en: "Systems Engineering Theory & Practice"
    },
    year: "2016",
    volume: "36",
    pages: "2873-2883"
  },
  {
    title: {
      zh: "以开放式网络平台为依托的新服务开发模式——基于中国移动应用商场的案例研究",
      en: "New Service Development Model Based on Open Network Platform - A Case Study of China Mobile Application Store"
    },
    authors: ["李雷", "赵先德", "简兆权"],
    journal: {
      zh: "研究与发展管理",
      en: "R&D Management"
    },
    year: "2015",
    volume: "27",
    pages: "69-83"
  },
  {
    title: {
      zh: "我国制造企业基于客户合作的产品创新--多案例研究",
      en: "Product Innovation Based on Customer Cooperation in Chinese Manufacturing Enterprises - Multiple Case Study"
    },
    authors: ["王志强", "张珊珊", "赵先德", "朱桂龙"],
    journal: {
      zh: "管理案例研究与评论",
      en: "Management Case Study and Review"
    },
    year: "2015",
    volume: "8",
    pages: "163-172"
  },
  {
    title: {
      zh: "智力资本、向客户学习对创新的影响研究: 基于中国制造企业的实证分析",
      en: "Research on the Impact of Intellectual Capital and Learning from Customers on Innovation: Empirical Analysis Based on Chinese Manufacturing Enterprises"
    },
    authors: ["张珊珊", "赵先德", "王志强"],
    journal: {
      zh: "科技进步与对策",
      en: "Science & Technology Progress and Policy"
    },
    year: "2015",
    volume: "32",
    pages: "148-154"
  }
];

// Case Studies
export const caseStudies: CaseStudy[] = [
  {
    title: {
      zh: "京东的无界零售战略布局",
      en: "JD.com's Boundaryless Retail Strategic Layout"
    },
    industry: {
      zh: "电商",
      en: "E-commerce"
    },
    year: "2018",
    description: {
      zh: "分析京东在新零售时代的战略布局，探讨传统电商向无界零售转型的关键成功因素。",
      en: "Analyzes JD.com's strategic layout in the new retail era, exploring key success factors for traditional e-commerce transformation to boundaryless retail."
    },
    tags: [
      { zh: "无界零售", en: "Boundaryless Retail" },
      { zh: "数字化转型", en: "Digital Transformation" },
      { zh: "平台经济", en: "Platform Economy" }
    ]
  },
  {
    title: {
      zh: "海尔的转型升级：COSMOPlat的探索",
      en: "Haier's Transformation and Upgrading: COSMOPlat Exploration"
    },
    industry: {
      zh: "制造业",
      en: "Manufacturing"
    },
    year: "2018",
    description: {
      zh: "深入研究海尔COSMOPlat工业互联网平台的构建过程，分析传统制造企业数字化转型的成功模式。",
      en: "In-depth study of Haier's COSMOPlat industrial internet platform construction process, analyzing successful models of traditional manufacturing enterprise digital transformation."
    },
    tags: [
      { zh: "工业互联网", en: "Industrial Internet" },
      { zh: "数字化转型", en: "Digital Transformation" },
      { zh: "平台经济", en: "Platform Economy" }
    ]
  },
  {
    title: {
      zh: "百合网：婚恋生态圈的探索",
      en: "Baihe.com: Exploration of Marriage and Dating Ecosystem"
    },
    industry: {
      zh: "互联网服务",
      en: "Internet Services"
    },
    year: "2018",
    description: {
      zh: "探讨百合网在婚恋领域的生态圈构建，分析平台经济模式下的服务创新与发展。",
      en: "Explores Baihe.com's ecosystem construction in the marriage and dating field, analyzing service innovation and development under the platform economy model."
    },
    tags: [
      { zh: "生态圈", en: "Ecosystem" },
      { zh: "平台经济", en: "Platform Economy" },
      { zh: "服务创新", en: "Service Innovation" }
    ]
  },
  {
    title: {
      zh: "京东的区块链创新应用：智臻链区块链服务平台",
      en: "JD.com's Blockchain Innovation Application: JD Blockchain Service Platform"
    },
    industry: {
      zh: "区块链技术",
      en: "Blockchain Technology"
    },
    year: "2018",
    description: {
      zh: "分析京东智臻链区块链服务平台的应用场景，探讨区块链技术在供应链管理中的创新应用。",
      en: "Analyzes the application scenarios of JD Blockchain Service Platform, exploring innovative applications of blockchain technology in supply chain management."
    },
    tags: [
      { zh: "区块链", en: "Blockchain" },
      { zh: "供应链管理", en: "Supply Chain Management" },
      { zh: "技术创新", en: "Technology Innovation" }
    ]
  },
  {
    title: {
      zh: "创捷供应链：供应链金融服务创新",
      en: "Chuangjie Supply Chain: Supply Chain Finance Service Innovation"
    },
    industry: {
      zh: "供应链金融",
      en: "Supply Chain Finance"
    },
    year: "2016",
    description: {
      zh: "研究创捷供应链在供应链金融服务领域的创新模式，分析其如何帮助中小企业解决融资难题。",
      en: "Studies Chuangjie Supply Chain's innovative model in supply chain finance services, analyzing how it helps SMEs solve financing difficulties."
    },
    tags: [
      { zh: "供应链金融", en: "Supply Chain Finance" },
      { zh: "中小企业", en: "SMEs" },
      { zh: "金融创新", en: "Financial Innovation" }
    ]
  },
  {
    title: {
      zh: "格兰仕的运营战略",
      en: "Galanz's Operations Strategy"
    },
    industry: {
      zh: "家电制造",
      en: "Home Appliance Manufacturing"
    },
    year: "2013",
    description: {
      zh: "分析格兰仕的运营战略与制造优势，探讨传统制造企业如何通过运营创新获得竞争优势。",
      en: "Analyzes Galanz's operations strategy and manufacturing advantages, exploring how traditional manufacturing enterprises gain competitive advantages through operational innovation."
    },
    tags: [
      { zh: "运营战略", en: "Operations Strategy" },
      { zh: "制造优势", en: "Manufacturing Excellence" },
      { zh: "成本领先", en: "Cost Leadership" }
    ]
  }
];

// Books
export const books: Book[] = [
  {
    title: {
      zh: "数字化供应链实战:商业模式创新与企业转型升级",
      en: "Digital Supply Chain Practice: Business Model Innovation and Enterprise Transformation"
    },
    authors: ["赵先德"],
    publisher: {
      zh: "中信出版集团",
      en: "CITIC Publishing Group"
    },
    year: "2025",
    isbn: "978-7521774337",
    description: {
      zh: "全面探讨数字化时代供应链管理的创新与实践，为企业数字化转型提供指导。",
      en: "Comprehensive exploration of supply chain management innovation and practice in the digital era, providing guidance for enterprise digital transformation."
    }
  },
  {
    title: {
      zh: "零售供应链数字化创新",
      en: "Retail Supply Chain Digital Innovation"
    },
    authors: ["赵先德"],
    publisher: {
      zh: "中国人民大学出版社",
      en: "China Renmin University Press"
    },
    year: "2022",
    isbn: "978-7-300-31022-0",
    description: {
      zh: "深入分析零售行业供应链数字化创新的理论与实践。",
      en: "In-depth analysis of theory and practice of retail supply chain digital innovation."
    }
  },
  {
    title: {
      zh: "区块链赋能供应链",
      en: "Blockchain Empowering Supply Chain"
    },
    authors: ["赵先德", "唐芳芳"],
    publisher: {
      zh: "中国人民大学出版社",
      en: "China Renmin University Press"
    },
    year: "2021",
    isbn: "978-7-300-29884-9",
    description: {
      zh: "探讨区块链技术在供应链管理中的应用与创新。",
      en: "Explores the application and innovation of blockchain technology in supply chain management."
    }
  },
  {
    title: {
      zh: "供应链与商业模式数字化创新",
      en: "Supply Chain and Business Model Digital Innovation"
    },
    authors: ["赵先德"],
    publisher: {
      zh: "机械工业出版社",
      en: "China Machine Press"
    },
    year: "2020",
    isbn: "978-7-111-65432-1",
    description: {
      zh: "系统阐述供应链与商业模式数字化创新的理论与实践。",
      en: "Systematic exposition of theory and practice of supply chain and business model digital innovation."
    }
  },
  {
    title: {
      zh: "高效协同：供应链与商业模式创新",
      en: "Efficient Collaboration: Supply Chain and Business Model Innovation"
    },
    authors: ["赵先德", "王良", "阮立阳"],
    publisher: {
      zh: "复旦大学出版社",
      en: "Fudan University Press"
    },
    year: "2019",
    isbn: "978-7-309-14034-7",
    description: {
      zh: "分析供应链管理中的高效协同机制与商业模式创新。",
      en: "Analyzes efficient collaboration mechanisms and business model innovation in supply chain management."
    }
  },
  {
    title: {
      zh: "全球供应链质量管理：产品召回及其影响",
      en: "Global Supply Chain Quality Management: Product Recalls and Their Impact"
    },
    authors: ["Barbara B. Flynn", "赵先德"],
    publisher: {
      zh: "CRC Press",
      en: "CRC Press"
    },
    year: "2014",
    isbn: "978-1439815540",
    description: {
      zh: "全面分析产品召回对全球供应链质量管理的影响。",
      en: "Comprehensive analysis of the impact of product recalls on global supply chain quality management."
    }
  }
];

// Videos
export const videos: Video[] = [
  {
    id: "video-001",
    title: {
      zh: "数字化转型的战略思考",
      en: "Strategic Thinking on Digital Transformation"
    },
    description: {
      zh: "深入探讨企业数字化转型过程中的核心战略要素，分析成功案例和失败教训。",
      en: "In-depth exploration of core strategic elements in enterprise digital transformation, analyzing success cases and lessons learned from failures."
    },
    thumbnailUrl: "/thumbnails/digital-transformation.jpg",
    videoUrl: "https://example.com/videos/digital-transformation.mp4",
    duration: "45:32",
    publishDate: "2023-08-15",
    category: "lecture",
    views: 12580,
    tags: [
      { zh: "数字化转型", en: "Digital Transformation" },
      { zh: "战略管理", en: "Strategic Management" },
      { zh: "创新", en: "Innovation" }
    ]
  },
  {
    id: "video-002",
    title: {
      zh: "商业模式创新案例分析",
      en: "Business Model Innovation Case Analysis"
    },
    description: {
      zh: "通过阿里巴巴、腾讯等知名企业案例，解析平台经济时代的商业模式创新规律。",
      en: "Analyzes business model innovation patterns in the platform economy era through case studies of renowned companies like Alibaba and Tencent."
    },
    thumbnailUrl: "/thumbnails/business-model-innovation.jpg",
    videoUrl: "https://example.com/videos/business-model-innovation.mp4",
    duration: "38:45",
    publishDate: "2023-07-22",
    category: "lecture",
    views: 9876,
    tags: [
      { zh: "商业模式", en: "Business Model" },
      { zh: "平台经济", en: "Platform Economy" },
      { zh: "案例分析", en: "Case Analysis" }
    ]
  },
  {
    id: "video-003",
    title: {
      zh: "领导力与组织变革",
      en: "Leadership and Organizational Change"
    },
    description: {
      zh: "探讨现代企业领导者如何引领组织变革，建立学习型组织文化。",
      en: "Explores how modern business leaders can lead organizational change and build a learning organizational culture."
    },
    thumbnailUrl: "/thumbnails/leadership-change.jpg",
    videoUrl: "https://example.com/videos/leadership-change.mp4",
    duration: "52:18",
    publishDate: "2023-06-10",
    category: "conference",
    views: 7654,
    tags: [
      { zh: "领导力", en: "Leadership" },
      { zh: "组织变革", en: "Organizational Change" },
      { zh: "企业文化", en: "Corporate Culture" }
    ]
  }
];

// Academic Activities
export const academicActivities: Activity[] = [
  {
    title: {
      zh: "中欧国际工商学院供应链管理论坛",
      en: "CEIBS Supply Chain Management Forum"
    },
    type: "academic",
    date: "2023-10-15",
    location: {
      zh: "上海",
      en: "Shanghai"
    },
    description: {
      zh: "组织举办中欧国际工商学院供应链管理论坛，聚焦数字化供应链创新",
      en: "Organized CEIBS Supply Chain Management Forum, focusing on digital supply chain innovation"
    },
    role: {
      zh: "主办方代表",
      en: "Host Representative"
    }
  },
  {
    title: {
      zh: "国际供应链管理学术会议",
      en: "International Supply Chain Management Academic Conference"
    },
    type: "academic",
    date: "2023-06-20",
    location: {
      zh: "北京",
      en: "Beijing"
    },
    description: {
      zh: "发表主题演讲：「数字化时代的供应链创新」",
      en: "Delivered keynote speech: 'Supply Chain Innovation in the Digital Era'"
    },
    role: {
      zh: "主题演讲嘉宾",
      en: "Keynote Speaker"
    }
  },
  {
    title: {
      zh: "亚洲运营管理学会年会",
      en: "Asian Operations Management Society Annual Conference"
    },
    type: "academic",
    date: "2022-11-10",
    location: {
      zh: "新加坡",
      en: "Singapore"
    },
    description: {
      zh: "参与亚洲运营管理学会年会，交流供应链管理研究成果",
      en: "Participated in Asian Operations Management Society Annual Conference, sharing supply chain management research findings"
    },
    role: {
      zh: "学术委员会成员",
      en: "Academic Committee Member"
    }
  },
  {
    title: {
      zh: "生产运作管理学会(POMS)年会",
      en: "Production and Operations Management Society (POMS) Annual Conference"
    },
    type: "academic",
    date: "2022-05-15",
    location: {
      zh: "美国波士顿",
      en: "Boston, USA"
    },
    description: {
      zh: "参与POMS年会，展示供应链数字化转型研究成果",
      en: "Participated in POMS Annual Conference, presenting research on supply chain digital transformation"
    },
    role: {
      zh: "研究者",
      en: "Researcher"
    }
  }
];

// Business Activities
export const businessActivities: Activity[] = [
  {
    title: {
      zh: "京东集团供应链管理培训",
      en: "JD Group Supply Chain Management Training"
    },
    type: "business",
    date: "2023-04-21",
    location: {
      zh: "北京",
      en: "Beijing"
    },
    description: {
      zh: "为京东集团提供供应链管理高管培训，分享数字化供应链最佳实践",
      en: "Provided supply chain management executive training for JD Group, sharing digital supply chain best practices"
    },
    role: {
      zh: "主讲导师",
      en: "Lead Instructor"
    }
  },
  {
    title: {
      zh: "腾讯集团数字化转型咨询",
      en: "Tencent Group Digital Transformation Consulting"
    },
    type: "business",
    date: "2023-01-15",
    location: {
      zh: "深圳",
      en: "Shenzhen"
    },
    description: {
      zh: "为腾讯集团提供数字化转型战略咨询服务，协助制定供应链数字化策略",
      en: "Provided digital transformation strategic consulting services for Tencent Group, helping formulate supply chain digitalization strategy"
    },
    role: {
      zh: "战略顾问",
      en: "Strategic Consultant"
    }
  },
  {
    title: {
      zh: "上汽大众供应链创新培训",
      en: "SAIC Volkswagen Supply Chain Innovation Training"
    },
    type: "business",
    date: "2022-08-25",
    location: {
      zh: "上海",
      en: "Shanghai"
    },
    description: {
      zh: "为上汽大众集团提供供应链创新与服务培训",
      en: "Provided supply chain innovation and service training for SAIC Volkswagen Group"
    },
    role: {
      zh: "培训导师",
      en: "Training Instructor"
    }
  },
  {
    title: {
      zh: "中粮集团供应链战略与商业模式创新培训",
      en: "COFCO Group Supply Chain Strategy and Business Model Innovation Training"
    },
    type: "business",
    date: "2017-07-26",
    location: {
      zh: "北京",
      en: "Beijing"
    },
    description: {
      zh: "为中粮集团提供供应链战略与商业模式创新培训",
      en: "Provided supply chain strategy and business model innovation training for COFCO Group"
    },
    role: {
      zh: "主讲导师",
      en: "Lead Instructor"
    }
  },
  {
    title: {
      zh: "海尔集团供应链与服务创新培训",
      en: "Haier Group Supply Chain and Service Innovation Training"
    },
    type: "business",
    date: "2015-07-10",
    location: {
      zh: "青岛",
      en: "Qingdao"
    },
    description: {
      zh: "为海尔集团提供供应链与服务创新培训，分享传统制造业转型经验",
      en: "Provided supply chain and service innovation training for Haier Group, sharing traditional manufacturing transformation experience"
    },
    role: {
      zh: "首席顾问",
      en: "Chief Consultant"
    }
  }
];

// Professional Experiences
export const professionalExperiences: ProfessionalExperience[] = [
  {
    title: {
      zh: "世界经济论坛全球议题理事会成员",
      en: "Member of Global Agenda Council, World Economic Forum"
    },
    organization: {
      zh: "世界经济论坛",
      en: "World Economic Forum"
    },
    startDate: "2018",
    endDate: "2021",
    description: {
      zh: "担任世界经济论坛物流与供应链未来全球议题理事会成员，参与全球供应链政策制定和未来发展方向讨论",
      en: "Served as member of Global Agenda Council on Future of Logistics and Supply Chain, participating in global supply chain policy development and future direction discussions"
    },
    type: "committee",
    location: {
      zh: "瑞士达沃斯",
      en: "Davos, Switzerland"
    },
    achievements: [
      {
        zh: "参与起草《全球供应链韧性白皮书》",
        en: "Participated in drafting the Global Supply Chain Resilience White Paper"
      },
      {
        zh: "主导亚太地区供应链数字化转型研究",
        en: "Led research on supply chain digital transformation in Asia-Pacific region"
      }
    ],
    isOngoing: false
  },
  {
    title: {
      zh: "国际产业链联盟创始主席",
      en: "Founding President of International Alliance of Industry Chain (IAIC)"
    },
    organization: {
      zh: "国际产业链联盟",
      en: "International Alliance of Industry Chain"
    },
    startDate: "2020",
    description: {
      zh: "创立并担任国际产业链联盟创始主席，致力于促进全球产业链协作与可持续发展，推动产业链数字化和绿色化转型",
      en: "Founded and served as founding president of IAIC, committed to promoting global industrial chain cooperation and sustainable development, driving digitalization and green transformation of industrial chains"
    },
    type: "board",
    location: {
      zh: "全球",
      en: "Global"
    },
    achievements: [
      {
        zh: "建立覆盖50+国家的产业链合作网络",
        en: "Established industrial chain cooperation network covering 50+ countries"
      },
      {
        zh: "发布《全球产业链发展指数》年度报告",
        en: "Published annual Global Industrial Chain Development Index report"
      },
      {
        zh: "组织多次国际产业链峰会",
        en: "Organized multiple international industrial chain summits"
      }
    ],
    isOngoing: true
  },
  {
    title: {
      zh: "阿里巴巴集团战略顾问",
      en: "Strategic Advisor, Alibaba Group"
    },
    organization: {
      zh: "阿里巴巴集团",
      en: "Alibaba Group"
    },
    startDate: "2019",
    endDate: "2023",
    description: {
      zh: "为阿里巴巴集团提供供应链战略和数字化转型咨询，参与菜鸟网络全球化布局规划",
      en: "Provided supply chain strategy and digital transformation consulting for Alibaba Group, participated in Cainiao Network's global expansion planning"
    },
    type: "consulting",
    location: {
      zh: "杭州/上海",
      en: "Hangzhou/Shanghai"
    },
    achievements: [
      {
        zh: "参与制定菜鸟网络五年发展战略",
        en: "Participated in formulating Cainiao Network's five-year development strategy"
      },
      {
        zh: "指导新零售供应链创新项目",
        en: "Guided new retail supply chain innovation projects"
      }
    ],
    isOngoing: false
  },
  {
    title: {
      zh: "京东集团独立董事",
      en: "Independent Director, JD.com"
    },
    organization: {
      zh: "京东集团",
      en: "JD.com"
    },
    startDate: "2021",
    description: {
      zh: "担任京东集团独立董事，参与公司重大战略决策，监督公司治理和风险管理",
      en: "Serving as independent director of JD.com, participating in major strategic decisions, overseeing corporate governance and risk management"
    },
    type: "board",
    location: {
      zh: "北京",
      en: "Beijing"
    },
    achievements: [
      {
        zh: "推动供应链ESG（环境、社会、治理）实践",
        en: "Promoted supply chain ESG (Environmental, Social, Governance) practices"
      },
      {
        zh: "参与制定数字化供应链标准",
        en: "Participated in developing digital supply chain standards"
      }
    ],
    isOngoing: true
  },
  {
    title: {
      zh: "中国物流与采购联合会专家委员会主任",
      en: "Director of Expert Committee, China Federation of Logistics and Purchasing"
    },
    organization: {
      zh: "中国物流与采购联合会",
      en: "China Federation of Logistics and Purchasing"
    },
    startDate: "2016",
    description: {
      zh: "担任中国物流与采购联合会专家委员会主任，为行业政策制定和标准建设提供专业指导",
      en: "Serving as Director of Expert Committee at China Federation of Logistics and Purchasing, providing professional guidance for industry policy development and standard construction"
    },
    type: "advisory",
    location: {
      zh: "北京",
      en: "Beijing"
    },
    achievements: [
      {
        zh: "参与制定《中国智慧物流发展规划》",
        en: "Participated in formulating China Smart Logistics Development Plan"
      },
      {
        zh: "推动物流行业标准化建设",
        en: "Promoted standardization construction in logistics industry"
      }
    ],
    isOngoing: true
  },
  {
    title: {
      zh: "腾讯云供应链数字化转型顾问",
      en: "Supply Chain Digital Transformation Advisor, Tencent Cloud"
    },
    organization: {
      zh: "腾讯云",
      en: "Tencent Cloud"
    },
    startDate: "2022",
    endDate: "2024",
    description: {
      zh: "为腾讯云提供供应链数字化转型解决方案咨询，协助开发面向制造业的供应链管理平台",
      en: "Provided supply chain digital transformation solution consulting for Tencent Cloud, assisted in developing supply chain management platform for manufacturing industry"
    },
    type: "consulting",
    location: {
      zh: "深圳",
      en: "Shenzhen"
    },
    achievements: [
      {
        zh: "设计制造业供应链数字化解决方案框架",
        en: "Designed digital solution framework for manufacturing supply chain"
      },
      {
        zh: "指导多个大型企业数字化转型项目",
        en: "Guided multiple large enterprise digital transformation projects"
      }
    ],
    isOngoing: false
  }
];

// Journal Positions
export const journalPositions: JournalPosition[] = [
  {
    journalName: {
      zh: "运营管理期刊",
      en: "Journal of Operations Management"
    },
    position: {
      zh: "编委会成员",
      en: "Editorial Board Member"
    },
    startDate: "2020",
    description: {
      zh: "担任国际顶级运营管理期刊编委会成员，负责审稿和学术指导工作",
      en: "Serving as Editorial Board Member of top international operations management journal, responsible for peer review and academic guidance"
    },
    category: "editorial_board",
    isActive: true
  },
  {
    journalName: {
      zh: "供应链管理期刊",
      en: "Supply Chain Management: An International Journal"
    },
    position: {
      zh: "副主编",
      en: "Associate Editor"
    },
    startDate: "2018",
    description: {
      zh: "担任供应链管理国际期刊副主编，负责学术质量把控和编辑决策",
      en: "Serving as Associate Editor of international supply chain management journal, responsible for academic quality control and editorial decisions"
    },
    category: "associate_editor",
    isActive: true
  },
  {
    journalName: {
      zh: "管理科学学报",
      en: "Journal of Management Sciences in China"
    },
    position: {
      zh: "编委会成员",
      en: "Editorial Board Member"
    },
    startDate: "2015",
    description: {
      zh: "担任中国管理科学学报编委会成员，促进中国管理学术研究发展",
      en: "Serving as Editorial Board Member of Journal of Management Sciences in China, promoting the development of management academic research in China"
    },
    category: "editorial_board",
    isActive: true
  },
  {
    journalName: {
      zh: "生产与运营管理",
      en: "Production and Operations Management"
    },
    position: {
      zh: "特约审稿人",
      en: "Ad-hoc Reviewer"
    },
    startDate: "2010",
    description: {
      zh: "长期担任生产与运营管理期刊特约审稿人，参与学术论文评审工作",
      en: "Long-term service as ad-hoc reviewer for Production and Operations Management journal, participating in academic paper review work"
    },
    category: "reviewer",
    isActive: true
  },
  {
    journalName: {
      zh: "系统工程理论与实践",
      en: "Systems Engineering Theory & Practice"
    },
    position: {
      zh: "编委会成员",
      en: "Editorial Board Member"
    },
    startDate: "2016",
    description: {
      zh: "担任系统工程理论与实践期刊编委会成员，推动系统工程理论发展",
      en: "Serving as Editorial Board Member of Systems Engineering Theory & Practice journal, promoting the development of systems engineering theory"
    },
    category: "editorial_board",
    isActive: true
  },
  {
    journalName: {
      zh: "国际商业研究期刊",
      en: "Journal of International Business Studies"
    },
    position: {
      zh: "特刊客座编辑",
      en: "Guest Editor (Special Issue)"
    },
    startDate: "2022",
    endDate: "2023",
    description: {
      zh: "担任《数字化供应链与全球贸易》特刊客座编辑",
      en: "Served as Guest Editor for special issue on 'Digital Supply Chains and Global Trade'"
    },
    category: "guest_editor",
    isActive: false
  },
  {
    journalName: {
      zh: "运筹学与管理科学",
      en: "Operations Research and Management Science"
    },
    position: {
      zh: "审稿专家",
      en: "Reviewer"
    },
    startDate: "2008",
    description: {
      zh: "担任运筹学与管理科学期刊审稿专家，参与学术质量评估",
      en: "Serving as reviewer for Operations Research and Management Science journal, participating in academic quality assessment"
    },
    category: "reviewer",
    isActive: true
  },
  {
    journalName: {
      zh: "中国管理科学",
      en: "Chinese Journal of Management Science"
    },
    position: {
      zh: "编委会成员",
      en: "Editorial Board Member"
    },
    startDate: "2017",
    description: {
      zh: "担任中国管理科学期刊编委会成员，促进中国管理科学研究国际化",
      en: "Serving as Editorial Board Member of Chinese Journal of Management Science, promoting internationalization of Chinese management science research"
    },
    category: "editorial_board",
    isActive: true
  }
];

// Section Visibility Configuration
export const sectionVisibility: SectionVisibility = {
  caseStudies: true,
  books: true,
  journalPositions: true,
  videos: true,
  academicActivities: true,
  businessActivities: true,
  chinesePublications: true,
  professionalExperiences: true
};