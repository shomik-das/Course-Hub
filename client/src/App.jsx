import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
// import Courses from './pages/CoursesPage';
// import Course from './pages/CoursePage';
import { Navbar } from './components/common/navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} /> */}
      </Routes>
    </>
  );
};

export default App; 