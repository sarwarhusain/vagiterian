import { useEffect, useState } from "react";
import Product from "../../Shared/Product";

const Products = ({ product }) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("vagitable.json")
      .then((res) => res.json())
      .then((data) => {
        // setMenu(data)
        const filteredData = data.filter((item) => item.category === "fruits");
        setMenu(filteredData);
      });
  }, []);
  return (
    <div className="mt-25 gap-5 grid md:grid-cols-2 lg:grid-cols-4">
      {/* <h2>{item.length}</h2> */}
      {menu.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
