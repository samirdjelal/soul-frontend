import MainLayout from "../layouts/MainLayout";
import Hero from "../features/landing/Hero";
import Features from "../features/landing/Features";
import EventsSection from "../features/landing/EventsSection";
import 'keen-slider/keen-slider.min.css';
import PartnersSection from "../features/landing/PartnersSection";
import OfferPrograms from "../features/landing/OfferPrograms";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <EventsSection />
      <PartnersSection />
      <OfferPrograms />
      <p>This is the Programs Section</p>
      <p>This is the Testimonials Section</p>
      <p>This is the Call to Action Section</p>
    </MainLayout>
  );
};

export default Home;
