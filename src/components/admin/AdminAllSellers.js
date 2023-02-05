import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import Sellers from "./Sellers";
import Users from "./Users";

const AdminAllSellers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bgColor={"teal.200"}
        w="full"
        display="flex"
        justifyContent="space-around"
        alignItems={"center"}
        rounded="xl"
        p="10"
      >
        <Box
          h="full"
          display="flex"
          rounded="xl"
          w="100%"
          bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          justifyContent="space-around"
          alignItems={"center"}
          p="2"
        >
          <Sellers />
        </Box>
      </Box>
    </>
  );
};

export default AdminAllSellers;
