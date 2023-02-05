import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import UserProfile from "../../components/user/UserProfile";
import UserSidebar from "../../components/user/UserSideBar";

const UserDashboard = () => {
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <UserSidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            {" "}
            <UserProfile />{" "}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default UserDashboard;
