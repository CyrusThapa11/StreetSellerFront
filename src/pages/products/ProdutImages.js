import { Box } from "@chakra-ui/react";
import React from "react";
import { ProductCarousel } from "../../components/product/ProductCarousel";

const ProdutImages = ({ images }) => {
  return (
    <>
      {images === null || images === undefined ? (
        <></>
      ) : (
        <>
          <div p="4">
            <ProductCarousel images={images} />
          </div>
        </>
      )}
    </>
  );
};

export default ProdutImages;
