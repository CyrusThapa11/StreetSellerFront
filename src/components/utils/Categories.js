import { Box, ListItem, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Axios from "./Axios";
import { useToast } from "@chakra-ui/react";

const Categories = ({ category_name, type, subcategory_name }) => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const AddCategoryOrSubCategory = async () => {
    console.log("AddCategoryOrSubCategory");
  };

  const deleteCategoryOrSubCategory = async (
    subcategory_name,
    category_name
  ) => {
    console.log(
      "subcategory_name,category_name",
      subcategory_name,
      category_name
    );
    try {
      console.log("deleteCategoryOrSubCategory");
      console.log("type", type);
      let data;
      if (type === "category") {
        data = await Axios.delete(`/category/${category_name}`);
      } else {
        data = await Axios.delete(`/subcategory/${subcategory_name}`);
      }
      console.log("data--> ", data);
      toast({
        title: data.message || "Deleted Sucessfully",
        // description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: error.message || "Oopss some error occured",
        // description: "We've created your account for you.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <ListItem
      display={"inline-block"}
      bg="teal.200"
      mx="1"
      py="2"
      my="3"
      px="2"
      rounded="lg"
      // minW="5vw"
    >
      <Text
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        color="#2D3748"
        minW="5vw"
      >
        {type === "category" && <>{category_name}</>}
        {type === "subcategory" && <>{subcategory_name}</>}

        <MdDeleteForever
          onClick={() =>
            deleteCategoryOrSubCategory(subcategory_name, category_name)
          }
          size="20"
          cursor={"pointer"}
          mx="1"
          display={"inline"}
        />
      </Text>
    </ListItem>
  );
};

export default Categories;
