import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import SellerOrders from "../../components/seller/SellerOrders";
const SellerAllOrders = () => {
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
        display="flex"
        rounded="xl"
        w="full"
        bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
        justifyContent="space-around"
        alignItems={"center"}
        p="3"
      >
        <SellerOrders />
      </Box>
    </Box>
  );
};

export default SellerAllOrders;
