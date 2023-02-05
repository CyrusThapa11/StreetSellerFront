import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { products } from "../utils/Data";
import { GrFormAdd, GrSubtractCircle } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { GetContext } from "../../Context";
import UserCartItem from "./UserCartItem";
import Axios from "../utils/Axios";
// CiCircleRemove

const UserCart = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);
  const toast = useToast();
  const { AppState, setAppState } = GetContext();
  console.log("AppState.cart", AppState.cart);
  const PlaceOrder = async () => {
    try {
      console.log("PlaceOrder --> ");
      let totalPrice = 0,
        cartQuantity = 0;

      let seller = "";
      AppState.cart.forEach((element) => {
        totalPrice += element.price * element.count;
        cartQuantity += element.count;
        seller = element.seller;
      });
      console.log("seller", seller);
      console.log(" totalPrice ", totalPrice);
      let OrderItems = AppState.cart.map((e) => {
        return {
          productID: e._id,
          count: e.count,
          price: e.price,
          image: e.image,
        };
      });
      console.log("OrderItems", OrderItems);
      const { data } = await Axios.post(
        "/order/",
        {
          owner: AppState.user._id,
          OrderItems,
          totalPrice,
          cartQuantity,
          seller,
          // TODO UPDATE CARTITEMS ONLY TO P'IDS
        },
        {
          headers: {
            authorization: `Bearer ${AppState.user.token}`,
          },
        }
      );
      toast({
        title: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: error.response.data.message,
        description: error.response.data.stack,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Box bgColor={"teal.200"} display="flex" rounded="xl" p="8">
        <Box
          display="flex"
          rounded="xl"
          flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
          w="full"
          bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          justifyContent="space-around"
          p="2"
        >
          <Box
            py={{ base: "2", sm: "5" }}
            w={{ base: "full", md: "35vw", lg: "37vw" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            {AppState.cart.map((product, i) => {
              // if (i >= 3) return "";
              // else
              return <UserCartItem product={product} />;
            })}
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              px="10"
              my="2"
            >
              <Text>TOTAL</Text>
              <Text>1002</Text>
              <Button onClick={() => PlaceOrder()} bgColor="teal.200">
                place Order
              </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Image
              mx="auto"
              my="auto"
              src="/payment.png"
              rounded="lg"
              bgColor="transparent"
              w={{ base: "78%", md: "40vw", lg: "30vw" }}
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserCart;
