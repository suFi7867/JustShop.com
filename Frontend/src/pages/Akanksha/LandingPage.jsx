import React from 'react'
import Banner from "./components/Banner"
import Brands from './components/Brands';
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import ElectronicSection from './components/ElectronicSection';
import FlexItems from './components/FlexItems'
import Why from './components/Why';
import Gifts from './components/Gifts';
import Advertisement from './components/Advertisement';
import Reviews from './components/Reviews';
import Adgif from './components/Adgif';


const LandingPage = () => {
  return (
    <div>
        <Adgif/>
        <Banner/>
        <FlexItems/>
        <Why/>
        <Brands/>
        <MenSection/>
        <Gifts/>
        <WomenSection/>
        <Advertisement/>
        <ElectronicSection/>
        <Reviews/>
    </div>
  )
}

export default LandingPage
