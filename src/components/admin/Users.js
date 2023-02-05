import {
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GetContext } from "../../Context";
import Axios from "../utils/Axios";
import { useToast } from "@chakra-ui/react";
const Users = () => {
  const toast = useToast();
  const [Users, setUsers] = useState(null);
  const { AppState, setAppState } = GetContext();
  const getAllUsers = async () => {
    try {
      console.log("getAllUsers --> ");
      const { data } = await Axios.get("/user", {
        headers: {
          authorization: `Bearer ${AppState.user.token}`,
        },
      });
      console.log("data--> ", data);
      setUsers(data);
    } catch (error) {
      console.log("error in getAllUsers ", error);
      toast({
        title: error.response.data.message,
        description: error.response.data.stack.substring(0, 250),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    // TODO  FETCH ALL USERS
    getAllUsers();
    return () => {
      // cleanup
    };
  }, []);
  return (
    <>
      <TableContainer
        h="60vh"
        w="60vw"
        overflowY={"scroll"}
        // overflowX={"scroll"}
      >
        <Table variant="striped" colorScheme="teal" my="1">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>User ID</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th>Total Orders</Th>
              <Th>Credit Card No</Th>
              <Th>Phone No</Th>
              <Th>Phone No</Th>
              {/* <Th>Phone No</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>feet</Td>
              <Td>feet</Td>
              <Td>feet</Td>
              <Td>30.48</Td>
              <Td>feet</Td>
              <Td>feet</Td>
              <Td>feet</Td>
              <Td>30.48</Td>
            </Tr>
            {Users?.map((user) => {
              return (
                <Tr key={user._id}>
                  <Td>
                    <Image
                      borderRadius="full"
                      boxSize="45px"
                      src="https://  bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Td>
                  <Td> {user._id.substring(0, 7)}... </Td>
                  <Td> {user.name} </Td>
                  <Td>{user.email}</Td>
                  <Td>{user.city || "Delhi"} </Td>
                  <Td> {user.Orders.length || 0} </Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
