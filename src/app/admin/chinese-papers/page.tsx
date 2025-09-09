'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminSidebar from '@/components/AdminSidebar';
import FileUpload from '@/components/FileUpload';
import AttachmentList from '@/components/AttachmentList';
import { chinesePublications } from '@/data/bilingualProfileData';
import { Publication, Attachment } from '@/types';

export default function AdminChinesePapers() {
  const [publicationsList, setPublicationsList] = useState<Publication[]>(chinesePublications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    volume: '',
    pages: '',
    abstract: '',
    attachments: [] as Attachment[]
  });

  const handleOpenModal = (pub?: Publication) => {
    if (pub) {
      setEditingPublication(pub);
      setFormData({
        title: pub.title.zh,
        authors: pub.authors.join('、'),
        journal: pub.journal.zh,
        year: pub.year,
        volume: pub.volume || '',
        pages: pub.pages || '',
        abstract: pub.abstract?.zh || '',
        attachments: pub.attachments || []
      });
    } else {
      setEditingPublication(null);
      setFormData({
        title: '',
        authors: '',
        journal: '',
        year: '',
        volume: '',
        pages: '',
        abstract: '',
        attachments: []
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPublication(null);
    setFormData({
      title: '',
      authors: '',
      journal: '',
      year: '',
      volume: '',
      pages: '',
      abstract: '',
      attachments: []
    });
  };

  const handleFileUploaded = (attachment: Attachment) => {
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, attachment]
    }));
  };

  const handleDeleteAttachment = (attachmentId: string) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter(att => att.id !== attachmentId)
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPublication: Publication = {
      title: { zh: formData.title, en: formData.title },
      authors: formData.authors.split('、').map(author => author.trim()),
      journal: { zh: formData.journal, en: formData.journal },
      year: formData.year,
      volume: formData.volume || undefined,
      pages: formData.pages || undefined,
      abstract: formData.abstract ? { zh: formData.abstract, en: formData.abstract } : undefined,
      attachments: formData.attachments.length > 0 ? formData.attachments : undefined
    };

    if (editingPublication) {
      setPublicationsList(prev => prev.map(pub => 
        pub === editingPublication ? newPublication : pub
      ));
    } else {
      setPublicationsList(prev => [newPublication, ...prev]);
    }

    handleCloseModal();
  };

  const handleDelete = (pubToDelete: Publication) => {
    if (confirm('确定要删除这篇论文吗？')) {
      setPublicationsList(prev => prev.filter(pub => pub !== pubToDelete));
    }
  };

  return (
    <ProtectedRoute>
      <AdminSidebar>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">中文论文管理</h2>
              <p className="text-gray-600 mt-1">管理中文学术论文和期刊文章</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center space-x-2"
            >
              <span>📄</span>
              <span>添加中文论文</span>
            </button>
          </div>

          {/* Publications List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      论文标题
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      期刊
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      年份
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      作者数
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {publicationsList.map((pub, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 max-w-xs truncate">{pub.title.zh}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{pub.journal.zh}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {pub.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {pub.authors.length} 人
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleOpenModal(pub)}
                          className="text-primary-600 hover:text-primary-900 mr-3"
                        >
                          编辑
                        </button>
                        <button
                          onClick={() => handleDelete(pub)}
                          className="text-red-600 hover:text-red-900"
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {editingPublication ? '编辑中文论文' : '添加中文论文'}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    论文标题 *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="请输入中文论文标题"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="authors" className="block text-sm font-medium text-gray-700 mb-1">
                    作者 * (用顿号「、」分隔)
                  </label>
                  <input
                    type="text"
                    id="authors"
                    name="authors"
                    value={formData.authors}
                    onChange={handleChange}
                    placeholder="如: 赵先德、王良、李明"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="journal" className="block text-sm font-medium text-gray-700 mb-1">
                      期刊名称 *
                    </label>
                    <input
                      type="text"
                      id="journal"
                      name="journal"
                      value={formData.journal}
                      onChange={handleChange}
                      placeholder="如: 管理科学学报"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      发表年份 *
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="如: 2023"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
                      期号/卷号
                    </label>
                    <input
                      type="text"
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="如: 第38期"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="pages" className="block text-sm font-medium text-gray-700 mb-1">
                      页码
                    </label>
                    <input
                      type="text"
                      id="pages"
                      name="pages"
                      value={formData.pages}
                      onChange={handleChange}
                      placeholder="如: 85-96"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-1">
                    摘要
                  </label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    rows={4}
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder="论文摘要 (可选)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* File Attachments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    附件上传
                  </label>
                  <FileUpload
                    onFileUploaded={handleFileUploaded}
                    className="mb-4"
                  />
                  {formData.attachments.length > 0 && (
                    <AttachmentList
                      attachments={formData.attachments}
                      onDelete={handleDeleteAttachment}
                      showDelete={true}
                      className="mt-4"
                    />
                  )}
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700"
                  >
                    {editingPublication ? '保存更改' : '添加论文'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </AdminSidebar>
    </ProtectedRoute>
  );
}