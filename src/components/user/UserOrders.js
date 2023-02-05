import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import Axios from "../utils/Axios";
import { GetContext } from "../../Context";
import Moment from "moment";

const UserOrders = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);
  const { AppState, setAppState } = GetContext();
  const [UserOrders, setUserOrders] = useState([]);
  const getUserOrder = async () => {
    console.log("setUserOrders");
    const { data } = await Axios.get(`/user/orders/${AppState.user._id}/`, {
      headers: {
        authorization: `Bearer ${AppState.user.token}`,
      },
    });
    console.log("data -> ", data);
    setUserOrders(data);
  };

  useEffect(() => {
    getUserOrder();
    return () => {
      // cleanup
    };
  }, []);

  return (
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
          px={{ base: "5", sm: "10", md: "10", lg: "10" }}
          w={"full"}
          rounded="lg"
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <TableContainer rounded="xl" shadow={"md"} overflowX={"scroll"}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>User ID</Th>
                  <Th>Date</Th>
                  <Th>Total Items</Th>
                  <Th>Total Price</Th>
                  <Th>Payment Status</Th>
                  <Th>Delivery Status</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>feet</Td>
                  <Td>centim</Td>
                  <Td>30.48</Td>
                  <Td>feet</Td>
                  <Td>centim</Td>
                  <Td>centim</Td>
                  <Td>
                    <Menu>
                      <MenuButton>
                        <HiDotsVertical cursor={"pointer"} />
                      </MenuButton>
                      <MenuList minWidth={"20px"}>
                        <MenuItem>View</MenuItem>
                        <MenuItem>Update</MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>

                {UserOrders.map((order) => {
                  return (
                    <Tr>
                      <Td> {order.seller.substring(0, 8)}... </Td>
                      <Td>{Moment(order.updatedAt).format("MMM Do YY")}</Td>
                      <Td>{order.cartQuantity}</Td>
                      <Td>{order.totalPrice}</Td>
                      <Td>{order.isPaid === true ? "Paid" : "Not paid"}</Td>
                      <Td>
                        {order.isDelivered === true
                          ? "Delivered"
                          : "Not Delivered"}
                      </Td>
                      <Td>
                        {/* <HiDotsVertical cursor={"pointer"} /> */}
                        <Menu>
                          <MenuButton>
                            <HiDotsVertical cursor={"pointer"} />
                          </MenuButton>
                          <MenuList minWidth={"20px"}>
                            <MenuItem>View</MenuItem>
                            <MenuItem>Update</MenuItem>
                            <MenuItem>Delete</MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default UserOrders;
