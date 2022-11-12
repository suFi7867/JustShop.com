import React from 'react';
import {Box,Text} from "@chakra-ui/react"
import "../Styles/Advertisement.css"

const Advertisement = () => {
  return (
    <Box className="advBox" display={{base:"none", md:"block"}}>
        {/* <Text className="caption">Fine engineering only for your ears</Text> */}
        <Text className="slogan1">Hear it. Feel it.</Text>
        {/* <Text className="slogan2">Unravelling, The Sound of Silence</Text> */}
    </Box>
  )
}

export default Advertisement