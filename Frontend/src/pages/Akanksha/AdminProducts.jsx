import React, {useState} from 'react'
import {Spacer, Text, RadioGroup, HStack,VStack, Image, Textarea,Box, Radio, Flex, Button} from "@chakra-ui/react"

const AdminProducts = () => {

  const [resize, setResize] = React.useState('horizontal')

  return (
    <Flex gap="10rem" justifyContent="center" alignItems="center">
         
         <Flex direction="column" justifyContent="center" alignItems="center">
           
            <Box><Image src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif" /></Box>
         </Flex>


         <Flex direction="column" justifyContent="center" alignItems="flex-start" gap="1.2rem">
             <Flex direction="column" justifyContent="center" alignItems="flex-start" gap="1.2rem">
                <Text fontSize="1.5rem" fontWeight="bold" color="#0D6DD7">Choose Category</Text>
             </Flex>


             <HStack alignItems="flex-start" spacing="1rem">
              <Textarea placeholder='Here is a sample placeholder' height="360px" width="350px" resize={resize} />
             
              <RadioGroup defaultValue={resize} onChange={setResize}>
              <VStack spacing='24px' align="left">
                <Radio value='Sasuke'>Men</Radio>
                <Radio value='Nagato'>Women</Radio>
                <Radio value='Itachi'>Electronics</Radio>
              </VStack>

              <Spacer/>

               <Button height="50px" width="200px" fontSize="1.3rem" color="white" bg="#0D6DD7" marginTop="1rem">ADD PRODUCTS</Button>
              </RadioGroup>

              </HStack>
         </Flex>
    </Flex>
  )
}

export default AdminProducts


