import {
  ListItem,
  Box,
  ListIcon,
  OrderedList,
  StackDivider,
  useColorMode,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SellerOrders from "../seller/SellerOrders";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Categories from "../utils/Categories";
import Axios from "../utils/Axios";
import { useToast } from "@chakra-ui/react";
import { GetContext } from "../../Context";

const AdminSlaveCompoenent = () => {
  //

  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [Categoryy, setCategory] = useState([]);
  const [SubCategoryy, setSubCategory] = useState([]);
  const [newCategory, setNewCategory] = useState(null);
  const [newSubCategory, setNewSubCategory] = useState(null);
  const { AppState, setAppState } = GetContext();

  console.log("AppState", AppState.user);

  const getCategory = async () => {
    try {
      
      //

      console.log("getCategory");

      //

      var {
        data: { categories },
      } = await Axios.get("/category", {
        headers: {
          authorization: `Bearer ${AppState.user.token}`,
        },
      });
      setCategory(categories);
      console.log(" data of  category ", categories);
      var {
        data: { subcategories },
      } = await Axios.get("/subcategory", {
        headers: {
          authorization: `Bearer ${AppState.user.token}`,
        },
      });
      setSubCategory(subcategories);
      console.log(" data of  subcategories ", subcategories);
    } catch (error) {
      console.log("error", error);
      toast({
        title: error.response.data.message,
        description: error.response.data.stack.substring(0, 250),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  useEffect(() => {
    //
    getCategory();
    return () => {};
  }, []);

  const AddCategory = async (isCategory) => {
    console.log("AddCategory --> ", isCategory);

    try {
      if (isCategory) {
        console.log("newSubCategory", newCategory);
        const { data } = await Axios.post(
          "/category/",
          {
            category_name: newCategory,
          },
          {
            headers: {
              authorization: `Bearer ${AppState.user.token}`,
            },
          }
        );
        console.log("data in newCategory ", data);
        toast({
          title: data.message || "Created Sucessfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        console.log("newSubCategory", newSubCategory);
        const { data } = await Axios.post(
          "/subcategory/",
          {
            subcategory_name: newSubCategory,
          },
          {
            headers: {
              authorization: `Bearer ${AppState.user.token}`,
            },
          }
        );
        console.log("data in newSubCategory ", data);
        toast({
          title: data.message || "Created Sucessfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      toast({
        title: error.response.data.message,
        description: error.response.data.stack.substring(0, 250),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  // fetch all
  return (
    <>
      {/* <h2>AdminSlaveCopmonent !</h2> */}
      <Box
        bgColor={"teal.200"}
        h="full"
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
        rounded="xl"
        p="10"
      >
        <Box
          h="full"
          display="flex"
          rounded="xl"
          w="full"
          bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
          // bgColor=""
          justifyContent="center"
          alignItems={"center"}
          p="3"
        >
          {/* <SellerOrders /> */}
          <Stack
            direction="row"
            minH={"40vh"}
            // w="80%"
            spacing={["2", "5", "10"]}
            divider={<StackDivider borderColor="gray.200" />}
          >
            {" "}
            <Box py={2} px={2}>
              <FormControl id="email">
                <FormLabel>ADD Categories</FormLabel>
                <Box display={"flex"} gap="2">
                  <Input
                    onChange={(e) => setNewCategory(e.target.value)}
                    name="category"
                    type="text"
                  />
                  <Button onClick={() => AddCategory(1)}>ADD</Button>
                </Box>
              </FormControl>
              <Box
                maxH={"40vh"}
                my="4"
                py="3"
                w={["30vw", "35vw", "32vw", "23vw"]}
                rounded="md"
                border={"2px"}
                overflowY="scroll"
                overflowX={"hidden"}
              >
                <UnorderedList>
                  <Categories />
                  {Categoryy.map((category) => {
                    return (
                      <Categories
                        key={category.category_name}
                        type="category"
                        {...category}
                      />
                    );
                  })}
                </UnorderedList>
              </Box>
            </Box>
            <Box py={2} px={2}>
              <FormControl id="email">
                <FormLabel>ADD Sub Categories</FormLabel>
                <Box display={"flex"} gap="2">
                  <Input
                    onChange={(e) => setNewSubCategory(e.target.value)}
                    name="subcategory"
                    type="text"
                  />

                  <Button onClick={() => AddCategory(0)}>ADD</Button>
                </Box>
              </FormControl>
              <Box
                maxH={"40vh"}
                my="4"
                py="3"
                w={["10vw", "35vw", "32vw", "23vw"]}
                rounded="md"
                border={"2px"}
                overflowY="scroll"
                overflowX={"hidden"}
              >
                <UnorderedList>
                  <Categories />
                  {SubCategoryy.map((subcategory) => {
                    return (
                      <Categories
                        key={subcategory.subcategory_name}
                        type="subcategory"
                        {...subcategory}
                      />
                    );
                  })}
                </UnorderedList>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default AdminSlaveCompoenent;
