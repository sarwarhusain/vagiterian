import { Link } from "react-router";

const Product = ({ product }) => {
  const { name, price, image, descrition, category } = product;
  return (
    <div href="#" class="group relative block overflow-hidden text-left">
      <div class="relative border rounded-2xl border-gray-100 bg-white p-6">
        <span class="bg-yellow-400 relative px-3 py-1.5 text-xs rounded-sm font-medium whitespace-nowrap">
          {category}
        </span>
        <img className=" -mt-10" src={image} />
        <div className="flex gap-5 items-center justify-between ">
          <h3 class="mt-4 text-lg font-medium text-gray-900">{name}</h3>
          <p class="bg-white  mt-4 px-3 py-1.5 text-sm rounded-sm font-medium">
            ${price}
          </p>
        </div>
        <p className="mt-1.5 text-1xl text-gray-700 ">{descrition}</p>
        <div className="flex gap-2 ">
          <Link
            to={`/shop/${category}`}
            class="block w-full rounded-3xl pb-3 bg-gray-100 text-green-600 p-4 text-sm font-medium transition hover:scale-105"
          >
            Order Now
          </Link>
          <button class="block w-full rounded-3xl pb-3 bg-gray-100 text-green-600 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
