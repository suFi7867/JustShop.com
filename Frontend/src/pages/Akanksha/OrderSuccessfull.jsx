import { Button, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {



  const navigate = useNavigate();
  

  return (
    <div>
      <VStack margin="auto"  style={{marginTop:"100px", marginBottom:"40px"}} >
        <div>
           <Text style={{color:"green", fontSize:"2.5rem", fontWeight:"bold"}}>Hurray !! Order Successful</Text>
        </div>
        <div>
          <img 
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            width="500px"
            alt="img"
          />
        </div>
       
        <Button width="30%"  height="50px"  onClick={()=>navigate("/")} fontSize="x" padding={3} w="30%" colorScheme='blue'> CONTINUE SHOPPING </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
