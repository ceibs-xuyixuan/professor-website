'use client';

import { useState } from 'react';
import { videos } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const VideoChannelSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const categories = [
    { value: 'all', label: t('common.all'), color: 'bg-gray-600', icon: '🎯' },
    { value: 'lecture', label: t('video.lecture'), color: 'bg-blue-600', icon: '🎓' },
    { value: 'interview', label: t('video.interview'), color: 'bg-green-600', icon: '🎤' },
    { value: 'conference', label: t('video.conference'), color: 'bg-purple-600', icon: '🏛️' },
    { value: 'tutorial', label: t('video.tutorial'), color: 'bg-orange-600', icon: '📚' },
    { value: 'other', label: t('video.other'), color: 'bg-red-600', icon: '📹' }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const formatViews = (views: number) => {
    if (views >= 10000) {
      return language === 'zh' ? `${(views / 10000).toFixed(1)}万` : `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const formatDuration = (duration: string) => {
    return duration;
  };
  
  const getCategoryInfo = (category: string) => {
    const categoryData = categories.find(c => c.value === category) || categories[0];
    return categoryData;
  };
  
  const getVideoGradient = (index: number) => {
    const gradients = [
      'from-blue-600 to-purple-700',
      'from-green-600 to-teal-700',
      'from-red-600 to-pink-700',
      'from-orange-600 to-amber-700',
      'from-purple-600 to-indigo-700',
      'from-teal-600 to-cyan-700'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="videos" className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.videos')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '学术讲座、访谈和教学视频，分享知识和见解'
              : 'Academic lectures, interviews and educational videos, sharing knowledge and insights'
            }
          </p>
        </div>
        
        {/* Enhanced Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    isSelected
                      ? `${category.color} text-white shadow-xl`
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-semibold">{category.label}</span>
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="card group hover:scale-105 transition-transform duration-300">
              {/* Video Thumbnail */}
              <div className="relative mb-4 cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400 group-hover:text-primary-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-academic-900 leading-tight group-hover:text-primary-600 transition-colors">
                  {getText(video.title, language)}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                  {getText(video.description, language)}
                </p>
                
                {/* Video Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    {video.views && (
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>{formatViews(video.views)}{t('common.views')}</span>
                      </div>
                    )}
                    <span>{new Date(video.publishDate).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {video.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-primary-700 bg-primary-100 px-2 py-1 rounded-full"
                    >
                      {getText(tag, language)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-academic-900">
                    {getText(videos.find(v => v.id === selectedVideo)?.title || { zh: '', en: '' }, language)}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                {/* Video Player Placeholder */}
                <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                    <p>{language === 'zh' ? '视频播放器' : 'Video Player'}</p>
                    <p className="text-sm text-gray-300">
                      {language === 'zh' ? '实际实现时可集成第三方播放器' : 'Third-party player can be integrated in actual implementation'}
                    </p>
                  </div>
                </div>
                
                {/* Video Description */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {getText(videos.find(v => v.id === selectedVideo)?.description || { zh: '', en: '' }, language)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {videos.find(v => v.id === selectedVideo)?.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full"
                      >
                        {getText(tag, language)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoChannelSection;