import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { GetContext } from "../../Context";
import Axios from "../utils/Axios";
import { Badge } from "@chakra-ui/react";
import { RxCrossCircled } from "react-icons/rx";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

const SellerCreaterProduct = () => {
  const { AppState, setAppState } = GetContext();
  const [Product, setProduct] = useState(null);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);

  // const [SelectedCategory, setSelectedCategory] = useState([]);
  const [SelectedSubCategory, setSelectedSubCategory] = useState([]);
  const [PreviewImages, setPreviewImages] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const [Loading, setLoading] = useState(0);

  console.log("colorMode", colorMode);
  const getCategory = async () => {
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
  };
  useEffect(() => {
    // effect

    getCategory();

    return () => {
      // cleanup
    };
  }, []);

  const HandleFileUpload = (e) => {
    console.log("HandleFileUpload", e.target.files);
    let selectedFiles = e.target.files;
    let selectedFilesArray = Array.from(selectedFiles);
    let PreviewImage = selectedFilesArray.map((file) => {
      return { url: URL.createObjectURL(file), file: file };
    });
    setPreviewImages(PreviewImage);
  };
  const upload = async () => {
    try {
      let uploadedImages = [];
      // console.log("CreateProduct", CreateProduct);
      let Formdata = new FormData();
      let newfile = PreviewImages.map((image) => {
        Formdata.append("file", image.file);
        return image.file;
      });

      for (let i = 0; i < newfile.length; i++) {
        console.log("newfile", newfile[i]);
        Formdata.append("file", newfile[i]);
        Formdata.append("upload_preset", "super_market");
        Formdata.append("cloud_name", "vinsmokecyrus");
        Formdata.append("api_key", "662644258186613");
        Formdata.append("folder", "ecomm");

        const { data } = await axios.post(
          "https://api.cloudinary.com/v1_1/vinsmokecyrus/image/upload",
          Formdata,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              authorization: `Bearer ${AppState.user.token}`,
            },
          }
        );
        uploadedImages.push(data.secure_url);
      }

      console.log("uploadedImages", uploadedImages);
      return uploadedImages;
    } catch (error) {
      console.log("error - ", error);
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
  };
  const CreateProduct = async () => {
    setLoading(true);
    try {
      let uploadedImages = await upload();
      // console.log("uploadedImages", uploadedImages);
      // TODO UPLOAD ACTUAL FILES
      console.log("Product--> ", Product);
      console.log("SubCategory", SelectedSubCategory);
      let newProduct = {
        ...Product,
        subcategory: SelectedSubCategory,
        images: uploadedImages,
        // TODO MAKE THIS DYNAMIC TO THE PERSON WHO IS LOGGED IN
        seller: AppState.user._id,
      };
      const { data } = await Axios.post(
        "/product/",
        { ...newProduct },
        {
          headers: {
            authorization: `Bearer ${AppState.user.token}`,
          },
        }
      );
      console.log("data int CreateProduct ", data);
      toast({
        title: `${data.message} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "success",
      });
    } catch (error) {
      console.log("error - ", error);
      toast({
        title: `${error.response.data.message} `,
        variant: "subtle",
        isClosable: true,
        position: "top-right",
        status: "error",
      });
    }
    setLoading(false);
    //
    // setProduct()
  };

  return (
    <Box
      bgColor={"teal.200"}
      minH="80vh"
      display="flex"
      rounded="xl"
      p="10"
      justifyContent="space-around"
    >
      <Box
        display="flex"
        rounded="xl"
        flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
        w="full"
        // bgColor={``}
        bgColor={` ${colorMode === "light" ? "whiteAlpha.900" : "#2F4858"} `}
        justifyContent="space-around"
        p="3"
      >
        <Box
          py={{ base: "4", sm: "6" }}
          px={{ base: "5", sm: "6" }}
          w={{ base: "full", md: "35vw", lg: "27vw" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="3">
            <Stack spacing="2">
              <FormControl>
                <FormLabel htmlFor="name">Product Name</FormLabel>
                <Input
                  onChange={(e) =>
                    setProduct({ ...Product, [e.target.name]: e.target.value })
                  }
                  name="name"
                  outlineColor={"teal.500"}
                  id="name"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="category">Category</FormLabel>
                {/* <Input
                  onChange={(e) =>
                    setProduct({...Product, [e.target.name]: e.target.value })
                  }
                  name="category"
                  outlineColor={"teal.500"}
                  id="category"
                  type="category"
                /> */}

                <Select
                  name="category"
                  onChange={(e) =>
                    setProduct({ ...Product, category: e.target.value })
                  }
                  placeholder="Select Category"
                >
                  {Category.map((cat) => {
                    return (
                      <option
                        key={cat.category_name}
                        value={`${cat.category_name}`}
                      >
                        {cat.category_name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subcategory">Subcategory</FormLabel>
                {/* <Input
                  onChange={(e) =>
                    setProduct({...Product, [e.target.name]: e.target.value })
                  }
                  name="subcategory"
                  outlineColor={"teal.500"}
                  id="subcategory"
                  type="text"
                /> */}
                <Select
                  onChange={(e) => {
                    console.log("e.target.value--> ", e.target.value);
                    let ok = 1;
                    SelectedSubCategory.forEach((element) => {
                      if (element === e.target.value) ok = 0;
                    });
                    if (ok === 0) return;
                    //
                    setSelectedSubCategory([
                      ...SelectedSubCategory,
                      e.target.value,
                    ]);
                  }}
                  placeholder="Select Category"
                >
                  {SubCategory.map((cat) => {
                    return (
                      <option
                        key={cat.subcategory_name}
                        value={`${cat.subcategory_name}`}
                      >
                        {cat.subcategory_name}
                      </option>
                    );
                  })}
                </Select>

                <Box my="2">
                  {SelectedSubCategory.map((subcat) => {
                    return (
                      <Badge
                        key={subcat}
                        mx="1"
                        my="1"
                        variant="subtle"
                        px="1"
                        py="1"
                        colorScheme="green"
                      >
                        <Box
                          w="full"
                          display={"flex"}
                          alignItems="center"
                          fontWeight={"bold"}
                          justifyContent={"center"}
                        >
                          <Text mx="2">{subcat}</Text>
                          <RxCrossCircled
                            onClick={() => {
                              //TODO
                              let newsubcat = SelectedSubCategory.filter(
                                (cat) => cat !== subcat
                              );
                              setSelectedSubCategory(newsubcat);
                            }}
                            size={15}
                            cursor={"pointer"}
                          />
                        </Box>
                      </Badge>
                    );
                  })}
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="price">quantity</FormLabel>
                <Input
                  onChange={(e) =>
                    setProduct({ ...Product, [e.target.name]: e.target.value })
                  }
                  name="quantity"
                  outlineColor={"teal.500"}
                  id="price"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="price">Price per unit/quantity</FormLabel>
                <Input
                  onChange={(e) =>
                    setProduct({ ...Product, [e.target.name]: e.target.value })
                  }
                  name="price"
                  outlineColor={"teal.500"}
                  id="price"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="price">Price per unit/quantity</FormLabel>
                <Input
                  onChange={(e) =>
                    setProduct({ ...Product, [e.target.name]: e.target.value })
                  }
                  name="description"
                  outlineColor={"teal.500"}
                  id="description"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="images">Images</FormLabel>
                <Input
                  outlineColor={"teal.500"}
                  id="image"
                  type="file"
                  onChange={HandleFileUpload}
                  multiple={true}
                />
              </FormControl>
              <Box display={"flex"} flexWrap="wrap" m="2">
                {PreviewImages.map((image) => {
                  return (
                    <Box key={image.url} position={"relative"}>
                      <Image
                        m="1"
                        borderRadius="10px"
                        boxSize="100px"
                        src={`${image.url}`}
                        alt="Dan Abramov"
                        shadow={"lg"}
                      />

                      <Box
                        position={"absolute"}
                        cursor="pointer"
                        top="2"
                        right={"2"}
                        onClick={() => {
                          // remove this
                          let newImages = PreviewImages.filter((element) => {
                            return element !== image;
                          });
                          setPreviewImages(newImages);
                        }}
                      >
                        <RxCrossCircled />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Stack>

            {/* <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="teal" size="sm">
                Forgot password?
              </Button>
            </HStack> */}
            <Stack spacing="6">
              <Button
                _hover={{
                  background: "teal.500",
                }}
                outlineColor={"teal.500"}
                variant="outline"
                onClick={() => CreateProduct()}
              >
                {Loading ? <Spinner /> : "Create Product"}
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box display="flex" justifyContent={"center"} alignItems="center">
          <Image
            mx="auto"
            my="auto"
            src="/newproduct2.png"
            rounded="lg"
            bgColor="transparent"
            w={{ base: "78%", md: "40vw", lg: "30vw" }}
            alt="Dan Abramov"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SellerCreaterProduct;
