import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrFormAdd, GrSubtractCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
//
// GrFormAdd
const data = {
  isNew: true,
  imageURL:
    "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const Rating = ({ rating, numReviews }) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="1" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
};

const ProductItem = ({ price, seller, name, images, id, _id }) => {
  // console.log("name", name);
  return (
    <Box
      cursor={"pointer"}
      transition="all .25s ease"
      _hover={{ transform: "scale(1.1)", filter: "brightness(120%)" }}
      bg={useColorModeValue("white", "gray.800")}
      w={["60vw", "35vw", "30vw", "15vw"]}
      borderWidth="1px"
      rounded="lg"
      h="auto"
      // shadow="lg"
      // shadow="2xl"
      // boxShadow={"2xl"}
      // position="relative"
      my="3"
    >
      {/* {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )} */}

      <Image
        src={
          (images && images[0]) ||
          "https://img.freepik.com/free-photo/semiya-payasam-shewai-sewai-khir-seviyan-kheer-is-indian-sweet-made-with-vermicelli-milk-ghee-sugar-jaggery-raisins-nuts_466689-75491.jpg"
        }
        alt={`Picture of ${name}`}
        roundedTop="lg"
        p="3"
        // filter={"gray"}
        style={{
          WebkitFilter: "grayscale(0.55)",
          WebkitTransition: "all .3s ease-in-out",
        }}
        _hover={{ WebkitFilter: "grayscale(0) !important" }}
        color={"red.400"}
        pb="0"
        //   objectFit="cover"
        //   h="30vh"
        w="full"
        //   boxSize="150px"
      />

      <Box p="3">
        {/* <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box> */}
        <Box>
          <Link to={`/product/${_id}`}>View</Link>
        </Box>
        <Box
          display="flex"
          my="2"
          w="full"
          justifyContent="space-between"
          alignContent="center"
        >
          <Text
            fontSize={["sm", "lg", "2xl"]}
            fontWeight="semibold"
            lineHeight="tight"
            isTruncated
          >
            {name || "Product - 1"}
          </Text>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <Box display={"flex"} cursor="pointer">
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Box>
          </Tooltip>
        </Box>

        <Box
          w="full"
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Button size={["xs", "xs", "sm", "sm"]} bgColor="teal.100" mr="1">
              <GrSubtractCircle color="blue" size={20} />
            </Button>
            <Text fontSize="2xl" mx="2">
              0
            </Text>
            <Button size={["xs", "xs", "sm", "sm"]} bgColor="teal.100">
              <GrFormAdd size={20} />
            </Button>
          </Box>
          <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
            <Box
              as="span"
              color={"gray.600"}
              fontSize={["sm", "md", "lg", "xl"]}
            >
              £
            </Box>
            {price?.toFixed(2) || "69"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
