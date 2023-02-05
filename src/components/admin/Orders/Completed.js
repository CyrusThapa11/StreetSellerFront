import {
  Tr,
  Td,
  Tbody,
  Th,
  Thead,
  TableContainer,
  Table,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Completed = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th>Total Orders</Th>
              <Th>Credit Card No</Th>
              <Th>Phone No</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Completed;
