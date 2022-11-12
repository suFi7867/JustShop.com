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
      src:"https://i.ibb.co/mzpSm3P/grey-600x.webp",
      title:"boAt Airdopes 141",
      price:"1490"
  },
  {
      id:2,
      src:"https://i.ibb.co/ScfLJ9q/8654ab35-d654-4a82-a9ff-ddcbebbaf31d-600x.webp",
      title:"boAt Rockerz 255 Pro",
      price:"1290"
  },
  {
      id:3,
      src:"https://i.ibb.co/RpKhHmD/blue-58bd5e28-de95-4f31-909d-6bce484bdbd9-600x.webp",
      title:"boAt Watch",
      price:"2170"
  },
  {
      id:4,
      src:"https://i.ibb.co/ZJy0JQX/1-5-600x.webp",
      title:"Rockerz 450 DC edition",
      price:"1490"
  },
  {
      id:5,
      src:"https://i.ibb.co/HTKM2BF/rockerz-518-blue-600x.webp",
      title:"boAt Rockerz 355 Pro",
      price:"1590"
  },
  {
      id:6,
      src:"https://i.ibb.co/F483H5w/3-30fc6c73-8b14-432f-8419-322dc2e8a42c-480x.webp",
      title:"boAt Earphone 250",
      price:"459"
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
            <Image className="menImage" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1642405569" />
            <Box style={{fontSize:'1.6rem', fontWeight:"bold"}}>Electronics</Box>
            <Link to="/electronics"><Button style={{backgroundColor:"#0D6DD7",color:"#F3F3f3"}} >Show All Products</Button></Link>
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