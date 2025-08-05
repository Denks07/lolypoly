import React from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductCategory from './components/ProductCategory/ProductCategory';
import BestProducts from './components/BestProducts/BestProducts';
import TopProducts from './components/TopProducts/TopProducts';
import About from './components/About/About';
import Insights from './components/Insights/Insights';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <ProductCategory />
      <BestProducts />
      <TopProducts />
      <About />
      <Insights />
      <Features />
      <Footer />
      {/* <SignIn />  Uncomment untuk testing form sign in */}
    </>
  );
}

export default App;
