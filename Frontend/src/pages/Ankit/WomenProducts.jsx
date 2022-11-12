import React from "react";
import { productData } from "./components/data";
import ProductCard from "./components/ProductCard";
import { HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import WomenCard from "./components/WomenCard";
const WomenProducts = () => {
  const { data } = useSelector((store) => store.product);
  return (
    <Stack style={{ marginTop: "20px" }}>
      <Stack justify="center" style={{ margin: "auto", marginTop: "20px" }}>
        <VStack spacing={5}>
          {/* <Text color="#9097AB" fontWeight="bold" > HOME / ELECTRONICS </Text> */}

          <Text align="center" fontSize="20" fontWeight="bold">
            Womens Products
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
            {data?.womens.map((el) => (
              <WomenCard {...el} value={"womens"} />
            ))}
          </SimpleGrid>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default WomenProducts;
