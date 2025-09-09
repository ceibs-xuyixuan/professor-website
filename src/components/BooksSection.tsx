'use client';

import { books } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const BooksSection = () => {
  const { language, t } = useLanguage();
  
  const getBookCoverGradient = (index: number) => {
    const gradients = [
      'from-amber-500 via-orange-600 to-red-600',
      'from-blue-600 via-purple-600 to-indigo-700',
      'from-green-500 via-teal-600 to-cyan-700',
      'from-pink-500 via-red-500 to-yellow-500',
      'from-indigo-600 via-blue-600 to-cyan-600',
      'from-purple-600 via-pink-600 to-red-600'
    ];
    return gradients[index % gradients.length];
  };
  
  const getBookIcon = (index: number) => {
    const icons = [
      // Book open
      <path key="book-open" d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />,
      // Academic cap
      <path key="academic" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>,
      // Library
      <path key="library" d="M7 4a1 1 0 000 2h6a1 1 0 100-2H7zM4 8a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm-1 5a2 2 0 012-2h8a2 2 0 012 2v2a1 1 0 102 0v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2a1 1 0 102 0v-2z"/>,
      // Collection
      <path key="collection" d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
    ];
    return icons[index % icons.length];
  };
  
  return (
    <section id="books" className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.books')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '出版的专业书籍和学术著作，展示知识体系和学术贡献'
              : 'Published professional books and academic works, showcasing knowledge systems and scholarly contributions'
            }
          </p>
        </div>
        
        <div className="space-y-12">
          {books.map((book, index) => {
            const isEven = index % 2 === 0;
            const gradient = getBookCoverGradient(index);
            
            return (
              <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Book Cover */}
                  <div className={`lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''} p-8 flex justify-center`}>
                    <div className="relative group/cover">
                      {/* Main book cover */}
                      <div className={`w-48 h-72 bg-gradient-to-br ${gradient} rounded-2xl shadow-2xl flex flex-col items-center justify-center transform group-hover/cover:rotate-3 group-hover/cover:scale-105 transition-all duration-500 relative overflow-hidden`}>
                        {/* Book spine effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-black bg-opacity-20 rounded-l-2xl"></div>
                        
                        {/* Book icon */}
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            {getBookIcon(index)}
                          </svg>
                        </div>
                        
                        {/* Book title on cover */}
                        <div className="text-white text-center px-4">
                          <div className="text-lg font-bold mb-2 leading-tight">
                            {getText(book.title, language).split(' ').slice(0, 3).join(' ')}
                            {getText(book.title, language).split(' ').length > 3 && '...'}
                          </div>
                          <div className="text-sm opacity-90">
                            {book.authors[0]}
                            {book.authors.length > 1 && ` +${book.authors.length - 1}`}
                          </div>
                        </div>
                        
                        {/* Year badge */}
                        <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          {book.year}
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-white bg-opacity-15 rounded-full"></div>
                      </div>
                      
                      {/* Book shadow/base */}
                      <div className={`absolute -bottom-2 -right-2 w-48 h-72 bg-gray-400 rounded-2xl -z-10 transform group-hover/cover:translate-x-1 group-hover/cover:translate-y-1 transition-transform duration-500`}></div>
                    </div>
                  </div>
                  
                  {/* Book Details */}
                  <div className={`lg:col-span-3 ${!isEven ? 'lg:col-start-1' : ''} p-8 space-y-6`}>
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors mb-4">
                            {getText(book.title, language)}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Authors */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                            {language === 'zh' ? '作者' : 'Authors'}
                          </div>
                          <div className="text-xl font-semibold text-gray-700">
                            {book.authors.join(language === 'zh' ? '、' : ', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Publication Information */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Publisher */}
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                              {language === 'zh' ? '出版社' : 'Publisher'}
                            </div>
                            <div className="font-semibold text-amber-700">
                              {getText(book.publisher, language)}
                            </div>
                          </div>
                        </div>
                        
                        {/* ISBN */}
                        {book.isbn && (
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                ISBN
                              </div>
                              <div className="font-semibold text-gray-700 font-mono">
                                {book.isbn}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{language === 'zh' ? '内容简介' : 'Description'}</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {getText(book.description, language)}
                      </p>
                    </div>
                    
                    {/* Book Statistics */}
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{book.year}</div>
                        <div className="text-sm text-gray-600">
                          {language === 'zh' ? '出版年份' : 'Published'}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{book.authors.length}</div>
                        <div className="text-sm text-gray-600">
                          {language === 'zh' ? '作者数' : 'Authors'}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-600">
                          {language === 'zh' ? '已出版' : 'Published'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Books Summary */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">{books.length}</div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '总书籍数' : 'Total Books'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.max(...books.map(b => parseInt(b.year)))}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '最新出版' : 'Latest Publication'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {new Set(books.map(b => getText(b.publisher, language))).size}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '出版社数' : 'Publishers'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {books.reduce((sum, book) => sum + book.authors.length, 0)}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '总作者数' : 'Total Authors'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;