import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AllOrders from "./Orders/AllOrders";
import Cancelled from "./Orders/Cancelled";
import Completed from "./Orders/Completed";
const Orders = () => {
  return (
    <>
      {/* <Tabs variant="soft-rounded">
        <TabList>
          <Tab>All Orders</Tab>
          <Tab>Completed</Tab>
          <Tab>Cancelled</Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>
            {" "}
            {" "}
          </TabPanel>
          <TabPanel>
            <Completed />    
          </TabPanel>
          <TabPanel>
            <Cancelled />
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <AllOrders />
    </>
  );
};

export default Orders;
