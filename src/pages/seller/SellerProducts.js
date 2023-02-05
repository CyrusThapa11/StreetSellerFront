import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import SellerAllProducts from "../../components/seller/SellerAllProducts";
import Sidebar from "../../components/utils/Sidebar";

const SellerProducts = () => {
  return (
    <div>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <Sidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            <SellerAllProducts />{" "}
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default SellerProducts;
