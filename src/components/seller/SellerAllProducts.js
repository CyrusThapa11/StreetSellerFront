import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import ProductItem from "../product/ProductItem";
import { products } from "../utils/Data";
import Axios from "../utils/Axios";
import { GetContext } from "../../Context";
const SellerCreaterProduct = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);
  const [SellerProducts, setSellerProducts] = useState([]);

  const { AppState, setAppState } = GetContext();

  const getSellerProducts = async () => {
    console.log("getSellerProducts");
    const { data } = await Axios.get(`/product/seller/${AppState.user._id}`, {
      headers: {
        authorization: `Bearer ${AppState.user.token}`,
      },
    });
    console.log("data", data);
    setSellerProducts(data);
  };

  useEffect(() => {
    getSellerProducts();

    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <Box
        bgColor={"teal.200"}
        h="full"
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
          {products.map((product, index) => {
            if (index >= 2) return <></>;
            else return <ProductItem key={product._id} {...product} />;
          })}

          {/* SellerProducts */}

          {SellerProducts?.map((product) => {
            console.log("product", product);
            return <ProductItem key={product._id} {...product} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default SellerCreaterProduct;
