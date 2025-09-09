'use client';

import { useState, useEffect } from 'react';
import { JournalPosition } from '@/types';

// Mock data - in a real app, this would come from an API
const mockJournalPositions: JournalPosition[] = [
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
  }
];

const categories = [
  { value: 'editorial_board', label: '编委会成员' },
  { value: 'reviewer', label: '审稿人' },
  { value: 'editor', label: '主编' },
  { value: 'associate_editor', label: '副主编' },
  { value: 'guest_editor', label: '客座编辑' }
];

export default function JournalPositionsAdminPage() {
  const [positions, setPositions] = useState<JournalPosition[]>(mockJournalPositions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPosition, setEditingPosition] = useState<JournalPosition | null>(null);
  const [formData, setFormData] = useState<Partial<JournalPosition>>({
    journalName: { zh: '', en: '' },
    position: { zh: '', en: '' },
    startDate: '',
    endDate: '',
    description: { zh: '', en: '' },
    category: 'editorial_board',
    isActive: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.journalName?.zh || !formData.journalName?.en || 
        !formData.position?.zh || !formData.position?.en || 
        !formData.startDate || !formData.category) {
      alert('请填写所有必填字段');
      return;
    }

    const newPosition: JournalPosition = {
      journalName: formData.journalName,
      position: formData.position,
      startDate: formData.startDate,
      endDate: formData.endDate || undefined,
      description: formData.description,
      category: formData.category as any,
      isActive: formData.isActive || false
    };

    if (editingPosition) {
      setPositions(positions.map((pos, index) => 
        positions.indexOf(editingPosition) === index ? newPosition : pos
      ));
    } else {
      setPositions([...positions, newPosition]);
    }

    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (position: JournalPosition) => {
    setEditingPosition(position);
    setFormData({
      journalName: position.journalName,
      position: position.position,
      startDate: position.startDate,
      endDate: position.endDate,
      description: position.description,
      category: position.category,
      isActive: position.isActive
    });
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('确定要删除这个期刊任职吗？')) {
      setPositions(positions.filter((_, i) => i !== index));
    }
  };

  const resetForm = () => {
    setFormData({
      journalName: { zh: '', en: '' },
      position: { zh: '', en: '' },
      startDate: '',
      endDate: '',
      description: { zh: '', en: '' },
      category: 'editorial_board',
      isActive: true
    });
    setEditingPosition(null);
  };

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(cat => cat.value === category);
    return categoryObj ? categoryObj.label : category;
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'editorial_board': return 'bg-purple-100 text-purple-800';
      case 'editor': return 'bg-red-100 text-red-800';
      case 'associate_editor': return 'bg-blue-100 text-blue-800';
      case 'guest_editor': return 'bg-green-100 text-green-800';
      case 'reviewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">期刊任职管理</h1>
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
          <span>添加期刊任职</span>
        </button>
      </div>

      {/* Journal Positions List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {positions.map((position, index) => (
            <li key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {position.journalName.zh}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(position.category)}`}>
                      {getCategoryLabel(position.category)}
                    </span>
                    {position.isActive && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        当前任职
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-900 mb-1">
                    <span className="font-medium">中文：</span>{position.journalName.zh}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">英文：</span>{position.journalName.en}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">职位：</span>
                    {position.position.zh} / {position.position.en}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">任职时间：</span>
                    {position.startDate}
                    {position.endDate && ` - ${position.endDate}`}
                    {!position.endDate && position.isActive && ' - 至今'}
                  </p>
                  {position.description && (
                    <div className="text-sm text-gray-600">
                      <p className="mb-1"><span className="font-medium">中文描述：</span>{position.description.zh}</p>
                      <p><span className="font-medium">英文描述：</span>{position.description.en}</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(position)}
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

      {positions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-500 text-lg mb-4">暂无期刊任职记录</p>
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            添加第一个期刊任职
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingPosition ? '编辑期刊任职' : '添加期刊任职'}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">期刊名称（中文）*</label>
                    <input
                      type="text"
                      value={formData.journalName?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        journalName: { ...formData.journalName!, zh: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">期刊名称（英文）*</label>
                    <input
                      type="text"
                      value={formData.journalName?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        journalName: { ...formData.journalName!, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">职位（中文）*</label>
                    <input
                      type="text"
                      value={formData.position?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        position: { ...formData.position!, zh: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">职位（英文）*</label>
                    <input
                      type="text"
                      value={formData.position?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        position: { ...formData.position!, en: e.target.value }
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
                      placeholder="留空表示至今"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">类别*</label>
                    <select
                      value={formData.category || 'editorial_board'}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isActive || false}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">当前任职</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">描述（中文）</label>
                    <textarea
                      value={formData.description?.zh || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        description: { ...formData.description!, zh: e.target.value }
                      })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">描述（英文）</label>
                    <textarea
                      value={formData.description?.en || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        description: { ...formData.description!, en: e.target.value }
                      })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
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
                    {editingPosition ? '更新' : '添加'}
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