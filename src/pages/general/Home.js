import React from "react";
import Hero from "../../components/LandingPage/Hero";
import Trust from "../../components/LandingPage/Trust";
import Working from "../../components/LandingPage/Working";
import { Box } from "@chakra-ui/react";
import Testimonails from "./Testimonails";
import Footer from "./../../components/LandingPage/Footer";
import SampleProducts from "../../components/LandingPage/SampleProducts";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Working />
      <Trust />
      <Testimonails />
      <SampleProducts />
      <Footer />
    </Box>
  );
};

export default Home;
