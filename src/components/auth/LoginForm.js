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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import * as React from "react";
import { GetContext } from "../../Context";

import Axios from "./../utils/Axios";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleLogin }) => {
  const toast = useToast();
  const navigate = useNavigate();

  const { AppState, setAppState } = GetContext();
  console.log("AppState in LoginForm - ", AppState);
  const [User, setUser] = React.useState(null);
  const [Person, setPerson] = React.useState("user");

  const [Loading, setLoading] = React.useState(0);

  const login = async () => {
    setLoading(true);
    try {
      console.log(" user in login ", User);
      console.log(" Person in login ", Person);
      // let url = Person;
      const { data } = await Axios.post(`${Person}/login`, { ...User, Person });
      console.log("data", data);

      let { user, token } = data;
      user = { ...user, token };

      console.log(" data in user ", user);
      setAppState({ type: "ADD_USER", payload: user });

      if (user.isSeller === true) navigate("/seller/dashboard");
      else {
        if (user.isAdmin) navigate("/admin/dashboard");
        else navigate("/user/dashboard");
      }

      //
    } catch (error) {
      // TODO SET A TOAST !
      console.log("error - ", error);
      toast({
        title: `${error.response.data.message} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "error",
      });
      // toast({
      //   title: `${error.response.data.satck} `,
      //   variant: "subtle",
      //   isClosable: true,
      //   position: "top-right",
      //   status: "error",
      // });2
    }
    setLoading(false);
  };
  return (
    <>
      (
      <Container py={{ base: "10", md: "16" }} px={{ base: "0", sm: "8" }}>
        <Stack
          spacing="8"
          bgColor={"whiteAlpha.300"}
          p="3"
          rounded="lg"
          boxShadow={"xl"}
        >
          <Stack spacing="3">
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
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "3" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
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
                    onChange={(e) =>
                      setUser({ ...User, [e.target.name]: e.target.value })
                    }
                    name="password"
                    outlineColor={"teal.500"}
                    id="password"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
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
                  onClick={() => login()}
                  outlineColor={"teal.500"}
                  variant="outline"
                >
                  {Loading === true ? <Spinner /> : "Sign in"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      );
    </>
  );
};
export default LoginForm;
