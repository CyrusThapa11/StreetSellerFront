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
} from "@chakra-ui/react";
import UserSidebar from "../../components/user/UserSideBar";
import UserOrders from "../../components/user/UserOrders";
const MyOrders = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log("colorMode", colorMode);
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <UserSidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="80vw" p="8">
            {" "}
            <UserOrders />{" "}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default MyOrders;
