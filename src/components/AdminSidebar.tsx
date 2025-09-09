'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface AdminSidebarProps {
  children: React.ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: '控制台', href: '/admin', icon: '📊' },
    { name: '个人简介', href: '/admin/profile', icon: '👤' },
    { name: '教育背景', href: '/admin/education', icon: '🎓' },
    { name: '工作经历', href: '/admin/experience', icon: '💼' },
    { name: '个人奖项', href: '/admin/awards', icon: '🏆' },
    { name: '英文论文', href: '/admin/english-papers', icon: '📝' },
    { name: '中文论文', href: '/admin/chinese-papers', icon: '📄' },
    { name: '案例管理', href: '/admin/cases', icon: '📋' },
    { name: '书籍管理', href: '/admin/books', icon: '📚' },
    { name: '视频管理', href: '/admin/videos', icon: '🎬' },
    { name: '学术活动', href: '/admin/academic-activities', icon: '🎪' },
    { name: '商业活动', href: '/admin/business-activities', icon: '🏢' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              {sidebarOpen && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">管理后台</h2>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${!sidebarOpen && 'justify-center'}`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Info & Logout */}
          <div className="border-t p-4">
            {sidebarOpen ? (
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{user?.username}</p>
                  <p>{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  退出登录
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full p-2 text-red-600 hover:bg-red-50 rounded-md"
                title="退出登录"
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              {menuItems.find(item => item.href === pathname)?.name || '管理后台'}
            </h1>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                target="_blank"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 border border-gray-300 rounded-md hover:border-primary-300"
              >
                查看网站
              </Link>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;