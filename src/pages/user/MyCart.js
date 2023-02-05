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
import UserCart from "../../components/user/UserCart";
import UserSidebar from "../../components/user/UserSideBar";
import { GetContext } from "../../Context";

const MyCart = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log("colorMode", colorMode);
  return (
    <>
      <Box minH="100vh" bgColor={"white.300"}>
        <HStack>
          {/* <Box w="28vw"> */} <UserSidebar /> {/* </Box> */}
          <Box minH={"100vh"} m="0" w="full" p="8">
            {" "}
            <UserCart />{" "}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default MyCart;
