// src/pages/MentorCycle.tsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import IntroSection from '../features/MentorCycle/IntroSection';
import ApplySection from '../features/MentorCycle/ApplySection';
import ExplorePrograms from '../features/MentorCycle/ExplorePrograms';
import FAQsSection from '../features/landing/FAQsSection';
import GetInTouchSection from '../features/landing/GetInTouchSection';

const MentorCyclePage: React.FC = () => {
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

export default MentorCyclePage;
