import React from 'react'
import {Box,Flex,Text, Stack} from "@chakra-ui/react";
import "../Styles/Reviews.css"

const reviews=[
    {
        id:1,
        comment:"Recommended to me by my local electronics. This product is a godsend",
        author:"Noah kethris, Sydney"
    },
    {
        id:2,
        comment:"Seriously, they are the most affordable in the market",
        author:"Sanah Thoreau, Ghana"
    },
    {
        id:3,
        comment:"Plug into perfectness.....",
        author:"Kalki Mehra, India"
    },
    {
        id:4,
        comment:"Since, taking this product, I have cut back considerably on light weighted clothes",
        author:"Mini Mathur, Ahmendabad"
    },
]

const Reviews = () => {
  return (
    <Stack gap={4} className="lastBox" direction={['column', 'row']}>
         {
            reviews.map((item)=>(
                <Stack key={item.id} className="reviewBox" width={{ base: '100%', sm: '50%', md: '25%' }}>
                    <hr style={{border:"1px solid #0D6DD7", width:"80%"}}></hr>
                    <Text fontSize={{ base: '10px', md: '13px', lg: '15px' }} >"{item.comment}"</Text>
                    <Text fontSize={{ base: '10px', md: '13px', lg: '15px' }} color="grey">{item.author}</Text>
                </Stack>
            ))
         }
    </Stack>
  )
}

export default Reviews