import React from "react";
import {
  Box,
  Button,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { RiStarSFill } from "react-icons/ri";
//

const SampleProducts = () => {
  return (
    <Box
      minH="90vh"
      //   bgColor={"#05CEA1"}
      display="flex"
      justifyContent={"space-evenly"}
      alignItems="center"
      flexWrap={"wrap"}
      px="28"
      mb="3"
      py="10"
    >
      <Box color="blue.700" my="5 ">
        <Text textAlign={"center"} fontSize={"4xl"} fontWeight="bold">
          Easy And Affordable. Pay Only For What You Use
        </Text>
        <Text textAlign={"center"} fontSize={"lg"}>
          Top 3 most popular products of StreetSeller
        </Text>
      </Box>
      <Box display="flex">
        <Box
          p="3"
          mx="5"
          rounded="lg"
          border="4px"
          boxShadow={"-7px 7px rgba(0,0,0,0.8) "}
        >
          <Image
            boxSize={"15vw"}
            rounded="md"
            src="https://qph.cf2.quoracdn.net/main-qimg-809fe77a9954065d2889c3708c28bf24.webp"
          />
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            my="3"
          >
            <Text> Painting </Text>
            <Text> seller - John Doe </Text>
            <Button w="90%">Buy Now</Button>
          </Box>
          <Box>
            <UnorderedList
              display="flex"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill /> <Text ml="1">Pune</Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1"> 150 </Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1">Free Delivery</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box
          p="3"
          mx="5"
          rounded="lg"
          border="4px"
          boxShadow={"-7px 7px rgba(0,0,0,0.8) "}
        >
          <Image
            boxSize={"15vw"}
            rounded="md"
            src="https://www.seriouseats.com/thmb/d2DYiLy-rNKmxrW1gchCOZcGIWY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg"
          />
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            my="3"
          >
            <Text>Burger Meal</Text>
            <Text> Seller - Rohan mishra </Text>
            <Button w="90%">Buy Now</Button>
          </Box>
          <Box>
            <UnorderedList
              display="flex"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill /> <Text ml="1">Noida</Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1">300</Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1">Free Delivery</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box
          p="3"
          mx="5"
          rounded="lg"
          border="4px"
          boxShadow={"-7px 7px rgba(0,0,0,0.8) "}
        >
          <Image
            boxSize={"15vw"}
            rounded="md"
            src="https://trichycakeshop.com/wp-content/uploads/2021/07/Rainbow-Cake.jpg"
          />
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            my="3"
          >
            <Text>Rainbow cake</Text>
            <Text>seller - Megha Gupta</Text>
            <Button w="90%">Buy Now</Button>
          </Box>
          <Box>
            <UnorderedList
              display="flex"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill /> <Text ml="1">Dehradun</Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1">200</Text>
              </ListItem>
              <ListItem
                listStyleType={"none"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiStarSFill />
                <Text ml="1"> Delivery upto 5km </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SampleProducts;
