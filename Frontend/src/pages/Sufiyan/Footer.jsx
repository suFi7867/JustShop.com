import React from "react";
import styles from "./styles/footer.module.css";
import { NavLink } from "react-router-dom";
import { Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { token, isAuth, AdminIsAuth } = useSelector((store) => store.auth);
  // const AdminIsAuth = false
//  bg={AdminIsAuth ? "#025d93" : "#14244b"}

  return (
    <VStack 
    bg={AdminIsAuth ? "#025d93" : "#032448"} 
    position={"relative"} bottom="0" w={"1400px"} id={styles.fooTerdivs}>

 
      <VStack id={styles.fooTer} w="full" 
     >
       
        <Stack direction={{base:"column", md:"row" }}
        gap={{base:"20px", md:"none" }}
         alignItems="flex-start" w="full" justifyContent="space-around" >
          <VStack  alignItems="flex-start" >
            <Text fontSize="md" color="#82beff">CUSTOMERS SERVICE</Text>
            
              <Text color="whiteAlpha.900">Contact us</Text>
          
          
              <Text color="whiteAlpha.900">Track Order</Text>
          
          
              <Text color="whiteAlpha.900">Return Order</Text>
          
        
              <Text color="whiteAlpha.900">Cancel Order</Text>
       
          </VStack>
          <VStack  alignItems="flex-start" >
            <Text fontSize="md" color="#82beff">COMPANY</Text>
         
              <Text color="whiteAlpha.900">About us</Text>
     
        
              <Text color="whiteAlpha.900">We're Hiring</Text>
         
         
              <Text color="whiteAlpha.900">Terms & Conditions</Text>
           
       
              <Text color="whiteAlpha.900">Privacy Policy</Text>
          
              <Text color="whiteAlpha.900">Blog</Text>
  
          </VStack>
          <VStack  alignItems="flex-start" >
            <Text fontSize="md" color="#82beff">CONNECT WITH US</Text>
          
              <Text color="whiteAlpha.900">4.7M People Like this</Text>
        
      
              <Text color="whiteAlpha.900">1M Followers</Text>
       
          </VStack>
          <VStack display={{base:"none", md:"block"}}  alignItems="flex-start" >
            <Text fontSize="md" color="#82beff">KEEP UP TO DATE</Text>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </VStack>
        </Stack>

        <Divider />

        <Stack  gap={{base:"20px", md:"none" }}
         
           direction={{base:"column", md:"row" }}
          
          >
            <VStack textAlign="center" >
            <Image   w={"150px"} src="https://i.ibb.co/37bRHfc/PROJECT-LOGO-png.png" />
            </VStack>
       
        <VStack display={{base:"none", md:"block"}} >
            <Text color="#82beff" fontSize="md">
           15 Days return policy
            </Text>
            <Text color="#82beff" fontSize="md">
            Cash on delivery*
            </Text>
          </VStack>
          <VStack >
            <Text color="#82beff" fontSize="md">DOWNLOAD THE APP</Text>
            <div id={styles.imgDivmain}>
              {/* //overflow={"hidden"} w="95%"  m="auto" mt={{base:"70px",lg:"190px"}} h={{base:"350px",lg:"auto"}} */}
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </VStack>
          <VStack>
            <Text color="#82beff" fontSize="md">100% SECURE PAYMENT</Text>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </VStack>
        </Stack>

 
      
      </VStack>
    </VStack>
  );
};

export default Footer;
