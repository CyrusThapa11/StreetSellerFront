import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import AdminSlaveCompoenent from "./AdminSlaveCompoenent";
import AdminSideBar from "./AdminSideBar";

const CreateCategories = () => {
  //

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
            rounded="xl"
          >
            <AdminSlaveCompoenent />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CreateCategories;
