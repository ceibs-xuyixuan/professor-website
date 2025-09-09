'use client';

import BooksSection from '@/components/BooksSection';
import ProtectedPage from '@/components/ProtectedPage';

export default function BooksPage() {
  return (
    <ProtectedPage sectionKey="books">
      <div className="bg-white min-h-screen">
        <BooksSection />
      </div>
    </ProtectedPage>
  );
}