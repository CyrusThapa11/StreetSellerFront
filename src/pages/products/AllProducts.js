import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import ProductsSidebar from "../../components/product/ProductsSidebar";
import ProductsList from "../../components/product/ProductsList";

const AllProducts = () => {

  
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack align={"flex-start"}>
          <ProductsSidebar />
          <Box
            minH={"100vh"}
            m="0"
            w="full"
            p="2"
            display="flex"
           
            justifyContent="space-around"
            alignItems={"center"}
          >
            <ProductsList />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default AllProducts;
