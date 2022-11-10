import React from 'react'


import Brands from './components/Brands';
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import ElectronicSection from './components/ElectronicSection';
import FlexItems from './components/FlexItems'
import Why from './components/Why';

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
