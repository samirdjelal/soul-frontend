// src/pages/Incubation.tsx

import MainLayout from "../layouts/MainLayout";
import IntroSection from "../features/Incubation/IntroSection"; // Make sure this exists
import ApplySection from "../features/Incubation/ApplySection";
import ExplorePrograms from "../features/Incubation/ExplorePrograms";
import FAQsSection from "../features/landing/FAQsSection";
import GetInTouchSection from "../features/landing/GetInTouchSection";

const IncubationPage = () => {
  return (
    <MainLayout>
      <IntroSection />
      <ApplySection />
      <ExplorePrograms />
      <FAQsSection />
      <GetInTouchSection/>

    </MainLayout>
  );
};

export default IncubationPage;
