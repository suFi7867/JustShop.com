
import {  Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
const ProductCard=({id,name,quantity,defaultImage,price,strikePrice,hoverImage,firstImages,secondImages,thirdImages})=>{
const [image,setImage]=useState(defaultImage)
const navigate=useNavigate();

// navigating to singleProduct page
const navigateToSingleProductPage=(id)=>{
    navigate(`/products/:${id}`)
}


    return(
<Stack onClick={()=>navigateToSingleProductPage(id)} border={"2.2px solid whitesmoke"} style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
      
      <Image 
      
       src={image} 
       onMouseEnter={() => setImage(hoverImage)}
      onMouseOut={() => setImage(defaultImage)}
   
       alt={name} />
      
      <VStack align="revert-layer" >
      
        <Text _hover={{color:"#0D6DD7"}} fontSize="17" color="#1D1D1D" >{name}</Text>
        <Flex paddingLeft={10} >
        
        <Text fontWeight="bold"  fontSize={{base:"l",md:"xl",lg:"2xl"}} >Price:-</Text> 
         <Text fontWeight="bold"  fontSize={{base:"l",md:"xl",lg:"2xl"}} color="#0D6DD7"  >₹{price}</Text>
       
        <Text as="s" marginLeft={4} marginTop={1}   fontSize={{base:"13px",md:"15px",lg:"1.1rem"}}>₹{strikePrice}</Text>
        </Flex>

       </VStack>
      
     
    </Stack>
    )
}
export default ProductCard