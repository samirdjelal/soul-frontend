// src/pages/Home.tsx

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
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="events"><EventsSection /></section>
      <section id="partners"><PartnersSection /></section>
      <section id="offers"><OfferPrograms /></section>
      <section id="cta"><CallToAction /></section>
      <section id="steps"><StepsOverview /></section>
      <section id="blog-highlights"><BlogHighlights /></section>
      <section id="programs"><ProgramsSection /></section>
      <section id="about-us"><AboutUsSection /></section>
      <section id="values"><ValuesSection /></section>
      <section id="success-stories"><SuccessStoriesSection /></section>
      <section id="why-soul"><WhySoulSection /></section>
      <section id="faqs"><FAQsSection /></section>
      <section id="contact"><GetInTouchSection /></section>
    </MainLayout>
  );
};

export default Home;
