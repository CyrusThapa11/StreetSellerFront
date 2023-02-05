import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { products } from "../utils/Data";
import { GrFormAdd, GrSubtractCircle } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { GetContext } from "../../Context";

const UserCartItem = ({ product }) => {
  const { AppState, setAppState } = GetContext();
  console.log("AppState.cart ", AppState.cart);
  let { _id, price, name, seller, count, image } = product;

  const [currcount, setcount] = useState(count);
  console.log("product.quantity", product.quantity);
  const incrementCount = async (factor) => {
    if (
      product.count + factor <= 0 ||
      product.count + factor >= product.quantity
    )
      return;
    console.log("in incrementCount");

    setAppState({
      type: "UPDATE_COUNT",
      payload: { _id, newcount: product.count + factor },
    });
  };

  const removeFromCart = () => {
    console.log("removeFromCart");
    setAppState({
      type: "REMOVE_FROM_CART",
      payload: { _id },
    });
  };
  return (
    <>
      <Box
        m="2"
        display={"flex"}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <Image src={product.image} w="5vw" rounded={"md"} shadow="xl" />
        <Text> {product.name} </Text>
        <Box display="flex" justifyContent={"center"} alignItems="center">
          <Button
            onClick={() => {
              incrementCount(-1);
            }}
            size={"xs"}
            bgColor="teal.100"
            mr="1"
          >
            <GrSubtractCircle color="blue" size={15} />
          </Button>
          <Text fontSize="lg" mx="2">
            {product.count}
          </Text>
          <Button
            onClick={() => {
              incrementCount(1);
            }}
            size={"xs"}
            bgColor="teal.100"
          >
            <GrFormAdd size={15} />
          </Button>
        </Box>
        <Text> {product.price} /- </Text>
        <Button size={"xs"} bgColor="teal.100">
          <CiCircleRemove onClick={() => removeFromCart()} size={20} />
        </Button>
      </Box>
      <Divider borderWidth="thin" borderColor="teal.200" />
    </>
  );
};

export default UserCartItem;
