import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import AdminSlaveCompoenent from "../../components/admin/AdminSlaveCompoenent";
import AdminSideBar from "../../components/admin/AdminSideBar";
import SellerAllOrders from "../seller/SellerAllOrders";

const AdminDashboard = () => {
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
            <AdminSlaveCompoenent />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default AdminDashboard;
