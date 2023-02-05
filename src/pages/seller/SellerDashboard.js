import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import SellerProfile from "../../components/seller/SellerProfile";
import Sidebar from "../../components/utils/Sidebar";

const SellerDashboard = () => {
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <Sidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            {" "}
            <SellerProfile />{" "}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default SellerDashboard;
