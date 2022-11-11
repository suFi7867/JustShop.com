import React from 'react'
import {Box,Flex,Text} from "@chakra-ui/react";
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
    <Flex gap={4} className="lastBox">
         {
            reviews.map((item)=>(
                <Box key={item.id} className="reviewBox">
                    <hr style={{border:"1px solid #0D6DD7", width:"80%"}}></hr>
                    <Text className="comment">"{item.comment}"</Text>
                    <Text className="author">{item.author}</Text>
                </Box>
            ))
         }
    </Flex>
  )
}

export default Reviews