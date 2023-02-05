import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
// MdStorefront
// HiUserGroup
const Working = () => {
  return (
    <Box
      minH="90vh"
      display="flex"
      justifyContent={"space-evenly"}
      alignItems="center"
      px="28"
    >
      <Box width={"50%"} p="10" color={"blue.700"}>
        <Text fontSize={"4xl"}>How does StreetSeller work ??</Text>
        <Box my="5">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quidem inventore cum placeat commodi vel
            minimaonsectetur adipisicing elit. Reprehenderit quidem inventore{" "}
          </Text>
        </Box>
        <Box
          my="2"
          display="flex "
          //   px="8"
          justifyContent={"flex-start"}
          alignItems="center"
        >
          <BsCheckCircleFill size={20} />
          <Text mx="5" fontSize={"xl"}>
            How does StreetSeller work ??
          </Text>
        </Box>
        <Box
          my="2"
          display="flex "
          //   px="8"
          justifyContent={"flex-start"}
          alignItems="center"
        >
          <BsCheckCircleFill size={20} />
          <Text mx="5" fontSize={"xl"}>
            How does StreetSeller work ??
          </Text>
        </Box>
        <Box
          my="2"
          display="flex "
          //   px="8"
          justifyContent={"flex-start"}
          alignItems="center"
        >
          <BsCheckCircleFill size={20} />
          <Text mx="5" fontSize={"xl"}>
            How does StreetSeller work ??
          </Text>
        </Box>
        <Box my="5">
          <Button
            rounded={"md"}
            bgColor={"#0340A1"}
            px="5"
            size="lg"
            textColor={"white"}
            shadow="lg"
            // boxShadow={"lg"}
            boxShadow={"-7px 7px rgba(0,0,0,0.5)"}
            onClick={() => console.log("clicked")}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        my="2"
        width={"50%"}
        p="10"
        bgColor={"purple.300"}
        rounded="md"
        borderWidth="3px"
        borderColor={"blue.700"}
        // borderLeftWidth="8px"
        // borderBottomWidth="8px"
        // boxShadow={"-7px 7px rgba(0,0,0,0.5)"}
        boxShadow={"-9px 9px rgba(20, 20, 227,0.7)"}
        // borderRadius={"2px"}
        display="flex"
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          mb="5"
          alignItems="center"
          justifyContent={"center"}
        >
          <Text
            bgColor={"white"}
            rounded="md"
            px="6"
            py="4"
            display={"inline-block"}
            boxShadow={"-7px 7px rgba(0,0,0,0.5)"}
          >
            StreetSeller
          </Text>
        </Box>
        <Box w="full" justifyContent={"space-between"} display="flex">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            flexDirection="column"
          >
            <Text
              rounded="md"
              bgColor={"white"}
              mb="5"
              px="6"
              py="4"
              display={"flex"}
              gap="2"
              boxShadow={"-7px 7px rgba(0,0,0,0.5)"}
              alignItems="center"
              justifyContent={"center"}
            >
              <MdStorefront /> Sellers
            </Text>
            <Text>
              placeat similique sint deserunt. Rem pariatur minima et sapiente,
              cupiditate dicta fuga illum veritatis quis similique explicabo
              atque aperiam doloribus numquam accusantium possimus
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            flexDirection="column"
          >
            <Text
              rounded="md"
              bgColor={"white"}
              mb="5"
              px="6"
              py="4"
              // display={"inline-block"}
              boxShadow={"-7px 7px rgba(0,0,0,0.5)"}
              display={"flex"}
              gap="2"
              alignItems="center"
              justifyContent={"center"}
            >
              <HiUserGroup /> Customers
            </Text>
            <Text>
              laudantium, ratione eveniet accusamus inventore quae! Culpa
              fugiat, perferendis alias ratione nemo incidunt! Ipsam sequi
              molestiae perferendis odit?
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Working;
