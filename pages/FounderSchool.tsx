// src/pages/FounderSchool.tsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import IntroSection from '../features/FounderSchool/IntroSection';
import ApplySection from '../features/FounderSchool/ApplySection';
import ExplorePrograms from '../features/FounderSchool/ExplorePrograms';
import FAQsSection from '../features/landing/FAQsSection';
import GetInTouchSection from '../features/landing/GetInTouchSection';

const FounderSchoolPage: React.FC = () => {
  return (
    <MainLayout>
      <IntroSection />
      <ApplySection />
      <ExplorePrograms />
      <FAQsSection />
      <GetInTouchSection />
    </MainLayout>
  );
};

export default FounderSchoolPage;
