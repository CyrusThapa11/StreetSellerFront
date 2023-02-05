import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  //   Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormAdd, GrSubtractCircle } from "react-icons/gr";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GetContext } from "../../Context";
// BsMoonFill

const Links = ["Dashboard", "Projects", "Team"];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { AppState, setAppState } = GetContext();

  const LogoutUser = () => {
    console.log("LogoutUser ");
    setAppState({ type: "LOGOUT_USER" });
  };
  console.log("AppState.user", AppState.user);
  console.log("AppState in NAvabar", AppState);

  return (
    <>
      <Box py="1" px="8">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <GrSubtractCircle /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">Logo</Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="/seller/dashboard">Seller Dashboard </Link>
              <Link to="/admin/dashboard">Admin Dashboard </Link>
              <Link to="/user/dashboard">User Dashboard </Link>
              <Link to="/products/">All products </Link>
              <Link to="/user/cart/">Cart </Link>
              {AppState.user === undefined || AppState.user === null ? (
                <Link to="/auth/">Login </Link>
              ) : (
                <>
                  <Button onClick={() => LogoutUser()}>Logout</Button>
                </>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              onClick={() => toggleColorMode()}
            >
              {colorMode === "light" ? <BsMoonFill /> : <BsFillSunFill />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
};
export default Navbar;
