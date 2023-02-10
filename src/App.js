import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MostPopular from './Components/MostPopular/MostPopular';
export const App = () => {
  return ( 
    <>
     <Header/>
     <Container>
      <Hero/>
      <MostPopular/>
     </Container>
     {/* <Footer/> */}

      
    </>
  )
}

export default App;
