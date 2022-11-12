import React from 'react'
import {Box,Text,Button,Stack} from "@chakra-ui/react"
import "../Styles/Gifts.css";

const Gifts = () => {
  return (
    <Stack direction={['column', 'row']} display={{base:"none",md:"flex"}} className="giftBox" align="center" justify="center" gap={2} >
        <Box className="gift1" width={{base:"50%", md:"50%", sm:"25%"}} >
               <Text className="text1">HOLIDAY GIFT GUIDE</Text>
               <Text className="text2">GET READY FOR GIFT SEASON</Text>
               <Text className="text3">Our Holiday Gift Guide is open.</Text>
               <Button>SHOP NOW</Button>
        </Box>
        <Box className="gift2" width={{base:"50%", md:"35%", sm:"25%"}}></Box>
    </Stack>
  )
}

export default Gifts