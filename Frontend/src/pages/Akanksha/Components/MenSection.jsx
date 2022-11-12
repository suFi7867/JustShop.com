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
      src:"https://i.ibb.co/sFmzN2j/61-CF-f-F-1q-L-SX569-SX-UX-SY-UY.jpg",
      title:"Symbol Men Casual Shirt",
      price:"529"
  },
  {
      id:2,
      src:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      title:"Symbol Men's Regular",
      price:"679"
  },
  {
      id:3,
      src:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13193824/2020/12/30/f00ffdaa-17ab-4024-9c29-59a77605a0491609322989641-Allen-Solly-Men-Tshirts-4021609322987762-1.jpg",
      title:"Allen Solly Men Polo",
      price:"499"
  },
  {
      id:4,
      src:"https://i.ibb.co/m4xpWLJ/81-MNegd-J57-L-SX695-SX-UX-SY-UY-1.jpg",
      title:"Sparx Mens Sneakers",
      price:"799"
  },
  {
      id:5,
      src:"https://i.ibb.co/dccjDKZ/71-JAMx-Ckd-PL-UX569.jpg",
      title:"Diverse Men Jeans",
      price:"789"
  },
  {
      id:6,
      src:"https://i.ibb.co/cQ7W3NS/71-KLd-ADfuq-L-UX695.jpg",
      title:"Sparx Outdoor Sandals",
      price:"699"
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
            <Image className="menImage" src="https://static.magicpin.com/storage/blog/images/myntra-online-shopping-for-mens_Formal_Shirt.jpg" />
            <Box style={{fontSize:'1.6rem', fontWeight:"bold"}}>Men's Accessories</Box>
            <Link to="/men-clothing"><Button style={{backgroundColor:"#0D6DD7",color:"#F3F3f3"}}>Show All Products</Button></Link>
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