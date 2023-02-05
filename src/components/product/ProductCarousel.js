import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export const ProductCarousel = ({ images }) => (
  <Carousel
    width={"30vw"}
    showStatus={false}
    renderIndicator={false}
    thumbWidth={60}
    showArrows={true}
  >
    {images.map((img) => {
      return (
        <div key={img}>
          <img alt="" src={img} style={{ width: "full", margin: "auto 1px" }} />
        </div>
      );
    })}
  </Carousel>
);
