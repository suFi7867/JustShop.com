import React from 'react'
import {Box,Image} from "@chakra-ui/react"
import "../Styles/Advertisement.css";

const Adgif = () => {
  return (
    <Box className="advgif" display={{base:"none", md:"block", small:"block"}}>
        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/JBL-NM/03_ANC.gif" alt="advgif" width="80%"/>
    </Box>
  )
}

export default Adgif