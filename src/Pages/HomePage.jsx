import React from "react";
import { motion, useScroll } from "framer-motion";
import HeroSlider from "../Components/HeroSlider";
import OurPatner from "../Components/OurPatner";
import MeetPartners from "../Components/MeetPartners";
import CountStats from "../Components/CountStats";
import ServicesByLimit from "../Components/ServicesByLimit";
import UserFeedback from "../Components/UserFeedback";
import WhyTrustUs from "../Components/WhyTrustUs";
import RecentReview from "../Components/RecentReview";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NotFoundPage from "./NotFoundPage";

const HomePage = () => {
  const { scrollYProgress } = useScroll();

  return (
   <HelmetProvider>
    <Helmet>
      <title>Home | Revox </title>
    </Helmet>
     <div className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSlider />
      <ServicesByLimit />
      <RecentReview></RecentReview>
      <MeetPartners />
      <WhyTrustUs></WhyTrustUs>
      <OurPatner />
      <UserFeedback></UserFeedback>
      <CountStats />
    </div>
   </HelmetProvider>
  );
};

export default HomePage;
