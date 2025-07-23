import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AttractionsSlider from '../Components/AttractionsSlider'
import Temples_Home from '../Components/Badrinath_Home'
import Kedarnath_Home from '../Components/Kedarnath_Home'
import Dwarka from '../Components/Dwarka'
import VashnoDevi from '../Components/VashnoDevi'
import Footer from '../Components/Footer'
import WelcomeSection from '../Components/WelcomSection'
import ThreeDCar from '../Components/ThreeDCar'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <WelcomeSection></WelcomeSection>
    <AttractionsSlider></AttractionsSlider>
    <Temples_Home></Temples_Home>
    <Kedarnath_Home></Kedarnath_Home>
    <Dwarka></Dwarka>
    <VashnoDevi></VashnoDevi>
    {/* <ThreeDCar></ThreeDCar> */}
    <Footer></Footer>


    </>
  )
}

export default Home