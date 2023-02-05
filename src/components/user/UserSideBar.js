import { Box, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserSidebar = () => {
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
            Logo
          </Link>
        </Box>

        <Box my="7">
          <NavLink
            to="/user/dashboard"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            User dashboard
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/user/my-orders"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Orders
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/user/my-wishlist"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Wishlist
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            aria-disabled
            to="/user/cart"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Cart
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default UserSidebar;
