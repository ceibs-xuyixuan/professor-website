'use client';

import AcademicActivitiesSection from '@/components/AcademicActivitiesSection';
import BusinessActivitiesSection from '@/components/BusinessActivitiesSection';

export default function ActivitiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <AcademicActivitiesSection />
      <BusinessActivitiesSection />
    </div>
  );
}