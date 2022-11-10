import React from 'react'

import Banner from "./Components/Banner"
import Brands from './Components/Brands';
import MenSection from './Components/MenSection';
import WomenSection from './Components/WomenSection';
import ElectronicSection from './Components/ElectronicSection';
import FlexItems from './Components/FlexItems'
import Why from './Components/Why';

import Banner from "./components/Banner"

const LandingPage = () => {
  return (
    <div>
        <Banner/>
        <FlexItems/>
        <Why/>
        <Brands/>
        <MenSection/>
        <WomenSection/>
        <ElectronicSection/>
    </div>
  )
}

export default LandingPage
