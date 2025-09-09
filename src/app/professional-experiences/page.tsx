'use client';

import ProfessionalExperiencesSection from '@/components/ProfessionalExperiencesSection';
import ProtectedPage from '@/components/ProtectedPage';
import { professionalExperiences } from '@/data/bilingualProfileData';

export default function ProfessionalExperiencesPage() {
  return (
    <ProtectedPage sectionKey="professionalExperiences">
      <div className="min-h-screen bg-white">
        <ProfessionalExperiencesSection professionalExperiences={professionalExperiences} />
      </div>
    </ProtectedPage>
  );
}