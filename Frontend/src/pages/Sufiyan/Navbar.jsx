import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  MdDynamicFeed,
  MdEco,
  MdEditNotifications,
  MdFeed,
  MdOutlineDarkMode,
} from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
//AiOutlineMenu
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

import { ImAndroid } from "react-icons/im";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_PRODUCTS } from "../../redux/products/product.actions";
import { ACTION_GET_CART } from "../../redux/cart/cart.actions";

const Links = [
  {
    name: "Men",
    path: "/men-clothing",
  },
  {
    name: "Women",
    path: "/women-clothing",
  },

  {
    name: "Electronics",
    path: "/electronics",
  },

  {
    name: "About Us",
    path: "/about",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((store) => store.product);
  const { token, isAuth } = useSelector((store) => store.auth);
  let userName;
  if(isAuth){
    userName = token.token.split("#");
    userName = userName[0];
  }  
  useEffect(() => {
    dispatch(ACTION_GET_PRODUCTS());
    if (isAuth) {
      dispatch(ACTION_GET_CART(token.token));
    }
  }, [isAuth]);

  console.log(data);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [OpenSearch, SetOpenSearch] = useState("none");

  const LogOutUser = () => {};

  // borderBottom="1px solid #eeee"

  return (
    <Box style={{ position: "sticky", top: 0, zIndex: "999" }}>
      <HStack
        bg="#14244b"
        style={{ position: "sticky", top: 0 }}
        p="0px 8%"
        justify="center"
        w="100%"
        h="64px"
      >
        <HStack
          w="full"
          maxW="1400px"
          p={{ base: "none", md: "0.6rem" }}
          spacing={8}
        >
          <HStack>
            <Link to="/">
              <Image
                w={{ base: "150px", md: "200px" }}
                minW="150px"
                dropShadow="2xl"
                style={{ position: "relative", left: "0px", zIndex: "1" }}
                top={{ base: "10px", md: "28px" }}
                src={
                  colorMode === "light"
                    ? "https://i.ibb.co/Fqg6dHZ/PROJECT-LOGO-5.png"
                    : "https://i.ibb.co/2t1KBmh/Project-Logo.png"
                }
              />
            </Link>
          </HStack>

          <HStack
            w={{ base: "full", md: "fit-content" }}
            p={2}
            justifyContent="space-around"
          >
            <Box display={{ base: "none", md: "block" }}>
              <SearchBar />
            </Box>
          </HStack>
          <Spacer />

          {!isAuth ? (
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <HStack>
                <NavLink to="/login">
                  <Button
                    fontWeight="lighter"
                    colorScheme="messenger"
                    variant="solid"
                  >
                    Sign in
                  </Button>
                </NavLink>

                <NavLink to="/register">
                  <Button
                    fontWeight="lighter"
                    colorScheme="messenger"
                    variant="solid"
                  >
                    Register
                  </Button>
                </NavLink>

                <IconButton
                  fontSize="25px"
                  borderRadius={50}
                  variant="link"
                  //onClick={toggleColorMode}
                  icon={<VscHeart />}
                />

                <NavLink to="/cart">
                  <IconButton
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    //onClick={toggleColorMode}
                    icon={<IoBagOutline />}
                  />
                </NavLink>
                <IconButton
                  fontSize="25px"
                  borderRadius={50}
                  variant="link"
                  onClick={toggleColorMode}
                  icon={
                    colorMode === "light" ? (
                      <MdOutlineDarkMode />
                    ) : (
                      <BsLightbulb />
                    )
                  }
                />
              </HStack>
            </Box>
          ) : (
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <HStack spacing={25}>
                <HStack>
                  <Text color="whiteAlpha.900" fontSize="xl">
                    <ImAndroid />
                  </Text>
                  <Text fontWeight="semibold" color="whiteAlpha.900">
                    {userName}
                  </Text>
                </HStack>

                <Button
                  onClick={LogOutUser}
                  fontWeight="lighter"
                  colorScheme="messenger"
                  variant="solid"
                >
                  LogOut
                </Button>

                <IconButton
                  fontSize="25px"
                  borderRadius={50}
                  variant="link"
                  //onClick={toggleColorMode}
                  icon={<VscHeart />}
                />

                <NavLink to="/cart">
                  <IconButton
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    //onClick={toggleColorMode}
                    icon={<IoBagOutline />}
                  />
                </NavLink>

                <IconButton
                  fontSize="25px"
                  borderRadius={50}
                  variant="link"
                  onClick={toggleColorMode}
                  icon={
                    colorMode === "light" ? (
                      <MdOutlineDarkMode />
                    ) : (
                      <BsLightbulb />
                    )
                  }
                />
              </HStack>
            </Box>
          )}

          <HStack
            display={{ base: "-webkit-inline-flex", md: "none", lg: "none" }}
          >
            <IconButton
              variant="solid"
              colorScheme="messenger"
              fontSize="x-large"
              onClick={() =>
                SetOpenSearch(OpenSearch == "none" ? "block" : "none")
              }
              icon={<BiSearch />}
            ></IconButton>

            <IconButton
              onClick={() => onOpen()}
              icon={<AiOutlineMenu />}
            ></IconButton>
          </HStack>
        </HStack>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <HStack alignItems="center" h="20px">
                <Image
                  borderTop="4px solid gray"
                  w="150px"
                  position="absolute"
                  bottom="20px"
                  src="https://i.ibb.co/2t1KBmh/Project-Logo.png"
                />

                <IconButton
                  fontSize="25px"
                  position="absolute"
                  right="12"
                  borderRadius={50}
                  onClick={toggleColorMode}
                  icon={
                    colorMode === "light" ? (
                      <MdOutlineDarkMode />
                    ) : (
                      <BsLightbulb />
                    )
                  }
                />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              {isAuth && (
                <VStack>
                  <Image
                    borderRadius={12}
                    marginTop="10px"
                    w={150}
                    src="https://i.im.ge/2022/07/29/FwZXw1.jpg"
                  ></Image>
                  <HStack>
                    <Text fontSize="xl">
                      <ImAndroid />
                    </Text>
                    <Text fontWeight="semibold">{"userName"}</Text>
                  </HStack>
                </VStack>
              )}
              <br />
              <Divider />
              <br />

              <VStack>
                {Links.map((el) => (
                  <VStack w={"100%"}>
                    <NavLink
                      key={el.path}
                      to={el.path}
                      w={"100%"}
                      onClick={() => onClose()}
                      className={({ isActive }) =>
                        isActive ? "SmallactiveS" : "SmalldefaultS"
                      }
                      end
                    >
                      <Text
                        w={"100%"}
                        fontSize="20px"
                        fontWeight={"semibold"}
                        p="10px 10px"
                      >
                        {el.name}
                      </Text>
                    </NavLink>
                    <Divider />
                  </VStack>
                ))}
              </VStack>

              {!isAuth ? (
                <HStack marginTop="20px" justifyContent="space-around">
                  <NavLink to="/login">
                    <Button
                      onClick={() => onClose()}
                      colorScheme="messenger"
                      variant="outline"
                    >
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink onClick={() => onClose()} to="/register">
                    <Button colorScheme="messenger" variant="solid">
                      Register
                    </Button>
                  </NavLink>
                </HStack>
              ) : (
                <HStack marginTop="20px" justifyContent="space-around">
                  <NavLink to="/login">
                    <Button
                      onClick={() => {
                        onClose();
                        LogOutUser();
                      }}
                      position={"absolute"}
                      bottom="35px"
                      right="25px"
                      colorScheme="messenger"
                      variant="solid"
                    >
                      LOG OUT
                    </Button>
                  </NavLink>
                </HStack>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>

      <HStack
        bg="#0d6dd7"
        // style={{position:"sticky", top:0 }}
        p="0px 8%"
        justify="center"
        w="100%"
        h={{ base: "20px", md: "54px" }}
      >
        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <HStack gap={50}>
            {Links.map((el) => (
              <NavLink
                key={el.path}
                to={el.path}
                className={({ isActive }) =>
                  isActive ? "activeS" : "defaultS"
                }
                end
              >
                <Text fontSize="20px" color="whiteAlpha.900" p="10px 10px">
                  {el.name}
                </Text>
              </NavLink>
            ))}
          </HStack>
        </Box>
      </HStack>

      <Box display={{ base: `${OpenSearch}`, md: "none" }}>
        <SearchBar2 OpenSearch={OpenSearch} SetOpenSearch={SetOpenSearch} />
      </Box>
    </Box>
  );
};
// OpenSearch
// SetOpenSearch
export default Navbar;
