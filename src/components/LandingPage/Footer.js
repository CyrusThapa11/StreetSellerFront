import React from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
// GrFacebook
const Footer = () => {
  return (
    <Box
      // mt="2"
      minH="60vh"
      bgColor={"blue.700"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"space-around"}
      // alignItems="center"
      color="white"
      px="32"
      // py="2"
    >
      <Box display="flex" justifyContent={"space-evenly"} alignItems="center">
        <Box w="50%">
          <Text fontSize={"3xl"}>StreetSeller</Text>
          <Box my="3">
            <Text fontSize={"xs"} my="2">
              {" "}
              Keep Updated. Join our news letter{" "}
            </Text>
            {/* <Input type="text" w="20vw" /> */}
            <InputGroup
              w="24vw"
              border={"2px"}
              // display="flex"
              // flexDirection={"center"}
              // justifyContent={"center"}
              rounded="md"
              boxShadow={"8px 8px rgba(240, 242, 242,0.8) "}
              size="md"
            >
              <Input
                pr="4.5rem"
                h="8vh"
                type={"text"}
                placeholder="Enter Email address"
              />
              <InputRightElement width="6vw" h="full" py="2">
                <Button h="full" textColor={"blue.700"} size="md">
                  Join
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        <Box w="50%" display="flex" justifyContent={"space-between"}>
          <Box>
            <UnorderedList my="4" listStyleType={"none"}>
              <ListItem>
                <Text fontWeight={"bold"} fontSize={"xl"} my="2">
                  Company
                </Text>
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                How it works
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                Pricing
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                About Us
              </ListItem>
            </UnorderedList>

            <UnorderedList my="4" listStyleType={"none"}>
              <ListItem>
                <Text fontWeight={"bold"} fontSize={"xl"} my="2">
                  Customer Service
                </Text>
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                Contact Us
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                Help and support
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                Lorem, ipsum.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box mr="14">
            <UnorderedList my="4" listStyleType={"none"}>
              <ListItem>
                <Text fontWeight={"bold"} fontSize={"xl"} my="2">
                  Quick links
                </Text>
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                FeedBack
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                FAQ
              </ListItem>
            </UnorderedList>

            <UnorderedList my="4" listStyleType={"none"}>
              <ListItem cursor={"pointer"}>
                <Text fontWeight={"bold"} fontSize={"xl"} my="2">
                  Info
                </Text>
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                {" "}
                streetSeller96@gmail.com{" "}
              </ListItem>
              <ListItem cursor={"pointer"} my="1" fontSize={"sm"}>
                {" "}
                +91 9689889xxx{" "}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent={"space-around"}>
        <Box w="50%" display="flex" gap="4">
          <GrTwitter cursor={"pointer"} size={30} />
          <GrLinkedin cursor={"pointer"} size={30} />
          <GrInstagram cursor={"pointer"} size={30} />
          <GrFacebook cursor={"pointer"} size={30} />
        </Box>
        <Text w="50%">
          {" "}
          2023-24 thapacyrus29@gmail.com | All Rights Reserved{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
