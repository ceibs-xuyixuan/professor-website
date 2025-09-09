'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values when context is not available
    return {
      language: 'zh' as Language,
      setLanguage: () => {},
      t: (key: string) => key
    };
  }
  return context;
};

// Translation dictionaries
const translations = {
  zh: {
    // Navigation
    'nav.profile': '个人简介',
    'nav.education': '教育背景',
    'nav.experience': '工作经历',
    'nav.awards': '个人奖项',
    'nav.englishPapers': '英文论文',
    'nav.chinesePapers': '中文论文',
    'nav.cases': '案例列表',
    'nav.books': '书籍列表',
    'nav.journalPositions': '期刊任职',
    'nav.professionalExperiences': '专业经历',
    'nav.videos': '个人视频',
    'nav.academicActivities': '学术活动',
    'nav.businessActivities': '商业活动',
    'nav.admin': '管理后台',
    
    // Sections
    'section.profile': '个人简介',
    'section.education': '教育背景',
    'section.experience': '工作经历',
    'section.awards': '个人奖项',
    'section.englishPapers': '英文论文',
    'section.chinesePapers': '中文论文',
    'section.cases': '案例列表',
    'section.books': '书籍列表',
    'section.journalPositions': '期刊任职',
    'section.professionalExperiences': '专业经历',
    'section.videos': '个人视频',
    'section.academicActivities': '学术活动',
    'section.businessActivities': '商业活动',
    
    // Common
    'common.contact': '联系方式',
    'common.researchInterests': '研究领域',
    'common.responsibilities': '主要职责：',
    'common.abstract': '摘要：',
    'common.authors': '作者：',
    'common.publishDate': '发布日期',
    'common.views': '次观看',
    'common.duration': '时长',
    'common.category': '类别',
    'common.tags': '标签',
    'common.all': '全部',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.edit': '编辑',
    'common.delete': '删除',
    'common.add': '添加',
    'common.loading': '加载中...',
    
    // Video categories
    'video.lecture': '讲座',
    'video.interview': '访谈',
    'video.conference': '会议',
    'video.tutorial': '教程',
    'video.other': '其他',
    
    // Footer
    'footer.contactInfo': '联系信息',
    'footer.academicResources': '学术资源',
    'footer.socialMedia': '社交媒体',
    'footer.researchCenter': '研究中心',
    'footer.academicJournal': '学术期刊',
    'footer.conferenceProceedings': '会议论文',
    'footer.copyright': '版权所有',
    
    // Admin
    'admin.login': '管理员登录',
    'admin.username': '用户名',
    'admin.password': '密码',
    'admin.loginButton': '登录',
    'admin.dashboard': '管理后台',
    'admin.welcome': '欢迎回来！',
    'admin.welcomeDesc': '这里是您的网站管理控制台，您可以管理所有的内容。',
    'admin.recentActivities': '最近活动',
    'admin.quickActions': '快速操作',
    'admin.systemStatus': '系统状态',
    'admin.logout': '退出登录',

    // Journal Positions
    'journalPositions.title': '期刊任职',
    'journalPositions.description': '在管理科学和运筹学领域顶级学术期刊担任编辑职务和审稿工作',
    'journalPositions.categories.all': '全部',
    'journalPositions.categories.editorialBoard': '编委会成员',
    'journalPositions.categories.editor': '主编',
    'journalPositions.categories.associateEditor': '副主编',
    'journalPositions.categories.guestEditor': '客座编辑',
    'journalPositions.categories.reviewer': '审稿人',
    'journalPositions.current': '当前任职',
    'journalPositions.present': '至今',
    'journalPositions.showActiveOnly': '仅显示当前任职',
    'journalPositions.noResults': '未找到符合条件的期刊任职记录。',

    // Section Visibility
    'sectionVisibility.title': '页面展示管理',
    'sectionVisibility.description': '控制网站首页各个版块的显示与隐藏',

    // Professional Experiences
    'professionalExperiences.title': '专业经历',
    'professionalExperiences.description': '行业领导、顾问职务和在商业及技术领域的专业贡献',
    'professionalExperiences.types.all': '全部',
    'professionalExperiences.types.consulting': '咨询顾问',
    'professionalExperiences.types.advisory': '顾问委员',
    'professionalExperiences.types.board': '董事职务',
    'professionalExperiences.types.committee': '委员会',
    'professionalExperiences.types.partnership': '合作伙伴',
    'professionalExperiences.types.other': '其他',
    'professionalExperiences.ongoing': '进行中',
    'professionalExperiences.present': '至今',
    'professionalExperiences.achievements': '主要成就：',
    'professionalExperiences.noResults': '未找到符合选定类型的专业经历。',
  },
  en: {
    // Navigation
    'nav.profile': 'Profile',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.awards': 'Awards',
    'nav.englishPapers': 'English Papers',
    'nav.chinesePapers': 'Chinese Papers',
    'nav.cases': 'Case Studies',
    'nav.books': 'Books',
    'nav.journalPositions': 'Journal Positions',
    'nav.professionalExperiences': 'Professional Experiences',
    'nav.videos': 'Video Channel',
    'nav.academicActivities': 'Academic Activities',
    'nav.businessActivities': 'Business Activities',
    'nav.admin': 'Admin Panel',
    
    // Sections
    'section.profile': 'Personal Profile',
    'section.education': 'Education Background',
    'section.experience': 'Work Experience',
    'section.awards': 'Awards & Honors',
    'section.englishPapers': 'English Publications',
    'section.chinesePapers': 'Chinese Publications',
    'section.cases': 'Case Studies',
    'section.books': 'Books & Publications',
    'section.journalPositions': 'Journal Editorial Positions',
    'section.professionalExperiences': 'Professional Experiences',
    'section.videos': 'Video Channel',
    'section.academicActivities': 'Academic Activities',
    'section.businessActivities': 'Business Activities',
    
    // Common
    'common.contact': 'Contact Information',
    'common.researchInterests': 'Research Interests',
    'common.responsibilities': 'Key Responsibilities:',
    'common.abstract': 'Abstract:',
    'common.authors': 'Authors:',
    'common.publishDate': 'Published',
    'common.views': ' views',
    'common.duration': 'Duration',
    'common.category': 'Category',
    'common.tags': 'Tags',
    'common.all': 'All',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.add': 'Add',
    'common.loading': 'Loading...',
    
    // Video categories
    'video.lecture': 'Lecture',
    'video.interview': 'Interview',
    'video.conference': 'Conference',
    'video.tutorial': 'Tutorial',
    'video.other': 'Other',
    
    // Footer
    'footer.contactInfo': 'Contact Info',
    'footer.academicResources': 'Academic Resources',
    'footer.socialMedia': 'Social Media',
    'footer.researchCenter': 'Research Center',
    'footer.academicJournal': 'Academic Journal',
    'footer.conferenceProceedings': 'Conference Proceedings',
    'footer.copyright': 'All rights reserved',
    
    // Admin
    'admin.login': 'Admin Login',
    'admin.username': 'Username',
    'admin.password': 'Password',
    'admin.loginButton': 'Login',
    'admin.dashboard': 'Admin Dashboard',
    'admin.welcome': 'Welcome Back!',
    'admin.welcomeDesc': 'This is your website management console where you can manage all content.',
    'admin.recentActivities': 'Recent Activities',
    'admin.quickActions': 'Quick Actions',
    'admin.systemStatus': 'System Status',
    'admin.logout': 'Logout',

    // Journal Positions
    'journalPositions.title': 'Journal Editorial Positions',
    'journalPositions.description': 'Editorial positions and reviewing roles at leading academic journals in management science and operations research',
    'journalPositions.categories.all': 'All',
    'journalPositions.categories.editorialBoard': 'Editorial Board',
    'journalPositions.categories.editor': 'Editor',
    'journalPositions.categories.associateEditor': 'Associate Editor',
    'journalPositions.categories.guestEditor': 'Guest Editor',
    'journalPositions.categories.reviewer': 'Reviewer',
    'journalPositions.current': 'Current',
    'journalPositions.present': 'Present',
    'journalPositions.showActiveOnly': 'Current positions only',
    'journalPositions.noResults': 'No journal positions found matching the selected criteria.',

    // Section Visibility
    'sectionVisibility.title': 'Section Display Management',
    'sectionVisibility.description': 'Control the visibility of different sections on the website homepage',

    // Professional Experiences
    'professionalExperiences.title': 'Professional Experiences',
    'professionalExperiences.description': 'Industry leadership, advisory roles, and professional contributions in business and technology sectors',
    'professionalExperiences.types.all': 'All',
    'professionalExperiences.types.consulting': 'Consulting',
    'professionalExperiences.types.advisory': 'Advisory',
    'professionalExperiences.types.board': 'Board Position',
    'professionalExperiences.types.committee': 'Committee',
    'professionalExperiences.types.partnership': 'Partnership',
    'professionalExperiences.types.other': 'Other',
    'professionalExperiences.ongoing': 'Ongoing',
    'professionalExperiences.present': 'Present',
    'professionalExperiences.achievements': 'Key Achievements:',
    'professionalExperiences.noResults': 'No professional experiences found for the selected type.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferred_language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLanguageState('zh');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};