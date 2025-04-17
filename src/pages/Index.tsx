import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import CategoryChips from '@/components/video/CategoryChips';
import VideoGrid from '@/components/video/VideoGrid';

const Index: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-yutub-background">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main 
        className={`
          pt-4 pb-10 px-4 transition-all duration-300
          ${isSidebarOpen ? 'ml-64' : 'ml-[72px]'}
        `}
      >
        <div className="max-w-[2000px] mx-auto">
          <CategoryChips />
          <VideoGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;