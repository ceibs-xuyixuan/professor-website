'use client';

import { useState, useEffect } from 'react';
import { ProfessionalExperience } from '@/types';

// Mock data - in a real app, this would come from an API
const mockProfessionalExperiences: ProfessionalExperience[] = [
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
      zh: "创立并担任国际产业链联盟创始主席，致力于促进全球产业链协作与可持续发展",
      en: "Founded and served as founding president of IAIC, committed to promoting global industrial chain cooperation and sustainable development"
    },
    type: "board",
    achievements: [
      {
        zh: "建立覆盖50+国家的产业链合作网络",
        en: "Established industrial chain cooperation network covering 50+ countries"
      }
    ],
    isOngoing: true
  }
];

const typeOptions = [
  { value: 'consulting', label: '咨询顾问' },
  { value: 'advisory', label: '顾问委员' },
  { value: 'board', label: '董事职务' },
  { value: 'committee', label: '委员会' },
  { value: 'partnership', label: '合作伙伴' },
  { value: 'other', label: '其他' }
];

export default function ProfessionalExperiencesAdminPage() {
  const [experiences, setExperiences] = useState<ProfessionalExperience[]>(mockProfessionalExperiences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState<ProfessionalExperience | null>(null);
  const [formData, setFormData] = useState<Partial<ProfessionalExperience>>({
    title: { zh: '', en: '' },
    organization: { zh: '', en: '' },
    startDate: '',
    endDate: '',
    description: { zh: '', en: '' },
    type: 'consulting',
    location: { zh: '', en: '' },
    achievements: [],
    isOngoing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title?.zh || !formData.title?.en || 
        !formData.organization?.zh || !formData.organization?.en || 
        !formData.startDate || !formData.type || !formData.description?.zh || !formData.description?.en) {
      alert('请填写所有必填字段');
      return;
    }

    const newExperience: ProfessionalExperience = {
      title: formData.title,
      organization: formData.organization,
      startDate: formData.startDate,
      endDate: formData.isOngoing ? undefined : formData.endDate,
      description: formData.description,
      type: formData.type as any,
      location: formData.location,
      achievements: formData.achievements || [],
      isOngoing: formData.isOngoing || false
    };

    if (editingExperience) {
      setExperiences(experiences.map((exp, index) => 
        experiences.indexOf(editingExperience) === index ? newExperience : exp
      ));
    } else {
      setExperiences([...experiences, newExperience]);
    }

    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (experience: ProfessionalExperience) => {
    setEditingExperience(experience);
    setFormData({
      title: experience.title,
      organization: experience.organization,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      type: experience.type,
      location: experience.location,
      achievements: experience.achievements,
      isOngoing: experience.isOngoing
    });
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('确定要删除这个专业经历吗？')) {
      setExperiences(experiences.filter((_, i) => i !== index));
    }
  };

  const resetForm = () => {
    setFormData({
      title: { zh: '', en: '' },
      organization: { zh: '', en: '' },
      startDate: '',
      endDate: '',
      description: { zh: '', en: '' },
      type: 'consulting',
      location: { zh: '', en: '' },
      achievements: [],
      isOngoing: false
    });
    setEditingExperience(null);
  };

  const addAchievement = () => {
    setFormData({
      ...formData,
      achievements: [...(formData.achievements || []), { zh: '', en: '' }]
    });
  };

  const updateAchievement = (index: number, field: 'zh' | 'en', value: string) => {
    const newAchievements = [...(formData.achievements || [])];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setFormData({ ...formData, achievements: newAchievements });
  };

  const removeAchievement = (index: number) => {
    const newAchievements = (formData.achievements || []).filter((_, i) => i !== index);
    setFormData({ ...formData, achievements: newAchievements });
  };

  const getTypeLabel = (type: string) => {
    const typeObj = typeOptions.find(opt => opt.value === type);
    return typeObj ? typeObj.label : type;
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'consulting': return 'bg-blue-100 text-blue-800';
      case 'advisory': return 'bg-green-100 text-green-800';
      case 'board': return 'bg-purple-100 text-purple-800';
      case 'committee': return 'bg-orange-100 text-orange-800';
      case 'partnership': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">专业经历管理</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>添加专业经历</span>
        </button>
      </div>

      {/* Professional Experiences List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {experiences.map((experience, index) => (
            <li key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {experience.title.zh}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(experience.type)}`}>
                      {getTypeLabel(experience.type)}
                    </span>
                    {experience.isOngoing && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        进行中
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-900 mb-1">
                    <span className="font-medium">组织机构：</span>
                    {experience.organization.zh} / {experience.organization.en}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">时间：</span>
                    {experience.startDate}
                    {experience.endDate && ` - ${experience.endDate}`}
                    {!experience.endDate && experience.isOngoing && ' - 至今'}
                  </p>
                  {experience.location && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">地点：</span>
                      {experience.location.zh} / {experience.location.en}
                    </p>
                  )}
                  <div className="text-sm text-gray-600 mb-2">
                    <p className="mb-1"><span className="font-medium">中文描述：</span>{experience.description.zh}</p>
                    <p><span className="font-medium">英文描述：</span>{experience.description.en}</p>
                  </div>
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">主要成就：</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>
                            {achievement.zh} / {achievement.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(experience)}
                    className="text-primary-600 hover:text-primary-900 p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-900 p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {experiences.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
          </svg>
          <p className="text-gray-500 text-lg mb-4">暂无专业经历记录</p>
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            添加第一个专业经历
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg rounded-md bg-white max-h-[90vh] overflow-y-auto">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingExperience ? '编辑专业经历' : '添加专业经历'}
                </h3>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">职位标题（中文）*</label>
                    <input
                      type="text"
                      value={formData.title?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        title: { ...formData.title!, zh: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">职位标题（英文）*</label>
                    <input
                      type="text"
                      value={formData.title?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        title: { ...formData.title!, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">组织机构（中文）*</label>
                    <input
                      type="text"
                      value={formData.organization?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        organization: { ...formData.organization!, zh: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">组织机构（英文）*</label>
                    <input
                      type="text"
                      value={formData.organization?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        organization: { ...formData.organization!, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开始时间*</label>
                    <input
                      type="text"
                      value={formData.startDate || ''}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="例如: 2020"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                    <input
                      type="text"
                      value={formData.endDate || ''}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="留空表示进行中"
                      disabled={formData.isOngoing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">类型*</label>
                    <select
                      value={formData.type || 'consulting'}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      {typeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isOngoing || false}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        isOngoing: e.target.checked,
                        endDate: e.target.checked ? '' : formData.endDate
                      })}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">目前进行中</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">地点（中文）</label>
                    <input
                      type="text"
                      value={formData.location?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        location: { ...formData.location!, zh: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">地点（英文）</label>
                    <input
                      type="text"
                      value={formData.location?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        location: { ...formData.location!, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">描述（中文）*</label>
                    <textarea
                      value={formData.description?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        description: { ...formData.description!, zh: e.target.value }
                      })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">描述（英文）*</label>
                    <textarea
                      value={formData.description?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        description: { ...formData.description!, en: e.target.value }
                      })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                {/* Achievements Section */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">主要成就</label>
                    <button
                      type="button"
                      onClick={addAchievement}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      + 添加成就
                    </button>
                  </div>
                  {formData.achievements && formData.achievements.map((achievement, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="中文成就"
                        value={achievement.zh}
                        onChange={(e) => updateAchievement(index, 'zh', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="英文成就"
                          value={achievement.en}
                          onChange={(e) => updateAchievement(index, 'en', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeAchievement(index)}
                          className="px-2 py-2 text-red-600 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                  >
                    {editingExperience ? '更新' : '添加'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}