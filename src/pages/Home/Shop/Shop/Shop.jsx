import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopTab from "../ShopTab/ShopTab";
import useMenu from "../../../../hooks/useMenu";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../../../images/bg/annie-spratt-m1t-RJ1iCIU-unsplash.jpg";
import { useParams } from "react-router";
const Shop = (showCover = true) => {
  //main khela router uniqe id diye product ke call kora
  const categories = ["vegetables", "fruits", "nuts"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  //end
  const limit = 8;
  const [menu] = useMenu();

  // Filter products
  const vagetable = menu.filter((p) => p.category === "vegetables");
  const fruits = menu.filter((p) => p.category === "fruits");
  const nuts = menu.filter((p) => p.category === "nuts");

  // Helper to slice products if limit is given
  const slicesProducts = (arr) => (limit ? arr.slice(0, limit) : arr);
  return (
    <>
      {showCover && <Cover img={coverImg} title={"Shop"}></Cover>}
      <div className="pt-10">
        <div className="  items-center justify-center gap-10 ">
          <h2 className="font-semibold text-3xl text-center p-2 text-green-600">
            Our Organic Products
          </h2>
          <Tabs
            className={"text-center flex gap-10"}
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Vegetables</Tab>
              <Tab>Fruits</Tab>
              <Tab>Nuts</Tab>
              <div className="divider"></div>
              <div className={"mt-20  flex-col text-left "}>
                <h2 className="text-2xl">Price</h2>
                <h2 className="text-2xl">Additional</h2>
                <ul className="text-left">
                  <li>Organic</li>
                  <li>Fresh</li>
                  <li>Sales</li>
                  <li>Organic</li>
                  <li>Fresh</li>
                  <li>Sales</li>
                </ul>
              </div>
            </TabList>
            <TabPanel>
              <ShopTab products={slicesProducts(vagetable)}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab products={slicesProducts(fruits)}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab products={slicesProducts(nuts)}></ShopTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Shop;
