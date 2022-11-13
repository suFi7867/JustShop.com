import { HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TeamUser from './components/TeamUser'

const data = [ 

  
{
  name : "Sufiyan Shaikh" ,
  type : "Problem Solver",
  url :"https://i.ibb.co/9tT8KtB/sufi-black.png",
  github : "https://github.com/suFi7867",
  linkedin : "https://www.linkedin.com/in/sufiyan-shaikh-9bb808183/" ,
  portfolio : "https://sufi7867.github.io/"
},
{
  name : "Shubham Gaikwad" ,
  type : "Backend Expert",
  url :"https://i.ibb.co/dMdtctd/DSC-7623.jpg",
  github : "https://github.com/gShubham7",
  linkedin : "https://www.linkedin.com/in/shubhamgaikwad7/" ,
  portfolio : "https://gshubham7.github.io/"
},

{
  name : "Akanksha Malviya" ,
  type : "UI expert",
  url :"https://i.ibb.co/jHRByMP/My-project-1.jpg",
  github : "https://github.com/Utopian-Akanksha",
  linkedin : "https://www.linkedin.com/in/akanksha-malviya/" ,
  portfolio : "https://utopian-akanksha.github.io/"
},

{
  name : "Ankit Singh" ,
  type : "Full Stack",
  url :"https://i.ibb.co/jDnX9fz/1657341895619.jpg",
  github : "https://github.com/Ankitsingh9584",
  linkedin : "https://www.linkedin.com/in/ankit-singh-rajawat-08579521a/" ,
  portfolio : "https://ankitsingh9584.github.io/"
},


]



const Team = () => {
  return (
    <VStack  p={50} >
      
      <Text fontWeight={"semibold"} fontSize={{base:"18px", md:"2xl"}} >Our Creative Team</Text>
     
     <Stack direction={{base:"column", md:"row"}} spacing={5}  >
     
     {
      data.map((el)=>(
        <TeamUser data={el}/>
      ))
     }

     </Stack>
    </VStack>
  )
}

export default Team


