import { Button, Divider, FormControl, FormHelperText, FormLabel, HStack, Image, Input, PinInput, PinInputField, Stack, Text, useToast, VStack, Wrap } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../../Context/AppContext'

const PaymentForm = () => {


    // const {cartDataEmpty, price} = useContext(AppContext)
    const price=1100

    const navigate = useNavigate()
    const toast = useToast()
    
    const PaymentDone = ()=>{

        prompt()
        toast({
          title: 'Payment Successfull.',
        
          description: "Redirecting To Home Page.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/OrderSuccessfull")
        // cartDataEmpty()

    }

    

  return (
    
    <>
    
    <VStack padding={5} spacing={10}  w={{base:"full", md:"1200px"}} margin="auto"  style={{marginTop:"70px"}} marginBottom="50px">

        <Text fontWeight="bold" fontSize="2rem"  >Choose your Payment method</Text>

        <Stack direction={{base:"column", md:"row"}} spacing={5}  >

           <VStack   align="flex-start" padding={5}  bg="#F3F3F3"
           >

            <HStack  >
                <Image w={25} src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
                <Text>Debit/Credit Card</Text>
            </HStack>
            
            <Divider/>

            
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/Group-1645705428.png" />
                <Text>WALLET</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
                <Text>UPI</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
                <Text>NET BANKING</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                <Text>CASH ON DELIVERY</Text>
            </HStack>
            
            <Divider/>


            </VStack>
 




            <VStack align="flex-start" spacing={5} padding={5}  >
             
           
             <VStack>
             <HStack>
             <FormControl  >
               <FormLabel fontSize="1.1rem" >First Name</FormLabel>
               <Input size="md" />
             
             </FormControl>
             <FormControl  >
               <FormLabel fontSize="1.1rem">Last Name</FormLabel>
               <Input size="md" />
               
             </FormControl>
             </HStack>

             <FormControl  >
               <FormLabel fontSize="1.1rem">Address</FormLabel>
               <Input size="md" />
              
             </FormControl>

             <HStack>
             <FormControl  >
               <FormLabel fontSize="1.1rem">City</FormLabel>
               <Input size="md" />
             
             </FormControl>
             <FormControl  >
               <FormLabel fontSize="1.1rem">State</FormLabel>
               <Input type="city" size="md" />
               
             </FormControl>
             </HStack>
             </VStack>

              
             <Divider/>
               
            <VStack>

                <HStack width="full" >
                 <FormControl  >
                   <FormLabel fontSize="1.1rem">Card Number</FormLabel>
                   <Input  size="md" />
                 
                 </FormControl>

                 <FormControl >
                   <FormLabel fontSize="1.1rem">CVV</FormLabel>
                   <HStack width="full" >

                 <PinInput size="md">
                   <PinInputField />
                   <PinInputField />
                   <PinInputField />
                 </PinInput>
               </HStack>
                   
                 </FormControl>

                 
                 </HStack>

                 <HStack>
             <FormControl  >
               <FormLabel fontSize="1.1rem">Exp MOnth</FormLabel>
               <Input size="md" />
             
             </FormControl>
             <FormControl  >
               <FormLabel fontSize="1.1rem">Exp Year</FormLabel>
               <Input size="md" />
               
             </FormControl>
             </HStack>

             <Button style={{marginTop:"20px"}} height="40px"  onClick={PaymentDone} fontSize="16px" padding={3} w="full" colorScheme='blue'> Total:   ₹ {price} </Button>


               
            </VStack>



                          
            


             
             
             </VStack>
             
    
        
        </Stack>


    </VStack>
    
    </>
    
  )
}

export default PaymentForm
