import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import { GrPrevious, GrNext } from "react-icons/gr";
import { GetContext } from "../../Context";
// GrNext , GrPrevious

const FilterComponent = () => {
  const [SubCategory, setSubCategory] = useState([]);
  const [SelectedSubCategory, setSelectedSubCategory] = useState(null);
  const [PageNumber, setPageNumber] = useState(0);
  const [ProductsPerPage, setProductsPerPage] = useState(12);
  console.log("SelectedSubCategory", SelectedSubCategory);

  const { AppState, setAppState } = GetContext();
  console.log("AppState-->", AppState.limit);
  useEffect(() => {
    const getData = async () => {
      let data1 = await Axios.get(
        "/category"
        //  {
        //   headers: {
        //     authorization: `Bearer ${AppState.user.token}`,
        //   },
        // }
      );
      console.log("data1", data1);
      setSubCategory(data1.data.categories);
    };
    const getDataSelecteCategory = async () => {
      let data1 = await Axios.get(
        `/product/?category=${SelectedSubCategory}&limit=${AppState.limit}&pagenumber=${AppState.pagenumber}`
        // {
        //   headers: {
        //     authorization: `Bearer ${AppState.user.token}`,
        //   },
        // }
      );
      console.log("getDataSelecteCategory--> ", data1.data);
      // setAppState({...AppState,})
      setAppState({ type: "SET_PRODUCTS", payload: data1.data.products });
    };
    if (SubCategory.length === 0) getData();
    if (SelectedSubCategory !== null) {
      getDataSelecteCategory();
    }
    return () => {
      // cleanup
    };
  }, [SelectedSubCategory]);

  return (
    <>
      <Box w="full">
        <Box
          w="full"
          display="flex"
          justifyContent={"space-around"}
          alignItems="center"
        >
          <InputGroup size="md" width={"16vw"} my="2">
            {/* <InputLeftAddon children="https://" /> */}
            <Input
              colorScheme={"whatsapp"}
              shadow={"md"}
              color="darkslategray"
              placeholder="mysite"
              bgColor={"gray.200"}
            />
            <InputRightAddon
              bgColor={"teal.400"}
              shadow={"md"}
              cursor={"pointer"}
              children="Find"
            />
          </InputGroup>
          {/* <Box
      bgColor={"gray.200"}
      display="flex"
      justifyContent={"space-around"}
      alignItems="center"
      h="6vh"
      px="4"
    > */}
          <Box>
            <Select
              // bg="gray.200"
              bgColor={"teal.400"}
              placeholder="Category"
              w="10vw"
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              // onChange={(e) =>{}}
            >
              {SubCategory?.map((subat) => {
                return (
                  <option
                    key={subat.category_name}
                    value={`${subat.category_name}`}
                  >
                    {subat.category_name}
                  </option>
                );
              })}
            </Select>
          </Box>
          <Box>
            <Select
              // bg="gray.200"
              // w="10vw"
              bgColor={"teal.400"}
              onChange={(e) => {
                // console.log("(e) => setProductsPerPage(e.target.value)");
                setAppState({ type: "UPDATE_LIMIT", payload: e.target.value });
              }}
            >
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </Select>
          </Box>
          <Box>
            <Box
              display="flex"
              bgColor={"teal.400"}
              rounded="lg"
              gap="2"
              justifyContent={"center"}
              alignItems="center"
              p="2"
            >
              <Box cursor={"pointer"} as="span">
                <GrPrevious
                  onClick={() => {
                    if (AppState.pagenumber >= 1)
                      setAppState({ type: "UPDATE_PAGE_NUMBER", payload: -1 });
                  }}
                />
              </Box>

              <Button style={{ padding: "1px" }}>
                {AppState.pagenumber + 1}
              </Button>
              <Button style={{ padding: "1px" }}>
                {AppState.pagenumber + 2}
              </Button>
              <Button style={{ padding: "1px" }}>
                {AppState.pagenumber + 3}{" "}
              </Button>
              <Box cursor={"pointer"} as="span">
                <GrNext
                  onClick={() => {
                    // some condition
                    // setPageNumber((number) => number + 1);
                    console.log("AppState.products ", AppState.products);
                    console.log("AppState.limit ", AppState.limit);
                    if (AppState.products.length >= AppState.limit)
                      setAppState({ type: "UPDATE_PAGE_NUMBER", payload: +1 });
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Menu w="7vw">
            <MenuButton
              as={Button}
              shadow="lg"
              bgColor={"teal.400"}
              //  rightIcon={"X"}
              w="7vw"
            >
              Sort By
            </MenuButton>
            <MenuList w="7vw">
              <MenuItem> Low to High</MenuItem>
              <MenuItem> Most Bought</MenuItem>
              <MenuItem> Least Bought </MenuItem>
              <MenuItem> Recently Added</MenuItem>
              <MenuItem> Subscribed</MenuItem>
            </MenuList>
          </Menu>
          {/* </Box> */}
        </Box>
        <Box px="5" my="5">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut nihil
          iste animi ullam officiis est mollitia magni voluptatum, sapiente sed?
          Unde beatae quasi molestiae temporibus omnis quas mollitia repudiandae
          ipsam aperiam hic nemo voluptate quis sequi cupiditate nulla, ea
          minus! Vero unde quam, ab sed accusamus ex perferendis. Quam quo error
          a. Doloremque nesciunt error molestias quia consequatur saepe odio hic
          nostrum, dolorem ducimus tempora harum iste quo id magni architecto?
          Commodi dignissimos autem nihil doloribus voluptatum ad quae, dolore
          eveniet eius velit, amet consectetur obcaecati excepturi iure esse
          quos, dolores culpa ipsam! Ad officiis vitae hic repudiandae nemo? */}
        </Box>
      </Box>
    </>
  );
};

export default FilterComponent;
