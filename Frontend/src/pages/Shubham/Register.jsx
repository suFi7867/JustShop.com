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
  Input,
  Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerUser } from "../../redux/register/register.actions";
import Recaptcha from "./components/Recaptcha";
import Loading from "../Sufiyan/components/Loding";

const Register = () => {
  const { isAuth } = useSelector((store) => store.auth);
  const { isRegistered, loading, error, successMessage, errorMessage } =
    useSelector((store) => store.register);
  const dispatch = useDispatch();
  const [registerCreds, setRegisterCreds] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCreds({
      ...registerCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (
      !registerCreds.name ||
      !registerCreds.surname ||
      !registerCreds.email ||
      !registerCreds.password
    ) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      dispatch(registerUser(registerCreds));
    }
  };

  if (isRegistered) {
    return <Navigate to="/login" />;
  }
  if (loading) {
    return <Loading />;
  } else if (error) {
    return toast({
      title: "Wrong Credentials",
      description: "Incorrect Email or Password",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }
  return (
    <HStack w="full">
      <VStack
        spacing={3}
        w="100vh"
        padding={{ base: "20px", md: "50px 100px" }}
        height="100vh"
      >
        <Stack w="full" textAlign="left">
          <Text marginTop={50} fontSize="xl" fontWeight="semibold">
            Create an account
          </Text>
        </Stack>

        <Stack spacing={3} w="full">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter Your Name..."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input
              onChange={handleChange}
              name="surname"
              type="text"
              placeholder="Enter Your Surname..."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email..."
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter Your Password..."
            />
          </FormControl>
          <FormControl>
            <FormLabel> Confirm Password</FormLabel>
            <Input type="password" placeholder="Re-Enter Your Password..." />
          </FormControl>
        </Stack>
        <Stack textAlign="left" spacing={3} w="full">
          <Recaptcha />
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
          >
            {"Create your new account"}
            {loading && (
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
        bgImage="./Register.gif"
        bgSize="cover"
      >
        <Text marginTop={50} maxWidth={{ base: "100%", md: "60%", lg: "60%" }}>
          {/* HOTJAR GUIDES */}
        </Text>

        {/* <Image
          width="500px"
          src="https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png"
        /> */}
        <Text color="black" width="full" fontSize="18px" fontWeight="semibold">
          We are here to look upon your every need...
        </Text>
        <Text
          width="full"
          fontSize="15px"
          fontWeight="thin"
          maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
          color="black"
        >
          The One-stop Shopping Destination. E-commerce is revolutionizing the
          way we all shop in India. Why do you want to hop from one store to
          another .
        </Text>
      </VStack>
    </HStack>
  );
};

export default Register;
