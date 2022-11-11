import {  Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Image, Spacer, Stack, Text, useColorMode, useDisclosure, VStack } from '@chakra-uireact'
import React, { useContext, useState } from 'react'
import { MdDynamicFeed, MdEco, MdEditNotifications, MdFeed, MdOutlineDarkMode } from 'react-iconsmd';
import { BsLightbulb } from 'react-iconsbs';
import { AiOutlineMenu } from 'react-iconsai';
AiOutlineMenu
import { BiSearch } from 'react-iconsbi';
import {  Link, NavLink } from 'react-router-dom';

import { ImAndroid } from 'react-iconsim';
import SearchBar from '.componentsSearchBar';
import SearchBar2 from '.componentsSearchBar2';
import { VscHeart } from react-iconsvsc;
import { IoBagOutline } from react-iconsio5;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ACTION_GET_PRODUCTS } from '....reduxproductsproduct.actions';


const Links = [
   
    {
        nameMen,
        pathmen-clothing
    },
    {
        nameWomen,
        pathwomen-clothing
    },
   
    {
        nameElectronics,
        pathelectronics
    }, 
    
    {
      nameAbout Us,
      pathabout
  }, 
  

]

const Navbar = () = {

  const dispatch = useDispatch()

  const  {  data , loading , error } = useSelector((store)= store.product)

  useEffect(()={
    dispatch( ACTION_GET_PRODUCTS() )
  },[])


  console.log(data)

  const isAuth = false

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ OpenSearch ,  SetOpenSearch] = useState(none)

    const LogOutUser = ()={

    }



 borderBottom=1px solid #eeee

  return (
    Box   style={{positionsticky, top0, zIndex999 }} 
    HStack 
   
      bg=#14244b
         style={{positionsticky, top0 }} 
         p=0px 8% justify=center  
         w=100% h=64px 
         
 
       HStack  w=full maxW=1400px 
       p={{ base 'none', md '0.6rem' }} spacing={8}
         
          HStack  
            Link to=
            Image
             w={{ base '150px', md '200px' }}
            minW=150px
            dropShadow=2xl
            style={{ position relative, left 0px,  
            zIndex 1}}
            top={{ base '10px', md '28px' }}
            src= { colorMode === light  httpsi.ibb.coFqg6dHZPROJECT-LOGO-5.png httpsi.ibb.co2t1KBmhProject-Logo.png  } 
             
             Link
          HStack

     

      

           HStack  w={{basefull, mdfit-content}} 
           p={2}   justifyContent=space-around   
 
             Box  display={{basenone, mdblock}} 
            
              SearchBar
            
             Box
             HStack
             Spacer 

           {
            !isAuth  
            Box display={{ base 'none', md 'none', lg 'block' }} 
              HStack
              NavLink to=login 
              Button fontWeight=lighter colorScheme=messenger variant='solid'
                   Sign in
                 Button
             NavLink 
   
             NavLink to=register 
              Button fontWeight=lighter colorScheme=messenger variant='solid'
                Register
              Button
              NavLink 

              IconButton
             fontSize='25px'
             borderRadius={50}
             variant='link'
             onClick={toggleColorMode}
             icon={  VscHeart  } 

           NavLink to=cart IconButton
             fontSize='25px'
             borderRadius={50}
             variant='link'
             onClick={toggleColorMode}
             icon={  IoBagOutline  } NavLink
              IconButton
              fontSize='25px'
        borderRadius={50}
        variant='link'
        onClick={toggleColorMode}
        icon={ colorMode === light  MdOutlineDarkMode   BsLightbulb  } 

              HStack
       
             Box 
        Box  display={{ base 'none', md 'none', lg 'block' }} 

            HStack spacing={25} 
            HStack  Text color=whiteAlpha.900 fontSize=xlImAndroid  Text 
            Text fontWeight=semibold color=whiteAlpha.900{userName}TextHStack

             Button onClick={LogOutUser} fontWeight=lighter colorScheme=messenger variant='solid'
                   LogOut
              Button

              IconButton
             fontSize='25px'
             borderRadius={50}
             variant='link'
             onClick={toggleColorMode}
             icon={  VscHeart  } 

           NavLink to=cart IconButton
             fontSize='25px'
             borderRadius={50}
             variant='link'
             onClick={toggleColorMode}
             icon={  IoBagOutline  } NavLink

             
             
             IconButton
             fontSize='25px'
             borderRadius={50}
             variant='link'
             onClick={toggleColorMode}
             icon={ colorMode === light  MdOutlineDarkMode   BsLightbulb  } 
            HStack
                   
                   Box
           }


          HStack
           display={{ base '-webkit-inline-flex', md 'none', lg 'none' }}  
        
          IconButton
          variant=solid
          
          colorScheme=messenger
          fontSize=x-large
            onClick={()=SetOpenSearch( OpenSearch==none  block  none )}
            icon={BiSearch } 

            IconButton


            IconButton
            onClick={()=onOpen()}
            icon={AiOutlineMenu } 

            IconButton





          HStack



       HStack

       
        Drawer  placement='right'
         onClose={onClose} isOpen={isOpen} size=full
        
           DrawerOverlay 

           DrawerContent
          DrawerCloseButton 
          DrawerHeader 

          HStack alignItems=center h=20px
          Image   borderTop=4px solid gray w=150px position=absolute bottom=20px src=httpsi.ibb.co2t1KBmhProject-Logo.png
        
        
         IconButton
         fontSize='25px'
         position=absolute
         right=12
         borderRadius={50}
         onClick={toggleColorMode}
         icon={ colorMode === light  MdOutlineDarkMode   BsLightbulb  } 

          HStack

             
             DrawerHeader
          DrawerBody  
          {isAuth && 
              
              VStack 
              Image borderRadius={12} marginTop=10px  w={150} src='httpsi.im.ge20220729FwZXw1.jpg' Image
              HStack  
                Text fontSize=xlImAndroid  Text 
              Text fontWeight=semibold {userName}TextHStack
              
              VStack
  
 
               }
         br 
            Divider
        br 
           
           VStack   

            
           {
                Links.map((el)=(

                  VStack     w={100%} 
                  

                 
                    NavLink
                    key={el.path}
                    to={el.path}
                    w={100%}
                    onClick={()=onClose()}
                    className={({ isActive }) = (isActive  SmallactiveS  SmalldefaultS)
                  } end
                  
                        Text
                        w={100%}  fontSize=20px fontWeight={semibold}   p=10px 10px{el.name}Text
                       
                    NavLink
                    Divider
                    VStack
                ))
            }
               



           VStack




            {
              !isAuth  HStack marginTop=20px justifyContent=space-around 
              NavLink to=login
   
              Button onClick={()=onClose()} colorScheme=messenger variant='outline'
                Log In
              Button
              NavLink
              NavLink onClick={()=onClose()} to=register
              Button  colorScheme=messenger variant='solid'
                Register
              ButtonNavLink
              HStack 
              
              HStack marginTop=20px justifyContent=space-around 
             
              NavLink to=login
              Button onClick={()={
                onClose()
                LogOutUser()
              }}
              position={absolute} bottom=35px right=25px
             colorScheme=messenger variant='solid'
                LOG OUT
              ButtonNavLink
              HStack
            }
             
          DrawerBody
           DrawerContent

        Drawer   

    HStack

    HStack    bg=#0d6dd7
         style={{positionsticky, top0 }} 
         p=0px 8% justify=center  
         w=100% h={{ base '20px', md '54px' }}
        

Box  

display={{ base 'none', md 'none', lg 'block' }} 
          HStack    gap={50} 
            {
                Links.map((el)=(

                    NavLink
                    key={el.path}
                    to={el.path}
                    className={({ isActive }) = (isActive  activeS  defaultS)
                  } end
                  
                        Text  fontSize=20px  color=whiteAlpha.900  p=10px 10px{el.name}Text
                    NavLink

                ))
            }
        
          HStack

          Box

    HStack

    Box  display={{base `${OpenSearch}`, mdnone}} 
           SearchBar2 OpenSearch={OpenSearch} SetOpenSearch={SetOpenSearch}    
    Box
    Box
  )
}
 OpenSearch
 SetOpenSearch
export default Navbar