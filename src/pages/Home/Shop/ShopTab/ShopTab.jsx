import Cover from "../../../Shared/Cover/Cover";
import Product from "../../../Shared/Product";
const ShopTab = ({ products, title, img }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {title && <Cover img={img} title={title}></Cover>}
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default ShopTab;

// const chunkProducts = (arr, size) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunks.push(arr.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const slides = chunkProducts(products, 6); // 6 items per slide