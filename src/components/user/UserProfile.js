import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GetContext } from "../../Context";
import Axios from "../utils/Axios";

const UserProfile = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { AppState, setAppState } = GetContext();
  // const [Person, setPerson] = React.useState("user");
  const toast = useToast();

  const [User, setUser] = useState(AppState.user);
  console.log("AppState in UserProfile ", AppState);

  const [Loading, setLoading] = React.useState(0);
  // const getData = () => {};

  const updateUser = async () => {
    setLoading(true);
    let Person = AppState.user.isSeller ? "seller" : "user";
    try {
      console.log("User", User);
      const { data } = await Axios.patch(`${Person}/${User?._id}`, {
        ...User,
      });
      console.log(" user in createUser", data);
      let { user } = data;
      user = { ...user, token: data.token };
      console.log("updated user ", user);
      setAppState({ type: "ADD_USER", payload: user });
      toast({
        title: `${data.message} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "success",
      });
    } catch (error) {
      console.log("error - ", error);
      toast({
        title: `${error.response.data.message} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "error",
      });
    }
    setLoading(false);
  };

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
                  <Input
                    value={User?.name}
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    name="name"
                    outlineColor={"teal.500"}
                    id="name"
                    type="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    value={User?.email}
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    name="email"
                    outlineColor={"teal.500"}
                    id="email"
                    type="email"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    name="password"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    value={User?.password}
                    outlineColor={"teal.500"}
                    id="password"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="city">city</FormLabel>
                  <Input
                    value={User?.city}
                    name="city"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    outlineColor={"teal.500"}
                    id="city"
                    type="city"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="image">image</FormLabel>
                  <Input
                    // value={User?.image}
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    outlineColor={"teal.500"}
                    id="image"
                    type="image"
                  />
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
                  onClick={() => updateUser()}
                  outlineColor={"teal.500"}
                  variant="outline"
                >
                  {Loading ? <Spinner /> : "Update"}
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

export default UserProfile;
