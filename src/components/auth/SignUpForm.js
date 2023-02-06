import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { GetContext } from "../../Context";
import Axios from "./../utils/Axios";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ toggleLogin }) => {
  const [Person, setPerson] = React.useState("user");
  const toast = useToast();
  const navigate = useNavigate();

  const [User, setUser] = useState(null);
  const { AppState, setAppState } = GetContext();
  console.log("AppState in SignInForm ", AppState);

  const [Loading, setLoading] = React.useState(0);

  const createUser = async () => {
    setLoading(true);
    try {
      console.log("User", User);
      const { data } = await Axios.post(`${Person}/signup`, {
        ...User,
      });
      console.log(" user in createUser", data);
      let { user } = data;
      user = { ...user, token: data.token };
      console.log("updated user ", user);
      setAppState({ type: "ADD_USER", payload: user });

      // navitgaet user
      if (user?.isAdmin && user.isAdmin === true) {
        navigate(`/admin/dashboard`);
      } else navigate(`/${Person}/dashboard`);
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
      <Container
        maxW="lg"
        py={{ base: "5", md: "8" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack
          spacing="1"
          bgColor={"whiteAlpha.600"}
          p="2"
          rounded="lg"
          boxShadow={"xl"}
        >
          <Stack spacing="2">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button
                  onClick={() => toggleLogin((state) => !state)}
                  variant="outline"
                  colorScheme="teal"
                >
                  Sign In
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "4" }}
            px={{ base: "2", sm: "6" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="3">
              <Stack spacing="2">
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    name="name"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    outlineColor={"teal.500"}
                    id="name"
                    type="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    name="email"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
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
                    outlineColor={"teal.500"}
                    id="password"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="city">city</FormLabel>
                  <Input
                    name="city"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    outlineColor={"teal.500"}
                    id="city"
                    type="city"
                  />
                </FormControl>
                {/* <FormControl>
                  <FormLabel htmlFor="image">image</FormLabel>
                  <Input
                    name="image"
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    outlineColor={"teal.500"}
                    id="image"
                    type="image"
                  />
                </FormControl> */}
                <FormControl>
                  <FormLabel htmlFor="password">Person</FormLabel>
                  <RadioGroup
                    name="person"
                    value={Person}
                    defaultValue="user"
                    onChange={setPerson}
                  >
                    <HStack spacing="24px">
                      <Radio value="seller">seller</Radio>
                      <Radio value="user">user</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
                {/* <PasswordField /> */}
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
                  onClick={() => createUser()}
                  outlineColor={"teal.500"}
                  variant="outline"
                >
                  {Loading ? <Spinner /> : "Sign Up"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
export default SignInForm;
