import MainLayout from "../layouts/MainLayout";
import Hero from "../features/landing/Hero";
import Features from "../features/landing/Features";
import EventsSection from "../features/landing/EventsSection";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <EventsSection />
      <p>This is the Programs Section</p>
      <p>This is the Testimonials Section</p>
      <p>This is the Call to Action Section</p>
    </MainLayout>
  );
};

export default Home;
