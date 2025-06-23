// src/pages/Acceleration.tsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import IntroSection from '../features/Acceleration/IntroSection';
import ApplySection from '../features/Acceleration/ApplySection';
import ExplorePrograms from '../features/Acceleration/ExplorePrograms';
import FAQsSection from '../features/landing/FAQsSection';
import GetInTouchSection from '../features/landing/GetInTouchSection';

const AccelerationPage: React.FC = () => {
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

export default AccelerationPage;
