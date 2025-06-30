import React, { useRef, forwardRef } from 'react';
import MainLayout from '../layouts/MainLayout';
import IntroSection from '../features/MentorCycle/IntroSection';
import ExplorePrograms from '../features/MentorCycle/ExplorePrograms';
import FAQsSection from '../features/landing/FAQsSection';
import GetInTouchSection from '../features/landing/GetInTouchSection';
import ApplySection from '../features/MentorCycle/ApplySection';

const MentorCyclePage: React.FC = () => {
  const applyRef = useRef<HTMLElement | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <section id="intro">
        <IntroSection applyRef={applyRef} onScrollToSection={handleScrollToSection} />
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

export default MentorCyclePage;