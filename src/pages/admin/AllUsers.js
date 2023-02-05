import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminSlaveCompoenent from "../../components/admin/AdminSlaveCompoenent";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AdminAllUsers from "../../components/admin/AdminAllUsers";
import Axios from "../../components/utils/Axios";

const AllUsers = () => {

  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <AdminSideBar /> {/* </Box> */}
          <Box
            minH={"100vh"}
            m="0"
            w="full"
            p="8"
            display="flex"
            justifyContent="space-around"
            alignItems={"center"}
          >
            <AdminAllUsers />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default AllUsers;
