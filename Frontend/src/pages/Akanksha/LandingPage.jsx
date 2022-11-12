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
import {Divider, Box, Center, Spacer} from "@chakra-ui/react"


const LandingPage = () => {
  return (
    <Box>
        <Adgif/>
        <Banner/>
        <FlexItems/>

        <Center><Divider orientation='horizontal' width="80%" marginTop="2rem" /></Center>

        <Why/>
        <Brands/>

        <Center><Divider  orientation='horizontal' width="80%" marginTop="2rem" /></Center>

        <MenSection/>
        <Gifts/>
        <WomenSection/>
        <Advertisement/>
        <ElectronicSection/>
        <Reviews/>
    </Box>
  )
}

export default LandingPage
