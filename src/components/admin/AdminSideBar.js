import {
  Box,
  Image,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminSideBar = () => {
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
      // bgColor={"#D1F2EB"}
      gap="1"
      flexDirection="column"
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

        <Box my="7">
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Admin dashboard
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/admin/all-sellers"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Sellers
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/admin/all-users"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Users
          </NavLink>
        </Box>

        <Box my="7">
          <NavLink
            to="/admin/all-orders"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            All Orders
          </NavLink>
        </Box>
        <Box my="7">
          <NavLink
            to="/admin/create-categories"
            style={({ isActive }) =>
              isActive ? { ...activeStyle, background: "#6DFCE3" } : activeStyle
            }
          >
            Create categories
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSideBar;
