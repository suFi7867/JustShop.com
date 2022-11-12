
import {  Flex,Box, Image, Stack, Text, VStack,Button, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { BsCursor } from 'react-icons/bs';
import {useNavigate} from "react-router-dom"
import {RiDeleteBin5Line} from "react-icons/ri"
 // import {AiFillStar} from "react-icons/ai"
const ProductCard=({id,name,quantity,defaultImage,price,strikePrice,rating,hoverImage,firstImages,secondImages,thirdImages})=>{
const [image,setImage]=useState(defaultImage)
const navigate=useNavigate();
const AdminIsAuth=false;
// navigating to singleProduct page
const navigateToSingleProductPage=(id)=>{
    navigate(`/products/${id}`)
}
let discount=Math.floor(((Number(strikePrice)-Number(price))/strikePrice)*100);

    return(
        
<Stack  border={"2.6px solid whitesmoke"}

 style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}} >

  <Box  bgColor={"#cf2e2e"} width={"48px"}>
     <Text color={"white"} textAlign={"center"} 
      align={"left"}>{discount}%</Text></Box>

      <Image 
      margin={"auto"}
       src={image} 
       onMouseEnter={() => setImage(hoverImage)}
      onMouseOut={() => setImage(defaultImage)}
       alt={name} />
      
      <VStack align="revert-layer" >
        <Text _hover={{color:"#0D6DD7"}} fontSize="17" color="#1D1D1D" >{name}</Text>
       
        <Flex paddingLeft={10} >
        
         <Text fontWeight="bold" my={{base:"5px",sm:"5px",md:"6px",lg:"7px"}}
          marginLeft={{sm:"49px",md:"27px",lg:"29px",xl:"36px"}} 
          fontSize={{base:"15px",md:"17px",lg:"19px"}} color="#0D6DD7"  >₹{price}</Text>
       
        <Text as="s" marginLeft={4} marginTop={1}
         paddingBottom={5} 
          fontSize={{base:"13px",md:"15px",lg:"17px"}}>₹{strikePrice}</Text>
     
        </Flex>
        <Center>
            { AdminIsAuth ?
             <Button  _hover={{bgColor:"#0966cf",cursor:"pointer"}} 
        onClick={()=>navigateToSingleProductPage(id)} 
        marginTop={"-15px"} marginBottom={"12px"} 
        alignItems={"center"} 
         colorScheme='teal' variant='solid' bgColor={"#0078FF"}
        width={{base:"72px",sm:"92px",md:"99px",lg:"105px"} 
      
    }
        >
     <RiDeleteBin5Line />
  </Button>  
   :  <Button  _hover={{bgColor:"#0966cf",cursor:"pointer"}} 
        onClick={()=>navigateToSingleProductPage(id)} 
        marginTop={"-15px"} marginBottom={"12px"} 
        alignItems={"center"} 
         colorScheme='teal' variant='solid' bgColor={"#0078FF"}
        width={{base:"85px",sm:"98px",md:"106px",lg:"120px"} 
      
    }
        >
    View
  </Button>
    }
  </Center>
       
       </VStack>
    </Stack>
    )
}
export default ProductCard