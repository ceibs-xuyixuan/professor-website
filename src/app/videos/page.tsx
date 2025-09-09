'use client';

import VideoChannelSection from '@/components/VideoChannelSection';
import ProtectedPage from '@/components/ProtectedPage';

export default function VideosPage() {
  return (
    <ProtectedPage sectionKey="videos">
      <div className="bg-white min-h-screen">
        <VideoChannelSection />
      </div>
    </ProtectedPage>
  );
}