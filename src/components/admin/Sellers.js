import React, { useEffect, useState } from "react";
import {
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Axios from "../utils/Axios";
import { useToast } from "@chakra-ui/react";
import { GetContext } from "../../Context";
const Sellers = () => {
  const toast = useToast();
  const [Sellers, setSellers] = useState(null);
  const { AppState, setAppState } = GetContext();

  const getAllSellers = async () => {
    try {
      console.log("getAllSellers --> ");
      const { data } = await Axios.get("/seller", {
        headers: {
          authorization: `Bearer ${AppState.user.token}`,
        },
      });
      console.log("data--> ", data);
      setSellers(data);
    } catch (error) {
      console.log("error in getAllSellers", error);
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
    getAllSellers();
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
        overflowX={"scroll"}
      >
        <Table variant="striped" colorScheme="teal" my="10">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>User ID</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th>Total products</Th>
              <Th>Total orders</Th>
              <Th>Total revenue</Th>
              <Th>Card Number </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>25.4</Td>
            </Tr>
            {Sellers?.map((seller) => {
              return (
                <Tr key={seller._id}>
                  <Td>
                    <Image
                      borderRadius="full"
                      boxSize="45px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Td>
                  <Td>{seller.name}</Td>
                  <Td>{seller._id.substring(0, 7)}...</Td>
                  <Td>{seller.email} </Td>
                  <Td>{seller.products.length} </Td>
                  <Td>{seller.orders.length}</Td>
                  <Td>0</Td>
                  <Td>{(Math.random() * 100000).toFixed(0)}... </Td>
                  <Td>30.48</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Sellers;
