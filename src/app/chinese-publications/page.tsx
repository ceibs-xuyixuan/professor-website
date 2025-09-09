'use client';

import ChinesePublicationsSection from '@/components/ChinesePublicationsSection';
import ProtectedPage from '@/components/ProtectedPage';

export default function ChinesePublicationsPage() {
  return (
    <ProtectedPage sectionKey="chinesePublications">
      <div className="bg-white min-h-screen">
        <ChinesePublicationsSection />
      </div>
    </ProtectedPage>
  );
}