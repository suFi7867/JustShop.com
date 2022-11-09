import React from 'react';
// import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.webp";
import ad from "../Assets/ad.gif"
import "../Styles/Banner.css";
import {Box } from "@chakra-ui/react";


const fadeImages = [
    {
    url: banner1,
    },
    {
    url: banner2,
    }
  ];

const Banner = () => {
  return (
    <Box className="box1" >
        <div className="banner">
            <img src={banner2} alt="banner" width="700px" />
        </div>

        <div className="ad">
            <img src={ad} alt="ad" width="365px" />
        </div>
    </Box>
  )
}

export default Banner