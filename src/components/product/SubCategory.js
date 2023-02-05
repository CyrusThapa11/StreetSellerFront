import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GetContext } from "../../Context";
import Axios from "../utils/Axios";
import { useToast } from "@chakra-ui/react";
const SubCategoryComponent = () => {
  const [SubCategory, setSubCategory] = useState([]);
  const [SelectedSubCategory, setSelectedSubCategory] = useState([]);
  const { AppState, setAppState } = GetContext();
  const toast = useToast();
  // const { AppState, setAppState } = GetContext();
  useEffect(() => {
    try {
      const getData = async () => {
        let data1 = await Axios.get("/subcategory", {
          headers: {
            authorization: `Bearer ${AppState.user.token}`,
          },
        });
        setSubCategory(data1.data.subcategories);
      };
      // const getFilteredData = async () => {
      //   let data1 = await Axios.get("/subcategory");
      //   setSubCategory(data1.data.subcategories);
      // };
      if (SelectedSubCategory === "") getData();
      else {
      }
      return () => {
        // cleanup
      };
    } catch (error) {
      toast({
        title: `${error.response.data.message} `,
        description: `${error.response.data.stack} `,
        variant: "subtle",
        isClosable: true,
        duration: 5000,
        position: "top-right",
        status: "error",
      });
    }
  }, [SelectedSubCategory]);
  console.log("SelectedSubCategory", SelectedSubCategory);
  return (
    <>
      <Select
        // bg="gray.200"
        bgColor={"teal.400"}
        placeholder="Category"
        w="10vw"
        value={SelectedSubCategory}
        onChange={(e) => {
          e.preventDefault();
          // setSelectedSubCategory([
          //   ...SelectedSubCategory,
          //   e.target.value,
          // ]);
          console.log("e.target.value", e.target.value);
        }}
      >
        {SubCategory?.map((subat) => {
          return (
            <option
              key={subat.subcategory_name}
              value={`${subat.subcategory_name}`}
            >
              {subat.subcategory_name}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default SubCategoryComponent;
