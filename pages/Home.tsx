import MainLayout from "../layouts/MainLayout";
import Hero from "../features/landing/Hero";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <p>This is the Features Section</p>
      <p>This is the Programs Section</p>
      <p>This is the Testimonials Section</p>
      <p>This is the Call to Action Section</p>
    </MainLayout>
  );
};

export default Home;
