import React from 'react'
import {Box,Text,Button,Flex} from "@chakra-ui/react"
import "../Styles/Gifts.css";

const Gifts = () => {
  return (
    <Flex className="giftBox" gap={1}>
        <Box className="gift1">
               <Text className="text1">HOLIDAY GIFT GUIDE</Text>
               <Text className="text2">GET READY FOR GIFT SEASON</Text>
               <Text className="text3">Our Holiday Gift Guide is open.</Text>
               <Button>SHOP NOW</Button>
        </Box>
        <Box className="gift2"></Box>
    </Flex>
  )
}

export default Gifts