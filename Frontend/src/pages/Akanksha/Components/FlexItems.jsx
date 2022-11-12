import React from 'react'
import {Box,Flex, Stack ,Image} from "@chakra-ui/react";
import '../Styles/FlexItems.css';


const items=[
    {
        id:1,
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/pink_93d7a9ed-186f-4081-a184-bad918274e7b_300x.png?v=1658994528",
        title:"Upto 57% Off",
        head:"Trebel Airpods 131"
    },
    {
        id:2,
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_300x.png?v=1625045744",
        title:"Upto 67% Off",
        head:"Rockerz 450"
    }
]


const FlexItems = () => {
  return (
    <Stack className="flexItemsBox"  direction={['column', 'row']} >
        {
            items.map((item)=>(
                    <Flex key={item.id} className="itemBox" >
                        <Box className="text" >
                            <Box>{item.title}</Box>
                            <Box style={{color:"#14244B", fontWeight:'bold'}}>{item.head}</Box>
                        </Box>
                        <Box>
                            <Image src={item.url} width="136px" />
                        </Box>
                    </Flex>
            ))
        }

 
                  <Flex className="itemBox" display={{base:"none", md:"flex"}} >
                        <Box className="text" >
                            <Box>Upto 50% Off</Box>
                            <Box style={{color:"#14244B", fontWeight:'bold'}}>Wave Connect</Box>
                        </Box>
                        <Box>
                            <Image src={"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_300x.png?v=1654312291"} width="136px" />
                        </Box>
                    </Flex>

                    <Flex key={4} className="itemBox" display={{base:"none", md:"flex"}} >
                        <Box className="text" >
                            <Box>Upto 57% Off</Box>
                            <Box style={{color:"#14244B", fontWeight:'bold'}}>Stone 352</Box>
                        </Box>
                        <Box>
                            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c1144ee5-d03e-483a-8e5f-7552b138a4b1_300x.png?v=1649857754" width="136px" />
                        </Box>
                    </Flex>

        
    </Stack>
  )
}

export default FlexItems