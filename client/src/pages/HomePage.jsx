import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {HeroSection} from '../components/hero-section.jsx';
import { CategoriesSection } from '@/components/categories-section.jsx';
import { FeaturedSection } from '@/components/featured-section.jsx';
import { StatsSection } from '@/components/stats-section.jsx';
import { PromotionalBanner } from '@/components/promotional-banner.jsx';
import { InformationalBlock } from '@/components/informational-block.jsx';
import { StudentFeedback } from '@/components/student-feedback.jsx';
import { AcademyCta } from '@/components/academy-cta.jsx';
import { LatestArticles } from '@/components/articles.jsx';
// import Navbar from '../components/common/Navbar';
// import Footer from '../components/common/Footer';


const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <CategoriesSection />
    <FeaturedSection />
    <PromotionalBanner />
    <StatsSection />
    <InformationalBlock />
    <StudentFeedback />
    <AcademyCta />
    <LatestArticles />
    </>
  );
};

export default Home; 