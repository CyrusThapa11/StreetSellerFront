import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { GiStarsStack } from "react-icons/gi";
import { TbBuildingStore } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
// FaShippingFast

const Trust = () => {
  return (
    <Box
      minH="70vh"
      bgColor={"blue.300"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems="center"
      px="28"
      color="white"
    >
      <Box>
        <Text fontSize={"5xl"}>Make use of your reliable neighborhood</Text>
      </Box>
      <Box w="full" display={"flex"} justifyContent="space-around">
        <Box
          gap="3"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <FaShippingFast size={100} />
          <Text fontSize={"3xl"} fontWeight="bold">
            {" "}
            10 Minutes{" "}
          </Text>
          <Text> Average Delivery Time </Text>
        </Box>
        <Box
          gap="3"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <TbBuildingStore size={100} />
          <Text fontSize={"3xl"} fontWeight="bold">
            {" "}
            2000+{" "}
          </Text>
          <Text> Order Placed </Text>
        </Box>
        <Box
          gap="3"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <BiHappyBeaming size={100} />
          <Text fontSize={"3xl"} fontWeight="bold">
            {" "}
            1900+{" "}
          </Text>
          <Text> Happy Customer </Text>
        </Box>
        <Box
          gap="3"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <GiStarsStack size={100} />
          <Text fontSize={"3xl"} fontWeight="bold">
            {" "}
            4.5{" "}
          </Text>
          <Text> Average seller rating </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Trust;
