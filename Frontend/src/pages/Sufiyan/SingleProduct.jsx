import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Circle, Divider, Flex, HStack, Image, Spacer, Spinner, Stack, Text, useToast, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiPlus, BiMinus } from "react-icons/bi";
import Loading from './components/Loding';

import {CartDataToMatch} from "./data"



const SingleProduct = () => {

 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 const [isButLoading, setIsButLoading] = useState(false);

 const [data, setData] = useState({})

 const [DefaultImg, setImage] = useState()

 const [bagbutton, setbagbutton] = useState(true)

 //const {CartDataToMatch,cartData, handleCart} = useContext(AppContext)

 const handleCart = ()=>{
  
 }

 //console.log(CartDataToMatch)

 
 const toast = useToast()

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);


 const handleClick = () => {

    setIsButLoading(true);
   
    setTimeout(() => {
      
      toast({
        title: 'Added To Cart.',
      
        description: "shop more or go to cart.",
      
        duration: 3000,
        isClosable: true,
      })
    
      setIsButLoading(false);
      handleCart(data[0])
      setbagbutton(false)
      console.log(data[0])
    }, 1500);
   
    

  };

  
   // id is a string so we need to convert it to number
   const { id } = useParams()
  // console.log(typeof(id))

// console.log(cartData) 

 useEffect(()=>{

    let obj = CartDataToMatch.find((el)=>{
      console.log(el.id === Number(id))
        if(el.id === Number(id)){
            return true
        }
        return false
    })
    //console.log(data)
    console.log("I am running from singleProductPage");
 
    setData(obj)
    
     setImage(obj.firstImages[0])
    
}, [id])







 if(isLoading){

  return (  
     <Loading />
    ) 

 }  


 return (
    <Stack w="full"  margin="auto" alignSelf="center" justifyContent="center" direction={{base:"column", md:"row"}} spacing={{base:0, sm:30}} padding={5} justify="center" style={{ marginTop:"150px", marginBottom:"50px"}} >

       <Stack   
       flexDirection={{base:"column-reverse", md:"row"}} spacing={5} padding={5}> 
         
            <Stack direction={{base:"row", md:"column"}}   maxH="500px"  padding={3} >

             <ChevronDownIcon display={{base:"none", md:"block"}} boxSize="30px" color="gray.500"  cursor="pointer" />

                {data.firstImages.map((img)=> (

                    <Image borderRadius={5} alt={data.name}   maxW={"70"} minW="50px"
                    objectFit='cover' src={img} 
                    onClick={()=>setImage(img)}   cursor="pointer" />

                ) )}
              <ChevronUpIcon display={{base:"none", md:"block"}} boxSize="30px" color="gray.500" cursor="pointer" />  
            </Stack>

            <Stack>
            <Image borderRadius={15} src={DefaultImg} maxH="500px" minW="200px" />
            </Stack>
            
        </Stack>


        <VStack    w={{base:"full", md:"50%"}} h={{base:"full" }}  padding={{base:5,  md:8}} align="revert-layer" spacing={5} >

        <Text fontSize={{base:"15px", md:"20px"}} fontWeight="bold" color="gray.500"  >Bewakoof</Text>
        <Text   fontSize={{base:"xl", md:"2xl"}} color="gray.500" >{data.name}</Text>
        
      
        
        <Stack>

        <HStack alignContent="center">
        <Badge fontSize={{base:"sm", md:"xl"}} variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>
        <Text fontWeight="bold" fontSize={{base:"2xl", md:"3xl"}}  >₹{data.price}</Text>
       
        <Text as="s" marginLeft={4} fontSize="xl" >₹{data.strikePrice}</Text>
        </HStack>
         <Text  >inclusive of all taxes</Text>
        </Stack>
        
        <Divider />

        <Badge  fontSize={{base:"15px", md:"20px"}}  variant="subtle" colorScheme="teal"> ₹{data.price - 50} for tribe members only </Badge>
        
        <Text>TriBe members get an extra discount of ₹20 and FREE shipping.Learn more</Text>

        <Divider />

        <Text fontWeight="extrabold">SELECT SIZE</Text>
          
          <HStack spacing={5}>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} border="1px solid" color='black'>
            S
          </Center>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} border="1px solid" color='black'>
            M
          </Center>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} border="1px solid" color='black'>
            L
          </Center>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} bg='tomato' color='white'>
            XL
          </Center>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} border="1px solid" color='black'>
            2XL
          </Center>
          <Center w={{base:"40px", lg:"50px"}} h={{base:"40px", lg:"50px"}} fontSize={{base:"sm", lg:"xl"}} border="1px solid" color='black'>
            3XL
          </Center>
         
          </HStack>

          <Text>Garment:

Chest (in Inch):

44.0

Front Length (in Inch):

30.0

Sleeve Length (in Inch):

25.5</Text>
 
          <Divider />

        <HStack w="full" > 

        <Button  onClick={()=>handleClick()} fontSize="x-large" padding={8} w="full" colorScheme='yellow'> 

        <BiShoppingBag fontSize={{base:"25px",sm:"25px", md:"3xl"}}/> 
        
        {!isButLoading &&  bagbutton && "Buy Now" }
        {!isButLoading &&  !bagbutton && "ADDED" }
            {isButLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
      
        
        </Button>

        <Button fontSize={{base:"25px",sm:"25px", md:"3xl"}} padding={8} w="full" colorScheme='teal' variant='outline'>
            
              <AiOutlineHeart  /> WISHLIST
              
              
       </Button>


        </HStack>

        

       </VStack>
       
      
    </Stack>
            ) 
}

export default SingleProduct


