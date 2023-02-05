import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFormAdd, GrSubtractCircle } from "react-icons/gr";
import { GetContext } from "../../Context";
// AiFillStar

const ProductDetails = ({
  name,
  price,
  description,
  city,
  quantity,
  seller,
  _id,
  images,
}) => {
  console.log("name --> ", name);
  console.log("_id --> ", _id);
  console.log("description --> ", description);
  const toast = useToast();
  const { AppState, setAppState } = GetContext();
  // TODO POPULATE THE SELLER ID !!

  // useEffect(() => {
  //   return () => {};
  // }, []);
  const [count, setcount] = useState(0);
  console.log("AppState.cart ", AppState.cart);
  const addToUsersCart = async () => {
    try {
      if (count === 0) return;
      let found = 0;
      AppState.cart.forEach((element) => {
        if (element._id === _id) {
          if (element.count === count) {
            found = 1;
          } else {
            setAppState({
              type: "REMOVE_FROM_CART",
              payload: { _id },
            });
          }
          return;
        }
      });
      if (found) return;
      console.log("in addToUsersCart");
      setAppState({
        type: "ADD_TO_CART",
        payload: {
          _id,
          price,
          name,
          seller,
          count,
          image: images[0],
          quantity,
        },
      });
      toast({
        title: "Added To cart ",
        // description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: error.message,
        // description: "We've created your account for you.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const removeFromCart = (_id) => {
    console.log("removeFromCart");
    setAppState({
      type: "REMOVE_FROM_CART",
      payload: { _id },
    });
  };

  return (
    <Box
      display={"flex"}
      alignItems="flex-start"
      flexDirection="column"
      justifyContent={"space-around"}
      gap={"5"}
    >
      <Box>
        <Text fontSize={"2xl"}> {name} </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap="1"
      >
        <Text mr="2" mb="1">
          Rating :{" "}
        </Text>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </Box>
      <Box>
        {/* TODO POPULATE THE SELLER ID !! */}
        <Text>Seller : {seller} </Text>
      </Box>
      <Box>
        <Text>Locality : {city} </Text>
      </Box>
      <Box>
        <Text> {description}</Text>
      </Box>
      <Box>
        <Box display="flex" justifyContent={"center"} alignItems="center">
          <Button
            onClick={() => {
              if (count === 0) return;
              else setcount((count) => count - 1);
            }}
            size={["xs", "xs", "sm", "sm"]}
            bgColor="teal.100"
            mr="1"
          >
            <GrSubtractCircle color="blue" size={20} />
          </Button>
          <Text fontSize="2xl" mx="2">
            {count}
          </Text>
          <Button
            onClick={() => {
              if (count >= quantity) return;
              else setcount((count) => count + 1);
            }}
            size={["xs", "xs", "sm", "sm"]}
            bgColor="teal.100"
          >
            <GrFormAdd size={20} />
          </Button>
        </Box>
      </Box>
      <Box>
        <Text>Quantity : {quantity} </Text>
        <Text> Subtotal : {price}</Text>
      </Box>
      <Box display="flex" gap="3">
        <Button onClick={() => addToUsersCart(_id)}>Add to cart</Button>
        <Button>WishList</Button>
        {/* <Button onClick={() => removeFromCart(_id)}>Remove From cart</Button> */}
      </Box>
    </Box>
  );
};

export default ProductDetails;
