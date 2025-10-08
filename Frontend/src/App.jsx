
import Hero from './Hero/Hero';
import Footer from './pages/footer/Footer';


import AppRoutes from './AppRoutes'
import Home from './pages/home/Home';
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <>

    <AppRoutes />
    <Hero/>
    <Footer />

    
    <MainRoutes>
      <Home />
    </MainRoutes>
      
    </>
    
   
  );
  
}

export default App