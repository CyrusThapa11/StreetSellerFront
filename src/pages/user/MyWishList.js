import { Box, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import UserSidebar from "../../components/user/UserSideBar";
import UserWishList from "../../components/user/UserWishList";


const MyWishList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log("colorMode", colorMode);
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <UserSidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            {" "}
            <UserWishList />{" "}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default MyWishList;
