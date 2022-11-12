import React from 'react'
import {Flex,Box,Image,Text, Button, Stack} from "@chakra-ui/react"
import cartblack from "../Assets/cartblack.png";
import "../Styles/Clothing.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom"

const items=[
    
  {
      id:1,
      src:"https://i.ibb.co/ZdHnbtK/61-Hagy8e-BL-SY741-SX-UX-SY-UY.jpg",
      title:"Womens Waterproof Raincoat",
      price:"789"
  },
  {
      id:2,
      src:"https://i.ibb.co/X7Vqn3t/61f4-Fo-D9-Fp-L-SY695-SX-UX-SY-UY.jpg",
      title:"ASIAN Women's Shoes",
      price:"499"
  },
  {
      id:3,
      src:"https://i.ibb.co/SwDZdQv/71kd-XCIx49-L-SY741-SX-UX-SY-UY.jpg",
      title:"dockstreet Sweatshirt Hoodie",
      price:"699"
  },
  {
      id:4,
      src:"https://i.ibb.co/G0D5Bw0/71-m-GCrbqm-S-SY695-SX-UX-SY-UY.jpg",
      title:"Lavie Women's Handbag",
      price:"899"
  },
  {
      id:5,
      src:"https://i.ibb.co/vzqBjW3/71s4i-4-Kx6-L-SY550-SX-UX-SY-UY.jpg",
      title:"TIMEX Analog Women's Watch",
      price:"2170"
  },
  {
      id:6,
      src:"https://i.ibb.co/Qrrkx8m/81-Og-N4zwd-L-UX695.jpg",
      title:"Sparx Womens Walking Shoes",
      price:"799"
  },

]

const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 4
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};

const MenSection = () => {
  return (
    <Stack className="menSec" direction={['column', 'row']} gap="3rem">
        <Box className="menBox">
            <Image className="menImage" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2020/10/11/b0050a33-18a0-436c-b3a6-e05d2b303ebd1602367973649-1.jpg" />
            <Box style={{fontSize:'1.6rem', fontWeight:"bold"}}>Women's Accessories</Box>
            <Link to="/women-clothing"><Button style={{backgroundColor:"#0D6DD7",color:"#F3F3f3"}}>Show All Products</Button></Link>
        </Box>

        <Box style={{width:"70%"}} className="carouselBox">
            <Carousel responsive={responsive}>
             {
                items.map((item)=>(
                    <Box key={item.id} className="sellerBox" >
                        <Box className="imageBox"><Image src={item.src} alt="sellers" width="170px" /></Box>
                        <Box>
                            <Text fontSize="15px" color="#333333">{item.title}</Text>
                            <Flex justifyContent="center" alignItems="center" gap="1rem">
                                <Text fontSize="15px" fontWeight="semibold" color="#0D6DD7">₹ {item.price}</Text>
                                <Button><Image src={cartblack} alt="cart" width="20px" /></Button>
                            </Flex>
                        </Box>
                    </Box>
                ))
             }
           </Carousel>
        </Box>
    </Stack>
  )
}

export default MenSection