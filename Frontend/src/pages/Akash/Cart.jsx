import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";

const Cart = () => { 
  const dispatch = useDispatch();

  
 const navigate = useNavigate();

 const BackToPRoductPage = () => {
  navigate("/men-clothing")
 
};


  const { token, isAuth } = useSelector((store) => store.auth);
  const { data } = useSelector((store) => store.cart);


   
 if(data.length===0){

  return (  



          <Stack alignItems="center" p={15} direction={{base:"column", md:"row"}}   justify="center">

          <Image src='https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!c1024wm0' />
       
         <VStack spacing={30} >
         <Text fontSize="3xl" >Nothing In The Bag </Text>

         <Divider />
<Button  onClick={()=>BackToPRoductPage()} fontSize="x-large" padding={8}  colorScheme='messenger'> 
Continue Shopping
</Button>



         </VStack>
          </Stack>

    
    
    ) 

 }  



  return (
  
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
     
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" >
            Total Product in {data.length}
          </Heading>

          <Stack spacing="6">
            {data?.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
        <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
      </Stack>
    </Box>
  );
};

export default Cart;
