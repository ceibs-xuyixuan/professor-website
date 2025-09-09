'use client';

import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProtectedPage from '@/components/ProtectedPage';

export default function CaseStudiesPage() {
  return (
    <ProtectedPage sectionKey="caseStudies">
      <div className="bg-white min-h-screen">
        <CaseStudiesSection />
      </div>
    </ProtectedPage>
  );
}