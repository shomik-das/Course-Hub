import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
// import ScrollToTop from './components/common/ScrollToTop';
// import MyRoom from './pages/MyRoomPage';
import './App.css';

const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/my-room" element={<MyRoom />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App; 