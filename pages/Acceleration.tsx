import React, { useRef } from 'react';
import MainLayout from '../layouts/MainLayout';
import IntroSection from '../features/Acceleration/IntroSection';
import ApplySection from '../features/Acceleration/ApplySection';
import ExplorePrograms from '../features/Acceleration/ExplorePrograms';
import FAQsSection from '../features/landing/FAQsSection';
import GetInTouchSection from '../features/landing/GetInTouchSection';

const AccelerationPage: React.FC = () => {
  const applyRef = useRef<HTMLElement | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <section id="intro">
        <IntroSection
          applyRef={applyRef}
          onScrollToSection={handleScrollToSection}
        />
      </section>
      <section id="apply">
        <ApplySection ref={applyRef as React.RefObject<HTMLElement>} />
      </section>
      <section id="explore">
        <ExplorePrograms />
      </section>
      <section id="faqs">
        <FAQsSection />
      </section>
      <section id="contact">
        <GetInTouchSection />
      </section>
    </MainLayout>
  );
};

export default AccelerationPage;