import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Highlight,
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Loader from "../components/SmallComponents/Loader";
// import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  // const { LoginUser } = useContext(AuthContext);

  const [name, SetName] = useState("");

  const [Loading, setLoading] = useState(false);
  // const navigatekaro = useNavigate();

  const toast = useToast();

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      prompt("ENTER OTP");

      // LoginUser(name);

      // navigatekaro("/");
    }, 2000);
  };

  ////////////////////////LOADER //////////////////////////////
  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  // console.log(data)

  // if (isLoading) {
  //   return <Loader />;
  // }

  ////////////////////////LOADER //////////////////////////////

  return (
    <HStack w="full">
      <VStack
        spacing={5}
        w="100vh"
        padding={{ base: "20px", md: "50px 100px" }}
        height="100vh"
      >
        <Stack w="full" textAlign="left">
          <Text marginTop={50} fontSize="xl" fontWeight="semibold">
            Create an account
          </Text>
        </Stack>

        <Stack spacing={5} w="full">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => SetName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Your Name..."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input
              onChange={(e) => SetName(e.target.value)}
              value={name}
              type="email"
              placeholder="Enter Your Surname..."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => SetName(e.target.value)}
              value={name}
              type="email"
              placeholder="Enter Your Email..."
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter Your Password..." />
          </FormControl>
          <FormControl>
            <FormLabel> Confirm Password</FormLabel>
            <Input type="password" placeholder="Re-Enter Your Password..." />
          </FormControl>
        </Stack>
        <Stack textAlign="left" spacing={5} w="full">
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
          >
            {!Loading && "Create your new account"}
            {Loading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </Button>
        </Stack>
      </VStack>

      <VStack
        textAlign="left"
        w="full"
        padding={100}
        height="100vh"
        bg="#ebeef9"
        display={{ base: "none", md: "block" }}
      >
        <Text marginTop={50} maxWidth={{ base: "100%", md: "60%", lg: "60%" }}>
          {/* HOTJAR GUIDES */}
        </Text>

        {/* <Image
          width="500px"
          src="https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png"
        /> */}
        <Text width="full" fontSize="18px" fontWeight="semibold">
          Guides to learn more about Hotjar
        </Text>
        <Text
          width="full"
          fontSize="15px"
          fontWeight="thin"
          maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
        >
          Check out our guides to better understand user behavior, make the
          right changes, improve UX, and increase conversions on your website
          and product.
        </Text>

        <Button colorScheme="messenger" variant="outline">
          Explore Guides
        </Button>
      </VStack>
    </HStack>
  );
};

export default Register;
