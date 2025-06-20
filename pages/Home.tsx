import MainLayout from "../layouts/MainLayout";
import Hero from "../features/landing/Hero";
import Features from "../features/landing/Features";
import EventsSection from "../features/landing/EventsSection";
import 'keen-slider/keen-slider.min.css';
import PartnersSection from "../features/landing/PartnersSection";
import OfferPrograms from "../features/landing/OfferPrograms";
import CallToAction from "../features/landing/CallToAction";
import StepsOverview from "../features/landing/StepsOverview";
import BlogHighlights from "../features/landing/BlogHighlights";
import ProgramsSection from "../features/landing/ProgramsSection";
import AboutUsSection from "../features/landing/AboutUsSection";
import ValuesSection from "../features/landing/ValuesSection";
import SuccessStoriesSection from "../features/landing/SuccessStoriesSection";
import WhySoulSection from "../features/landing/WhySoulSection";
import FAQsSection from "../features/landing/FAQsSection";
import GetInTouchSection from "../features/landing/GetInTouchSection";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features /> //done
      <EventsSection />
      <PartnersSection />
      <OfferPrograms />
      <CallToAction />
      <StepsOverview />
      <BlogHighlights />
      <ProgramsSection />
      <AboutUsSection />
      <ValuesSection />
      <SuccessStoriesSection />
      <WhySoulSection />
      <FAQsSection />
      <GetInTouchSection/>
      
    </MainLayout>
  );
};

export default Home;
