'use client';

import JournalPositionsSection from '@/components/JournalPositionsSection';
import ProtectedPage from '@/components/ProtectedPage';
import { journalPositions } from '@/data/bilingualProfileData';

export default function JournalPositionsPage() {
  return (
    <ProtectedPage sectionKey="journalPositions">
      <div className="min-h-screen bg-gray-50">
        <JournalPositionsSection journalPositions={journalPositions} />
      </div>
    </ProtectedPage>
  );
}