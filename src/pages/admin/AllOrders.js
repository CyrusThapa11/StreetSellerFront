import { Box, HStack } from "@chakra-ui/react";
import AdminSlaveCompoenent from "../../components/admin/AdminSlaveCompoenent";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AdminOrders from "../../components/admin/AdminOrders";
import { useEffect, useState } from "react";
import Axios from "../../components/utils/Axios";
const AllOrders = () => {


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
            <AdminOrders />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default AllOrders;
