import Product from "../../../Shared/Product";
import useMenu from "../../../../hooks/useMenu";

const PopularProducts = () => {
  const [menu] = useMenu();
  const popular = menu.filter((product) => product.category === "popular");
  
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-3xl text-green-600">Popular Menu</h2>
      <div className="mt-25 gap-5 grid md:grid-cols-2 lg:grid-cols-4">
        {popular.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
