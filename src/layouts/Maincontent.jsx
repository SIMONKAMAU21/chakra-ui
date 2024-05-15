import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Sidebar from './Sidebar';
import { HStack, Box } from '@chakra-ui/react';

const Maincontent = () => {
   return (
      <>
        <Navbar />
        <HStack align="start" spacing={0}>
          <Sidebar />
          <Box flex="1" p={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Service />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </Box>
        </HStack>
      </>
   );
};

export default Maincontent;
