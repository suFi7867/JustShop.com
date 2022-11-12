import React, { useEffect, useState } from 'react'
import {Box,Flex,Image} from "@chakra-ui/react";
import "../Styles/Brand.css";

const brands=[
    "https://img.shop.com/Image/homepage/nike_140x110-img.gif",
    "https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif",
    "https://img.shop.com/Image/homepage/coach_brand7.jpg",
    "https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg",
    "https://img.shop.com/Image/homepage/cuisinart.gif",
    "http://lh3.googleusercontent.com/Lw2AR-v1vwv25yJTUGp8xGkMFgchCeLTfB_hncYEf5Jt8Lt2-CqtJJYSF4kC9LUb3Zb7gf7ohEQoB_QkVCuk--lpAV4d"
]

const Brands = () => {

    const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Box className="brandBox" display={{base:"none", md:'flex'}}>
        <Flex gap="2.3rem" direction="column">
            <Box style={{fontSize:"1.5rem",fontWeight:"bold", color:"#14244B", marginTop:"10px"}}>Sale Ends In</Box>
            <Box className="timerBox">{date.toLocaleTimeString()}</Box>
        </Flex>

        <Flex gap="3.5rem" direction="column"> 
           <Box style={{fontSize:"1.5rem",fontWeight:"bold", color:"#14244B", marginTop:"10px"}}>Out Top Brands</Box>
           <Flex gap="1rem">
            {
                brands.map((item)=>(
                   <Box className="brandImg">
                      <Image src={item} width="100px"/>
                   </Box>
                ))
            }
           </Flex>
        </Flex>
    </Box>
  )
}

export default Brands