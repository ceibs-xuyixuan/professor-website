'use client';

import { useState, useRef } from 'react';
import { Attachment } from '@/types';

interface FileUploadProps {
  onFileUploaded: (attachment: Attachment) => void;
  acceptedTypes?: string;
  maxSizeMB?: number;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUploaded,
  acceptedTypes = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt',
  maxSizeMB = 10,
  className = ''
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      alert(`文件大小不能超过 ${maxSizeMB}MB`);
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate file upload process
      // In a real application, you would upload to a server or cloud storage
      const uploadSimulation = new Promise<string>((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
            // Create a local URL for demo purposes
            const fileUrl = URL.createObjectURL(file);
            resolve(fileUrl);
          }
        }, 100);
      });

      const fileUrl = await uploadSimulation;

      // Create attachment object
      const attachment: Attachment = {
        id: `attachment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        originalName: file.name,
        size: file.size,
        type: file.type,
        url: fileUrl,
        uploadDate: new Date().toISOString()
      };

      onFileUploaded(attachment);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('File upload failed:', error);
      alert('文件上传失败，请重试');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        onChange={handleFileSelect}
        disabled={isUploading}
        className="hidden"
        id="file-upload"
      />
      
      <label
        htmlFor="file-upload"
        className={`
          flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer
          ${isUploading 
            ? 'border-blue-300 bg-blue-50' 
            : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
          }
          ${isUploading ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {isUploading ? (
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 mb-2">
              <svg className="animate-spin w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-sm text-blue-600">上传中... {uploadProgress}%</p>
            <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-500">
              <span className="font-medium">点击上传文件</span>
            </p>
            <p className="text-xs text-gray-400">支持 PDF, DOC, PPT, XLS 等格式，最大 {maxSizeMB}MB</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUpload;