import React, { useEffect } from "react";
import { productData } from "./components/data";
import ProductCard from "./components/ProductCard";
import { HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_PRODUCTS } from "../../redux/products/product.actions";

const MenProducts = () => {
  // const dispatch=useDispatch();
  const { data } = useSelector((store) => store.product);
  // useEffect(() => {
  //   dispatch(ACTION_GET_PRODUCTS());

  // }, []);

  return (
    <Stack style={{ marginTop: "20px" }}>
      <Stack justify="center" style={{ margin: "auto", marginTop: "20px" }}>
        <VStack spacing={5}>
          {/* <Text color="#9097AB" fontWeight="bold" > HOME / ELECTRONICS </Text> */}

          <Text align="center" fontSize="20" fontWeight="bold">
            Mens Products
          </Text>
        </VStack>

        <HStack
          spacing={50}
          width={{ base: "100%", lg: "1200px" }}
          justify="stretch"
        >
          <SimpleGrid
            padding={5}
            spacing={5}
            columns={{ base: 2, md: 3, lg: 4 }}
          >
            {data?.mens.map((el) => (
              <ProductCard {...el} value={"mens"} />
            ))}
          </SimpleGrid>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default MenProducts;
