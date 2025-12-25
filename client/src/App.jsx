import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import { Navbar } from './components/common/navbar';
import { Footer } from './components/common/footer';
import ScrollToTop from './components/common/scroll-to-top';
import './App.css';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App; 