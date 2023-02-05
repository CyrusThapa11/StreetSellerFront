import React from "react";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
//
const Hero = () => {
  return (
    <Box
      minH="90vh"
      bgColor={"#05CEA1"}
      display="flex"
      justifyContent={"space-evenly"}
      alignItems="center"
      px="28"
    >
      {/* <Box display="flex" gap="10"> */}
      <Box
        width={"50%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        position={"relative"}
      >
        <Image src="/hero3.png " position="absolute" w="35vw" />
      </Box>
      <Box width={"50%"} color={"#0340A1"}>
        <Text fontSize={"5xl"} fontWeight="bold">
          {" "}
          Buy Unique From Your Neighbourhood
        </Text>
        <Text my="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Id, ut. Lorem ipsum
        </Text>
        <Box w="25vw" my="5">
          {/* <Input  /> */}
          <InputGroup size="lg">
            <Input
              borderColor={"blue.700"}
              borderWidth="2px"
              size="lg"
              // pr="4.5rem"
              bgColor={"white"}
              p="5"
              h="9vh"
              type={"text"}
              placeholder="Enter your city"
              borderRightWidth={"5px"}
              borderBottomWidth={"5px"}
            />
            <InputRightElement mr="2" width="7rem" mt="1.5">
              <Button
                rounded={"sm"}
                bgColor={"#0340A1"}
                px="5"
                h="90%"
                size="sm"
                textColor={"white"}
                onClick={() => console.log("clicked")}
              >
                <Text mr="1">Search</Text>
                <Box>
                  <BsSearch size={15} />
                </Box>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>

      {/* </Box> */}
    </Box>
  );
};
export default Hero;
