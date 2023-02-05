import {
  Tr,
  Td,
  Tbody,
  Th,
  Thead,
  TableContainer,
  Table,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "./table.css";
import Axios from "../../utils/Axios";
import Moment from "moment";
import { Badge } from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";
import { GetContext } from "../../../Context";
import { useToast } from "@chakra-ui/react";
const AllOrders = () => {
  const [Orders, setOrders] = useState(null);
  const { AppState, setAppState } = GetContext();
  const toast = useToast();
  const getAllOrders = async () => {
    try {
      console.log("getAllOrders --> ");
      const { data } = await Axios.get("/order", {
        headers: {
          authorization: `Bearer ${AppState.user.token}`,
        },
      });
      console.log("data--> ", data);
      setOrders(data);
    } catch (error) {
      toast({
        title: `${error.response.data.message} `,
        description: `${error.response.data.stack.substring(0, 250)} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "error",
      });
    }
  };

  useEffect(() => {
    getAllOrders();
    return () => {
      // cleanup
    };

    // TODO  FETCH ALL USERS
  }, []);
  return (
    <>
      <TableContainer h="60vh" w="60vw" overflowY={"scroll"}>
        <Table variant="striped" overflowX={"scroll"} colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th> Vendor </Th>
              <Th> Vendee </Th>
              <Th>Total Items</Th>
              <Th>Total Amount</Th>
              <Th>Order Date</Th>
              <Th>Payment status</Th>
              <Th>Delivery Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
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

            {Orders?.map((order) => {
              return (
                <Tr key={order._id}>
                  <Td> {order._id.substring(0, 7)}... </Td>
                  <Td> {order.seller.name} </Td>
                  <Td>{order.owner.name} </Td>
                  <Td> {order.cartQuantity} </Td>
                  <Td>{order.totalPrice}</Td>
                  <Td> {Moment(order.createdAt).format("MMM Do YY")} </Td>
                  <Td>
                    <Badge colorScheme={`${order.isPaid ? "green" : "red"}`}>
                      {order.isPaid ? "Paid" : "Not paid"}
                    </Badge>
                  </Td>
                  <Td>
                    <Badge
                      display="flex"
                      alignItems={"center"}
                      justifyContent="center"
                      colorScheme={`${order.dispatch ? "green" : "red"}`}
                    >
                      {order.dispatch ? "Dispatched" : "Not Dispatched"}
                    </Badge>
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
    </>
  );
};

export default AllOrders;
