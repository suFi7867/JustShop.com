import React from 'react';
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import banner2 from "../Assets/banner2.webp";
import ad from "../Assets/ad.gif"
import "../Styles/Banner.css";
import {Box } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box className="box1">
        <Box className="banner" display={{base:"none", md:"block", sm:"block"}}>
            <img src={banner2} alt="banner" />
        </Box>

        <Box className="ad">
            <img src={ad} alt="ad" />
        </Box>
    </Box>
  )
}

export default Banner