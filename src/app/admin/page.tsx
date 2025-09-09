'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  personalProfile, 
  education, 
  workExperience, 
  awards, 
  englishPublications, 
  chinesePublications, 
  caseStudies, 
  books, 
  videos, 
  academicActivities, 
  businessActivities 
} from '@/data/bilingualProfileData';

export default function AdminDashboard() {
  const stats = [
    { name: '教育背景', value: education.length, icon: '🎓', color: 'bg-blue-500' },
    { name: '工作经历', value: workExperience.length, icon: '💼', color: 'bg-green-500' },
    { name: '个人奖项', value: awards.length, icon: '🏆', color: 'bg-yellow-500' },
    { name: '英文论文', value: englishPublications.length, icon: '📝', color: 'bg-purple-500' },
    { name: '中文论文', value: chinesePublications.length, icon: '📄', color: 'bg-indigo-500' },
    { name: '案例研究', value: caseStudies.length, icon: '📋', color: 'bg-pink-500' },
    { name: '出版书籍', value: books.length, icon: '📚', color: 'bg-red-500' },
    { name: '视频内容', value: videos.length, icon: '🎬', color: 'bg-orange-500' },
    { name: '学术活动', value: academicActivities.length, icon: '🎪', color: 'bg-cyan-500' },
    { name: '商业活动', value: businessActivities.length, icon: '🏢', color: 'bg-teal-500' },
  ];

  const recentActivities = [
    { action: '更新了个人简介', time: '2小时前', type: 'update' },
    { action: '添加了新的视频内容', time: '1天前', type: 'create' },
    { action: '修改了工作经历', time: '3天前', type: 'update' },
    { action: '发布了新的案例研究', time: '1周前', type: 'create' },
  ];

  return (
    <ProtectedRoute>
      <AdminSidebar>
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">欢迎回来！</h2>
            <p className="text-gray-600">这里是您的网站管理控制台，您可以管理所有的内容。</p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full ${stat.color} text-white text-xl`}>
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">最近活动</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'create' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">快速操作</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-sm font-medium text-gray-700">添加论文</div>
                  </button>
                  <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <div className="text-2xl mb-2">🎬</div>
                    <div className="text-sm font-medium text-gray-700">上传视频</div>
                  </button>
                  <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="text-sm font-medium text-gray-700">新增案例</div>
                  </button>
                  <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <div className="text-2xl mb-2">🎪</div>
                    <div className="text-sm font-medium text-gray-700">添加活动</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">系统状态</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">网站状态</p>
                  <p className="text-xs text-gray-500">正常运行</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">数据库</p>
                  <p className="text-xs text-gray-500">连接正常</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">备份状态</p>
                  <p className="text-xs text-gray-500">上次备份: 24小时前</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminSidebar>
    </ProtectedRoute>
  );
}