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

const Login = () => {
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
            Sign In
          </Text>

          <Text fontSize="sm">
            <Highlight
              query="Sign Up"
              styles={{ color: "blue", textDecoration: "underline" }}
            >
              Need a Hotjar account? Sign Up
            </Highlight>
          </Text>
        </Stack>

        <Stack spacing={5} w="full">
          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
                src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                w={25}
              />
            </IconButton>
            <Button w="full" colorScheme="messenger" variant="solid">
              Sign In With Google
            </Button>
          </ButtonGroup>

          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
                src="https://media.istockphoto.com/vectors/lock-icon-vector-id936681148?k=20&m=936681148&s=612x612&w=0&h=j6fxNWrJ09iE7khUsDWetKn_PwWydgIS0yFJBEonGow="
                w={25}
              />
            </IconButton>
            <Button w="full" bg="blackAlpha.600" color="white" variant="solid">
              Sign In With Email
            </Button>
          </ButtonGroup>
        </Stack>

        <HStack spacing={5} w="full">
          <Divider minW={1} />
          <Text w="full" fontSize="12px" color="gray.600">
            {" "}
            Or, sign in with email
          </Text>
          <Divider minW={1} />
        </HStack>

        <Stack spacing={5} w="full">
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

          <Checkbox defaultChecked>Keep Me Logged in</Checkbox>
        </Stack>

        <Stack textAlign="left" spacing={5} w="full">
          <Text fontSize="15px" color="blue" as="u">
            Forgot Password
          </Text>
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
          >
            {!Loading && "Sign In"}
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
        bgImage="./SignIn.gif"
        bgSize="cover"
      >
        <HStack>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            marginTop={50}
            maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
            paddingBottom="40px"
          >
            Welcome to
          </Text>
          <Image
            width={{ base: "50%", md: "40%", lg: "20%" }}
            src="./Project Logo.png"
          />
        </HStack>
        <Text width="full" fontSize="18px" fontWeight="semibold">
          Sign In to explore more about justShop
        </Text>
        <Text
          width="full"
          fontSize="15px"
          fontWeight="thin"
          maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
        >
          If you are the new visitor our website simply register yourself
          here...
        </Text>

        <Button variant="outline">
          Create new account
        </Button>
      </VStack>
    </HStack>
  );
};

export default Login;
