'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface AdminSidebarProps {
  children: React.ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Organized menu groups
  const menuGroups = [
    {
      title: '系统管理',
      items: [
        { name: '控制台', href: '/admin', icon: '📊', description: '总览和快速操作' },
        { name: '页面展示', href: '/admin/section-visibility', icon: '👁️', description: '控制页面显示' }
      ]
    },
    {
      title: '个人信息',
      items: [
        { name: '个人简介', href: '/admin/profile', icon: '👤', description: '基本信息设置' },
        { name: '教育背景', href: '/admin/education', icon: '🎓', description: '学历信息管理' },
        { name: '工作经历', href: '/admin/experience', icon: '💼', description: '职业经历管理' },
        { name: '专业经历', href: '/admin/professional-experiences', icon: '🏆', description: '专业服务经历' },
        { name: '个人奖项', href: '/admin/awards', icon: '🏅', description: '荣誉奖项管理' }
      ]
    },
    {
      title: '学术成果',
      items: [
        { name: '英文论文', href: '/admin/english-papers', icon: '📝', description: '英文发表管理' },
        { name: '中文论文', href: '/admin/chinese-papers', icon: '📄', description: '中文发表管理' },
        { name: '案例管理', href: '/admin/cases', icon: '📋', description: '教学案例管理' },
        { name: '书籍管理', href: '/admin/books', icon: '📚', description: '出版著作管理' },
        { name: '期刊任职', href: '/admin/journal-positions', icon: '📰', description: '期刊编辑职务' }
      ]
    },
    {
      title: '活动媒体',
      items: [
        { name: '视频管理', href: '/admin/videos', icon: '🎬', description: '视频内容管理' },
        { name: '学术活动', href: '/admin/academic-activities', icon: '🎪', description: '学术会议活动' },
        { name: '商业活动', href: '/admin/business-activities', icon: '🏢', description: '商业培训活动' }
      ]
    }
  ];

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-xl border-r border-gray-200 transition-all duration-300 ease-in-out ${
        sidebarOpen ? 'w-72' : 'w-16'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                📊
              </div>
              {sidebarOpen && (
                <div>
                  <h2 className="text-xl font-bold text-gray-800">管理后台</h2>
                  <p className="text-xs text-gray-500">内容管理系统</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title={sidebarOpen ? '折叠侧边栏' : '展开侧边栏'}
            >
              <svg 
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  sidebarOpen ? 'rotate-0' : 'rotate-180'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto px-2 py-4">
            <div className="space-y-6">
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {sidebarOpen && (
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {group.title}
                      </h3>
                    </div>
                  )}
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 border-r-2 border-primary-500'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          } ${!sidebarOpen && 'justify-center'}`}
                          title={!sidebarOpen ? item.name : ''}
                        >
                          <span className={`text-lg transition-transform duration-200 ${
                            isActive ? 'scale-110' : 'group-hover:scale-105'
                          }`}>
                            {item.icon}
                          </span>
                          {sidebarOpen && (
                            <div className="ml-3 flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`font-medium ${
                                  isActive ? 'text-primary-700' : 'text-gray-700 group-hover:text-gray-900'
                                }`}>
                                  {item.name}
                                </span>
                                {isActive && (
                                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                )}
                              </div>
                              <p className={`text-xs mt-0.5 ${
                                isActive ? 'text-primary-600' : 'text-gray-500'
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                  {/* Separator between groups */}
                  {sidebarOpen && groupIndex < menuGroups.length - 1 && (
                    <div className="mx-3 mt-4 border-t border-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* User Info & Logout */}
          <div className="border-t border-gray-100 p-4">
            {sidebarOpen ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user?.username?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{user?.username || '管理员'}</p>
                    <p className="text-sm text-gray-500 truncate">{user?.email || 'admin@example.com'}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  退出登录
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user?.username?.charAt(0).toUpperCase() || 'U'}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full p-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  title="退出登录"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {(() => {
                  // Find current page name from menu groups
                  for (const group of menuGroups) {
                    const item = group.items.find(item => item.href === pathname);
                    if (item) return item.name;
                  }
                  return '管理后台';
                })()}
              </h1>
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{new Date().toLocaleDateString('zh-CN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    weekday: 'long'
                  })}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                查看网站
              </Link>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;