'use client';

import { useState, useEffect } from 'react';
import { SectionVisibility } from '@/types';
import { useSectionVisibility } from '@/contexts/SectionVisibilityContext';

const sectionConfigs = [
  {
    key: 'caseStudies' as keyof SectionVisibility,
    nameZh: '案例列表',
    nameEn: 'Case Studies',
    icon: '📋',
    description: '展示教学案例和商业案例研究'
  },
  {
    key: 'books' as keyof SectionVisibility,
    nameZh: '书籍列表',
    nameEn: 'Books',
    icon: '📚',
    description: '展示已出版的学术著作和教材'
  },
  {
    key: 'chinesePublications' as keyof SectionVisibility,
    nameZh: '中文期刊',
    nameEn: 'Chinese Publications',
    icon: '📄',
    description: '展示中文学术论文和期刊发表'
  },
  {
    key: 'professionalExperiences' as keyof SectionVisibility,
    nameZh: '专业经历',
    nameEn: 'Professional Experiences',
    icon: '🎼',
    description: '展示专业咨询、董事职务和行业领导经历'
  },
  {
    key: 'journalPositions' as keyof SectionVisibility,
    nameZh: '期刊任职',
    nameEn: 'Journal Positions',
    icon: '📰',
    description: '展示在学术期刊的编辑职务'
  },
  {
    key: 'videos' as keyof SectionVisibility,
    nameZh: '个人视频',
    nameEn: 'Video Channel',
    icon: '🎬',
    description: '展示讲座视频和学术分享'
  },
  {
    key: 'academicActivities' as keyof SectionVisibility,
    nameZh: '学术活动',
    nameEn: 'Academic Activities',
    icon: '🎪',
    description: '展示参与的学术会议和研讨会'
  },
  {
    key: 'businessActivities' as keyof SectionVisibility,
    nameZh: '商业活动',
    nameEn: 'Business Activities',
    icon: '🏢',
    description: '展示商业培训和咨询活动'
  }
];

export default function SectionVisibilityAdminPage() {
  const { sectionVisibility, updateSectionVisibility, setSectionVisibility } = useSectionVisibility();
  const [hasChanges, setHasChanges] = useState(false);
  const [tempVisibility, setTempVisibility] = useState<SectionVisibility>(sectionVisibility);

  useEffect(() => {
    setTempVisibility(sectionVisibility);
  }, [sectionVisibility]);

  const handleToggle = (section: keyof SectionVisibility) => {
    const newVisibility = {
      ...tempVisibility,
      [section]: !tempVisibility[section]
    };
    setTempVisibility(newVisibility);
    setHasChanges(true);
  };

  const handleSave = () => {
    setSectionVisibility(tempVisibility);
    setHasChanges(false);
    alert('页面展示设置已保存！');
  };

  const handleReset = () => {
    setTempVisibility(sectionVisibility);
    setHasChanges(false);
  };

  const handleShowAll = () => {
    const allVisible: SectionVisibility = {
      caseStudies: true,
      books: true,
      journalPositions: true,
      videos: true,
      academicActivities: true,
      businessActivities: true,
      chinesePublications: true,
      professionalExperiences: true
    };
    setTempVisibility(allVisible);
    setHasChanges(true);
  };

  const handleHideAll = () => {
    const allHidden: SectionVisibility = {
      caseStudies: false,
      books: false,
      journalPositions: false,
      videos: false,
      academicActivities: false,
      businessActivities: false,
      chinesePublications: false,
      professionalExperiences: false
    };
    setTempVisibility(allHidden);
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">页面展示管理</h1>
          <p className="text-gray-600 mt-1">控制网站首页各个版块的显示与隐藏</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleShowAll}
            className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200"
          >
            全部显示
          </button>
          <button
            onClick={handleHideAll}
            className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200"
          >
            全部隐藏
          </button>
        </div>
      </div>

      {/* Section Toggle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionConfigs.map((config) => (
          <div
            key={config.key}
            className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all duration-200 ${
              tempVisibility[config.key]
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{config.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {config.nameZh}
                  </h3>
                  <p className="text-sm text-gray-500">{config.nameEn}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={tempVisibility[config.key]}
                  onChange={() => handleToggle(config.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">{config.description}</p>
            <div className={`text-sm font-medium ${
              tempVisibility[config.key] ? 'text-green-700' : 'text-red-700'
            }`}>
              {tempVisibility[config.key] ? '✅ 当前显示' : '❌ 当前隐藏'}
            </div>
          </div>
        ))}
      </div>

      {/* Save Panel */}
      {hasChanges && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg border p-4 max-w-sm">
          <div className="flex items-center space-x-2 mb-3">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">有未保存的更改</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex-1 px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              保存设置
            </button>
            <button
              onClick={handleReset}
              className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              取消
            </button>
          </div>
        </div>
      )}

      {/* Preview Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-1">预览提示</h4>
            <p className="text-sm text-blue-700">
              设置保存后，访问网站首页即可看到更改效果。隐藏的版块不会在主页和导航菜单中显示。
            </p>
          </div>
        </div>
      </div>

      {/* Current Status Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">当前显示状态</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sectionConfigs.map((config) => (
            <div key={config.key} className="flex items-center space-x-2">
              <span className="text-lg">{config.icon}</span>
              <span className={`text-sm ${
                tempVisibility[config.key] ? 'text-green-700' : 'text-gray-500 line-through'
              }`}>
                {config.nameZh}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${
                tempVisibility[config.key] 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tempVisibility[config.key] ? '显示' : '隐藏'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}