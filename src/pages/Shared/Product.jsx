import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { name, price, image, descrition, category } = product;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCart = () => {
    if (user && user.email) {
      //TODO:send cart item to the database
      // navigate("/shop", { state: { from: location } });
      console.log(user.email);
    } else {
      Swal.fire({
        title: "You are not Logged In ",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate("/login");
        }
      });
    }
  };

  return (
    <div href="#" class="group relative block overflow-hidden text-left">
      <div class="relative border rounded-2xl border-gray-100 bg-white p-6">
        <span class="bg-yellow-400 relative px-3 py-1.5 text-xs rounded-sm font-medium whitespace-nowrap">
          {category}
        </span>
        <img className="shadow-2xs rounded -mt-10" src={image} />
        <div className="flex gap-5 items-center justify-between ">
          <h3 class="mt-4 text-lg font-medium text-gray-900">{name}</h3>
          <p class="bg-white  mt-4 px-3 py-1.5 text-sm rounded-sm font-medium">
            ${price}
          </p>
        </div>
        <p className="mt-1.5 text-1xl text-gray-700 ">{descrition}</p>
        <div className=" md:flex gap-2 ">
          <Link
            to={`/shop/${category}`}
            class="group relative inline-block text-sm font-medium text-gray-600"
            href="#"
          >
            <span class="rounded absolute inset-0 translate-x-0.5 translate-y-0.5 bg-lime-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span class="relative block border border-current bg-white px-1 py-3 rounded">
              Order Now!
            </span>
          </Link>

          <div
            onClick={handleCart}
            class="group relative inline-block text-sm font-medium  text-gray-600"
            href="#"
          >
            <span class="rounded absolute inset-0 translate-x-0 translate-y-0 bg-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>

            <span class="relative block border border-current bg-white px-1 py-3 rounded">
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
