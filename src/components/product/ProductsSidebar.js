/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import Axios from "../utils/Axios";
import { Divider } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Badge } from "@chakra-ui/react";
import { GetContext } from "../../Context";
// AiFillStar
// AiOutlineStar
const ProductsSidebar = () => {
  let activeStyle = {
    padding: "14px 22px",
    borderRadius: "6px",
    display: "block",
  };
  const [Category, setCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState([]);

  const { AppState, setAppState } = GetContext();
  const getCategory = async () => {
    const {
      data: { subcategories },
    } = await Axios.get(
      "/subcategory"
      // {
      //   headers: {
      //     authorization: `Bearer ${AppState.user.token}`,
      //   },
      // }
    );
    console.log("subcategories", subcategories);
    setCategory(subcategories);
  };
  const getFilteredCategory = async () => {
    const { data } = await Axios.get(
      `/product?subcategory=${SelectedCategory.join(",")}`
      // {
      //   headers: {
      //     authorization: `Bearer ${AppState.user.token}`,
      //   },
      // }
    );
    console.log("data getFilteredCategory ", data);
    // setCategory(subcategories);
    setAppState({ type: "SET_PRODUCTS", payload: data.products });
  };
  console.log("SelectedCategory", SelectedCategory);
  useEffect(() => {
    if (Category.length === 0 || !Category) getCategory();
    else {
      getFilteredCategory();
    }
    return () => {
      // cleanup
    };
  }, [SelectedCategory]);
  // console.log("SelectedCategory", SelectedCategory);
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      px={{ base: "2", md: "4", lg: "6" }}
      py={{ base: "2", md: "6", lg: "16" }}
      w="26vw"
      minH={"100vh"}
      // bgColor={"#D1F2EB"}
      gap="1"
      flexDirection="column"
      alignItems={"flex-start"}
      // justifyContent={"start"}
    >
      <Box>
        <Box
          my="2"
          display={"flex"}
          justifyContent="center"
          alignItems="center"
        >
          <Link mx="5" h="15vh" my="4" to="/">
            <Image src="/freshmart3.jpg" w="5vw" />
          </Link>
        </Box>

        <Box my="2">
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Admin dashboard
          </NavLink>
        </Box>

        <Box my="2">
          <NavLink
            to="/admin/all-sellers"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Sellers
          </NavLink>
        </Box>

        <Box my="2">
          <NavLink
            to="/admin/all-users"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Users
          </NavLink>
        </Box>

        <Box my="2">
          <NavLink
            to="/admin/all-orders"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Orders
          </NavLink>
        </Box>
        <Box my="2">
          <NavLink
            to="/admin/create-categories"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Create categories
          </NavLink>
        </Box>
        <Divider />
        <Box>
          <Text fontSize={"xl"} fontWeight="bold" style={activeStyle}>
            Most Products
          </Text>
          <Stack style={activeStyle} spacing={1} direction="column">
            <Box display="flex" my="2" justifyContent={"space-between"}>
              <Text> Noida </Text>
              <Badge variant="subtle" colorScheme="green">
                300
              </Badge>
            </Box>
            <Box display="flex" my="2" justifyContent={"space-between"}>
              <Text>Dehradun </Text>
              <Badge variant="subtle" colorScheme="green">
                250
              </Badge>
            </Box>
            <Box display="flex" my="2" justifyContent={"space-between"}>
              <Text> Chandigarh </Text>
              <Badge variant="subtle" colorScheme="green">
                200
              </Badge>
            </Box>
            <Box display="flex" my="2" justifyContent={"space-between"}>
              <Text> Pune </Text>
              <Badge variant="subtle" colorScheme="green">
                170
              </Badge>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Text fontSize={"xl"} fontWeight="bold" style={activeStyle}>
            Sub-Category
          </Text>
          <Stack style={activeStyle} spacing={1} direction="column">
            {Category?.map((category) => {
              return (
                <Checkbox
                  key={category.subcategory_name}
                  onChange={(e) => {
                    let f = 0;
                    SelectedCategory.forEach((el) => {
                      if (el === e.target.value) f = 1;
                    });

                    let updated_cat = [];

                    if (f === 1) {
                      updated_cat = SelectedCategory.filter(
                        (el) => el !== e.target.value
                      );
                      setSelectedCategory(updated_cat);
                    } else {
                      setSelectedCategory([
                        ...SelectedCategory,
                        e.target.value,
                      ]);
                    }
                  }}
                  value={category.subcategory_name}
                  spacing={"2"}
                  colorScheme="green"
                >
                  {category.subcategory_name}
                </Checkbox>
              );
            })}
          </Stack>
        </Box>
        <Divider />
        <Box>
          <Text fontSize={"xl"} fontWeight="bold" style={activeStyle}>
            Filter by stars
          </Text>
          <Stack style={activeStyle} spacing={1} direction="column">
            <Box>
              <Checkbox spacing={"2"} display="flex" colorScheme="green">
                <Box as="span" my="1" display="flex">
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                </Box>
              </Checkbox>
              <Checkbox spacing={"2"} display="flex" colorScheme="green">
                <Box as="span" my="1" display="flex">
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiOutlineStar />
                </Box>
              </Checkbox>
              <Checkbox spacing={"2"} display="flex" colorScheme="green">
                <Box as="span" my="1" display="flex">
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Box>
              </Checkbox>
              <Checkbox spacing={"2"} display="flex" colorScheme="green">
                <Box as="span" my="1" display="flex">
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Box>
              </Checkbox>
              <Checkbox spacing={"2"} display="flex" colorScheme="green">
                <Box as="span" my="1" display="flex">
                  <AiFillStar style={{ color: "#f5b44c" }} />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Box>
              </Checkbox>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsSidebar;
