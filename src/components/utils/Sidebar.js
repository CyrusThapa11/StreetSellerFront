import {
  Box,
  Image,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  let activeStyle = {
    padding: "14px 22px",
    borderRadius: "6px",
    display: "block",
  };
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      px={{ base: "2", md: "4", lg: "10" }}
      py={{ base: "2", md: "6", lg: "16" }}
      w="22vw"
      minH={"100vh"}
      // bgColor={"teal.200"}
      gap="1"
      flexDirection="column"
      // justifyContent={"start"}
    >
      <Box>
        <Box my="12">
          <Link mx="5" h="15vh" my="4" to="/">
            <Image src="/freshmart.png" />
          </Link>
        </Box>

        <Box my="7">
          <NavLink
            to="/seller/dashboard"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            seller dashboard
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/products/create"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            products create
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/seller-products"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            my products
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/seller-orders"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            my orders
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
