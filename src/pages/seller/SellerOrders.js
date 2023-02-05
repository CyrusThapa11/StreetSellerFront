import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/utils/Sidebar";
import SellerAllOrders from "./SellerAllOrders";

const SellerOrders = () => {
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <Sidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            <SellerAllOrders />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default SellerOrders;
