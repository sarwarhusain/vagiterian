import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import ShopTab from "../Shop/ShopTab/ShopTab";
const ProductsList = () => {
  const limit = 8;
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  const allProducts = menu;
  const vagitable = menu
    .filter((p) => p.category === "vegetables")
    .slice(0, limit);
  const fruits = menu
    .filter((p) => p.category === "fruits")
    .slice(onabort, limit);
  const nuts = menu.filter((p) => p.category === "nuts").slice(0, limit);
  return (
    <>
      <div className="pt-10">
        <div className="  items-center justify-center gap-10 ">
          <h2 className="font-semibold text-3xl text-green-600">
            Our Organic Products
          </h2>
          <Tabs
            className={"text-center"}
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>All Products</Tab>
              <Tab>Vegetables</Tab>
              <Tab>Fruits</Tab>
              <Tab>Nuts</Tab>
            </TabList>
            <TabPanel>
              <ShopTab products={allProducts}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab products={vagitable}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab products={fruits}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab products={nuts}></ShopTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
