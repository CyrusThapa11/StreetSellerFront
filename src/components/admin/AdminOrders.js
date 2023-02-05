import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Orders from "./Orders";

const AdminOrders = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
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
        rounded="xl"
        // w="0vw"
        minH={"70vh"}
        bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
        // display="flex"
        // justifyContent="space-around"
        // alignItems={"center"}
        p="3"
      >
        <Orders />
      </Box>
    </Box>
  );
};

export default AdminOrders;
