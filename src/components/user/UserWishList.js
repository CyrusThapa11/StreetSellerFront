import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const UserWishList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);
  return (
    <>
      <Box bgColor={"teal.200"} display="flex" rounded="xl" p="10">
        <Box
          display="flex"
          rounded="xl"
          flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
          w="full"
          bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          justifyContent="space-around"
          p="3"
        >
          <Box
            py={{ base: "4", sm: "6" }}
            px={{ base: "5", sm: "6" }}
            w={{ base: "full", md: "35vw", lg: "27vw" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="3">
              <Stack spacing="2">
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input outlineColor={"teal.500"} id="name" type="name" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input outlineColor={"teal.500"} id="email" type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    outlineColor={"teal.500"}
                    id="password"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="city">city</FormLabel>
                  <Input outlineColor={"teal.500"} id="city" type="city" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="image">image</FormLabel>
                  <Input outlineColor={"teal.500"} id="image" type="image" />
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="teal" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button
                  _hover={{
                    background: "teal.500",
                  }}
                  outlineColor={"teal.500"}
                  variant="outline"
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Image
              mx="auto"
              my="auto"
              src="/newproduct2.png"
              rounded="lg"
              bgColor="transparent"
              w={{ base: "78%", md: "40vw", lg: "30vw" }}
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserWishList;
