import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TbShoppingCartDiscount, TbDiscount } from "react-icons/tb";

import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiPlus, BiMinus } from "react-icons/bi";
import Loading from "./components/Loding";

import { CartDataToMatch } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_ITEM_TO_CART } from "../../redux/cart/cart.actions";

const SingleProduct = () => {
  const { token } = useSelector((store) => store.auth);

  const { data: productData } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  const [isButLoading, setIsButLoading] = useState(false);

  const [data, setData] = useState({});
  // console.log(data)
  const [DefaultImg, setImage] = useState();

  const [AllImages, setAllimages] = useState();

  const [SecondImg, setSecondImg] = useState();
  const [ThirdImg, setThirdImg] = useState();
  const [FirstImg, setFirstImg] = useState();

  const [bagbutton, setbagbutton] = useState(true);

  //const {CartDataToMatch,cartData, handleCart} = useContext(AppContext)

  const handleCart = () => {};

  //console.log(CartDataToMatch)

  const toast = useToast();

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const handleClick = () => {
    setIsButLoading(true);
    dispatch(ACTION_ADD_ITEM_TO_CART({ data: data, token: token.token }));
    setTimeout(() => {
      toast({
        title: "Added To Cart.",

        description: "shop more or go to cart.",

        duration: 3000,
        isClosable: true,
      });

      setIsButLoading(false);

      setbagbutton(false);
    }, 1500);
  };

  // id is a string so we need to convert it to number
  const { type, id } = useParams();

  console.log(type);

  // console.log(cartData)
  console.log(productData.womens);
  
  useEffect(() => {
    let obj;
    if (type == "womens") {
      obj = productData.womens.find((el) => {
        console.log(el.id == Number(id));
        if (el.id == Number(id)) {
          return true;
        }
        return false;
      });
    }
    if (type == "mens") {
      obj = productData.mens.find((el) => {
        console.log(el.id == Number(id));
        if (el.id == Number(id)) {
          return true;
        }
        return false;
      });
    }
    if (type == "electronics") {
      obj = productData.electronics.find((el) => {
        console.log(el.id == Number(id));
        if (el.id == Number(id)) {
          return true;
        }
        return false;
      });
    }

    console.log("I am running from singleProductPage");

    setData(obj);

    setImage(obj?.firstImages[0]);
    setAllimages(obj?.firstImages);
    setFirstImg(obj?.firstImages);
    setSecondImg(obj?.secondImages);
    setThirdImg(obj?.thirdImages);
    //  console.log(obj)
  }, [id]);

  //FirstImg

  if (isLoading) {
    return <Loading />;
  }

  //align="revert-layer"
  return (
    <Stack
      w="full"
      margin="auto"
      alignSelf="center"
      justifyContent="center"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 0, sm: 30 }}
      padding={5}
      justify="center"
      style={{ marginBottom: "50px" }}
    >
      <Stack
        flexDirection={{ base: "column-reverse", md: "row" }}
        spacing={5}
        padding={5}
      >
        <Stack
          direction={{ base: "row", md: "column" }}
          maxH="500px"
          padding={3}
        >
          <ChevronDownIcon
            display={{ base: "none", md: "block" }}
            boxSize="30px"
            color="gray.500"
            cursor="pointer"
          />

          {AllImages.map((img) => (
            <Image
              borderRadius={5}
              alt={data.name}
              maxW={"70"}
              minW="50px"
              objectFit="cover"
              src={img}
              onClick={() => setImage(img)}
              cursor="pointer"
            />
          ))}
          <ChevronUpIcon
            display={{ base: "none", md: "block" }}
            boxSize="30px"
            color="gray.500"
            cursor="pointer"
          />
        </Stack>

        <Stack>
          <Image borderRadius={15} src={DefaultImg} maxH="500px" minW="200px" />
          <Stack w={"full"}>
            <ButtonGroup
              size={{ base: "xs", md: "xs" }}
              marginTop={{ base: "-50px", md: "-50px" }}
              colorScheme="red"
              isAttached
              variant="solid"
            >
              <IconButton
                borderRadius={50}
                fontSize={{ base: "xl", md: "sl" }}
                icon={<TbDiscount />}
              />

              <Button
                borderRadius={50}
                fontWeight="bold"
                fontSize={{ base: "sm", md: "sm" }}
              >
                {" "}
                {
                  -(
                    ((data.strikePrice - data.price) / data.strikePrice) *
                    100
                  ).toFixed(2)
                }
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>

      <VStack
        minH={{ base: "none", md: "400px" }}
        maxW={"700px"}
        w={{ base: "full", md: "50%" }}
        padding={{ base: 5, md: 8 }}
        align="revert-layer"
        textAlign="left"
        spacing={5}
      >
        <Text
          fontWeight="semibold"
          fontSize={{ base: "xl", md: "2xl" }}
          color="gray.900"
        >
          {data.name}
        </Text>
        <Box>
          <HStack
            marginTop={{ base: "-15px", md: "0" }}
            alignContent="center"
            gap={"10px"}
          >
            <Badge
              fontSize={{ base: "sm", md: "xl" }}
              variant="outline"
              width="fit-content"
              colorScheme="messenger"
            >
              {"4.4  ⭐"}
            </Badge>
            <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
              ₹{data.price}
            </Text>

            <Text as="s" marginLeft={4} fontSize="xl">
              ₹{data.strikePrice}
            </Text>
          </HStack>
          <Text>inclusive of all taxes</Text>
        </Box>
        <Divider display={{ base: "none", md: "none" }} />
        <Badge
          display={{ base: "none", md: "none" }}
          fontSize={{ base: "15px", md: "20px" }}
          variant="subtle"
          colorScheme="yellow"
        >
          {" "}
          ₹{data.price - 50} for tribe members only{" "}
        </Badge>
        <Text display={{ base: "none", md: "none" }}>
          TriBe members get an extra discount of ₹20 and FREE shipping.Learn
          more
        </Text>
        <Divider />
        <Text fontWeight="extrabold">SELECT COLOR</Text>
        SecondImg
        <HStack spacing={5}>
          <IconButton
            onClick={() => {
              setAllimages(FirstImg);
              setImage(FirstImg[0]);
            }}
            variant="ghost"
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
          >
            <Image src={`${FirstImg[0]}`} />
          </IconButton>
          <IconButton
            onClick={() => {
              setAllimages(SecondImg);
              setImage(SecondImg[0]);
            }}
            variant="ghost"
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
          >
            <Image src={`${SecondImg[0]}`} />
          </IconButton>
          <IconButton
            onClick={() => {
              setAllimages(ThirdImg);
              setImage(ThirdImg[0]);
            }}
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
          >
            <Image src={`${ThirdImg[0]}`} />
          </IconButton>
        </HStack>
        <Text fontWeight="extrabold">SELECT SIZE</Text>
        <HStack spacing={5}>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            border="1px solid"
            color="black"
          >
            S
          </Center>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            border="1px solid"
            color="black"
          >
            M
          </Center>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            border="1px solid"
            color="black"
          >
            L
          </Center>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            bg="tomato"
            color="white"
          >
            XL
          </Center>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            border="1px solid"
            color="black"
          >
            2XL
          </Center>
          <Center
            w={{ base: "40px", lg: "50px" }}
            h={{ base: "40px", lg: "50px" }}
            fontSize={{ base: "sm", lg: "xl" }}
            border="1px solid"
            color="black"
          >
            3XL
          </Center>
        </HStack>
        <Text>
          Garment: Chest (in Inch): 44.0 Front Length (in Inch): 30.0 Sleeve
          Length (in Inch): 25.5
        </Text>
        <Divider />
        <HStack w="full">
          <Button
            onClick={() => handleClick()}
            fontSize="x-large"
            padding={8}
            w="full"
            colorScheme="messenger"
          >
            <BiShoppingBag fontSize={{ base: "25px", sm: "25px", md: "3xl" }} />

            {!isButLoading && bagbutton && "Buy Now"}
            {!isButLoading && !bagbutton && "ADDED"}
            {isButLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </Button>

          <Button
            fontSize={{ base: "25px", sm: "25px", md: "3xl" }}
            padding={8}
            w="full"
            colorScheme="yellow"
          >
            <AiOutlineHeart /> WISHLIST
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default SingleProduct;
