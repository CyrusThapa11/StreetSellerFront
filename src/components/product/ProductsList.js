import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

import { products } from "../utils/Data";
import Axios from "../utils/Axios";
import FilterComponent from "./FilterComponent";
import { Divider } from "@chakra-ui/react";
import { GetContext } from "../../Context";
const ProductsList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);
  // const [AllProducts, setAllProducts] = useState(null);
  const toast = useToast();
  const { AppState, setAppState } = GetContext();

  const getAllProducts = async () => {
    try {
      console.log("getAllProducts ");
      console.log(
        "AppState.pagenumber in getAllProducts -->",
        AppState.pagenumber
      );
      const {
        data: { products },
      } = await Axios.get(
        `/product?limit=${AppState.limit}&pagenumber=${AppState.pagenumber}`
        // {
        //   headers: {
        //     authorization: `Bearer ${AppState.user.token}`,
        //   },
        // }
      );
      console.log("products ", products);
      setAppState({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      toast({
        title: `${error.response.data.message} `,
        description: `${error.response.data.stack} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "error",
      });
    }
  };

  useEffect(() => {
    getAllProducts();
    return () => {};
  }, [AppState.pagenumber, AppState.limit]);
  // AppState.products, AppState.pagenumber
  return (
    <>
      <Box
        bgColor={"teal.200"}
        h="full"
        mt="10"
        w="90%"
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
        rounded="xl"
        p="5"
      >
        <Box
          display="flex"
          rounded="xl"
          //   flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
          w="full"
          minH="70vh"
          //   bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          //   bgColor={"whiteAlpha.900"}
          justifyContent="space-around"
          flexWrap="wrap"
          gap="1"
        >
          <FilterComponent />
          <Divider borderWidth="3px" colorScheme={"red"} />
          <ProductItem />
          <ProductItem />
          {/* {products.map((product, index) => {
            if (index >= 4) return <></>;
            else
              return (
                <>
                  <ProductItem {...product} />
                </>
              );
          })} */}
          {AppState?.products?.map((product) => {
            return <ProductItem {...product} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default ProductsList;
