
import Footer from './pages/footer/Footer';
import Hero from './Hero/Hero';

import React from 'react'
import AppRoutes from './AppRoutes'


const App = () => {
  return (
    <>
    <AppRoutes/>
   
      <Hero />
      <Footer />
    </>
    
   
  );
  
}

export default App