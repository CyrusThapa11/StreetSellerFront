import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AdminSlaveCompoenent from "../../components/admin/AdminSlaveCompoenent";
import AdminAllSellers from "../../components/admin/AdminAllSellers";

const AllSellers = () => {


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
            <AdminAllSellers />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default AllSellers;
