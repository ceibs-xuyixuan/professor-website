'use client';

import AcademicActivitiesSection from '@/components/AcademicActivitiesSection';
import BusinessActivitiesSection from '@/components/BusinessActivitiesSection';
import { useSectionVisibility } from '@/contexts/SectionVisibilityContext';

export default function ActivitiesPage() {
  const { sectionVisibility } = useSectionVisibility();

  return (
    <div className="bg-white min-h-screen">
      {sectionVisibility.academicActivities && <AcademicActivitiesSection />}
      {sectionVisibility.businessActivities && <BusinessActivitiesSection />}
      
      {!sectionVisibility.academicActivities && !sectionVisibility.businessActivities && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">此页面暂时不可用</h1>
            <p className="text-gray-600">学术活动和商业活动部分均已隐藏</p>
          </div>
        </div>
      )}
    </div>
  );
}