import React, { useEffect, useState } from "react";
import { Box, HStack, Spinner, useColorMode } from "@chakra-ui/react";
import ProdutImages from "./ProdutImages";
import ProductDetails from "../../components/product/ProductDetails";

import { useParams } from "react-router-dom";
import { products } from "../../components/utils/Data";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Axios from "../../components/utils/Axios";
import { GetContext } from "../../Context";
const SingleProduct = () => {
  const params = useParams();
  console.log("params - ", params.id);
  const [Product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { AppState, setAppState } = GetContext();
  let currenproduct = products.filter((p) => p.id === params.id);
  console.log("currenproduct --> ", currenproduct);

  const getSinglProduct = async () => {
    const { data } = await Axios.get(
      `/product/${params.id}`
      //  {
      //   headers: {
      //     authorization: `Bearer ${AppState.user.token}`,
      //   },
      // }
    );
    setProduct(data);
    setLoading(false);
  };
  // useEffect
  useEffect(() => {
    setLoading(true);
    getSinglProduct();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Box minH="100vh" bgColor={"teal.300"} p="10">
      <Box
        bgColor={colorMode === "light" ? "gray.200" : "#2F4858"}
        rounded="xl"
        p="10"
      >
        <Box display="flex" justifyContent={"space-around"}>
          {/* <ProdutImages images={currenproduct[0]?.images} /> */}
          {Loading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              <ProdutImages images={Product?.images} />
              <Box
                minH={"100vh"}
                m="0"
                w="50vw"
                px="10"
                // display="flex"
                // justifyContent="space-around"
                // alignItems={"center"}
              >
                <ProductDetails {...Product} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
