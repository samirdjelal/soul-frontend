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

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <EventsSection />
      <PartnersSection />
      <OfferPrograms />
      <CallToAction />
      <StepsOverview />
      <BlogHighlights />
      <ProgramsSection />
      <p>This is the Programs Section</p>
      <p>This is the Testimonials Section</p>
      <p>This is the Call to Action Section</p>
    </MainLayout>
  );
};

export default Home;
