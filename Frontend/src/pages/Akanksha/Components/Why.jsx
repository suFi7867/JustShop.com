import React from 'react';
import {Box} from "@chakra-ui/react";
import "../Styles/Why.css";

const Why = () => {
  return (
    <Box className="whyBox">
        <Box style={{fontSize:"2.2rem", fontWeight:"bold", color:"#F3F3F3"}}>Why buy from us?</Box>
        <Box style={{fontSize:"1.3rem", color:"#F3F3F3", marginTop:"10px"}}>Why waste time doing shopping for daily products? Instead spend quality time with your family and friends.
               <br></br> We assure good quality products at best price delivered on time.</Box>
    </Box>
  )
}

export default Why