import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

import Categories from "../utils/Categories";
import Users from "./Users";

const AdminAllUsers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {/* <h2>AdminSlaveCopmonent !</h2> */}
      <Box
        bgColor={"teal.200"}
        h="full"
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
          w="full"
          bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          justifyContent="space-around"
          alignItems={"center"}
          p="3"
        >
          <Users />
        </Box>
      </Box>
    </>
  );
};

export default AdminAllUsers;
