'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSectionVisibility } from '@/contexts/SectionVisibilityContext';
import { SectionVisibility } from '@/types';

interface ProtectedPageProps {
  sectionKey: keyof SectionVisibility;
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ 
  sectionKey, 
  children, 
  redirectTo = '/' 
}) => {
  const { sectionVisibility } = useSectionVisibility();
  const router = useRouter();

  useEffect(() => {
    // Check if the section is visible, if not redirect to home
    if (!sectionVisibility[sectionKey]) {
      router.push(redirectTo);
    }
  }, [sectionVisibility, sectionKey, router, redirectTo]);

  // If section is not visible, show loading or nothing
  if (!sectionVisibility[sectionKey]) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">页面加载中...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;