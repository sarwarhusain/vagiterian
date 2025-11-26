
// import { Link, useNavigate } from "react-router";
// import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";
// import useAxios from "../../hooks/useAxios";
// import { useState } from "react";

// const Product = ({ product }) => {
//   const { name, price, image, descrition, category, id } = product;
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const axiosSecure = useAxios();

//   const [rotateX, setRotateX] = useState(0);
//   const [rotateY, setRotateY] = useState(0);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateYValue = ((x - centerX) / centerX) * 10; // max 10deg
//     const rotateXValue = ((centerY - y) / centerY) * 10; // max 10deg
//     setRotateX(rotateXValue);
//     setRotateY(rotateYValue);
//   };

//   const handleMouseLeave = () => {
//     setRotateX(0);
//     setRotateY(0);
//   };

//   const handleCart = () => {
//     if (user && user.email) {
//       const cartItem = { menuId: id, image, name, price };
//       axiosSecure.post("/carts", cartItem).then(() => {
//         Swal.fire({
//           title: "Item Added Successfully!",
//           icon: "success",
//           draggable: true,
//         });
//       });
//     } else {
//       Swal.fire({
//         title: "You are not Logged In",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, Login!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login");
//         }
//       });
//     }
//   };

//   return (
//     <div
//       className="group relative block overflow-hidden text-left cursor-pointer"
//       onMouseMove={handleMouseMove} // NEW: track mouse
//       onMouseLeave={handleMouseLeave} // NEW: reset rotation
//       style={{
//         transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//         transition: "transform 0.1s",
//       }} // NEW: apply 3D tilt
//     >
//       <div className="relative border rounded-2xl border-gray-100 bg-white p-6 shadow-lg">
//         <span className="bg-yellow-400 relative px-3 py-1.5 text-xs rounded-sm font-medium whitespace-nowrap">
//           {category}
//         </span>

//         <img
//           className="shadow-2xs rounded -mt-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
//           src={image}
//           alt={name}
//         />

//         <div className="flex gap-5 items-center justify-between mt-4">
//           <h3 className="text-lg font-medium text-gray-900">{name}</h3>
//           <p className="bg-white px-3 py-1.5 text-sm rounded-sm font-medium">
//             ${price}
//           </p>
//         </div>

//         <p className="mt-1.5 text-1xl text-gray-700">{descrition}</p>

//         <div className="mt-4 md:flex gap-2">
//           <Link
//             to={`/shop/${category}`}
//             className="group relative inline-block text-sm font-medium text-gray-600"
//           >
//             <span className="rounded absolute inset-0 translate-x-0.5 translate-y-0.5 bg-lime-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
//             <span className="relative block border border-current bg-white px-1 py-3 rounded">
//               Order Now!
//             </span>
//           </Link>

//           <div
//             onClick={handleCart}
//             className="group relative inline-block text-sm font-medium text-gray-600"
//           >
//             <span className="rounded absolute inset-0 translate-x-0 translate-y-0 bg-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
//             <span className="relative block border border-current bg-white px-1 py-3 rounded">
//               Add to Cart
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const Product = ({ product }) => {
  const { name, price, image, descrition, category, id } = product;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  const handleCart = () => {
    if (user && user.email) {
      const cartItem = { menuId: id, image, name, price };
      axiosSecure.post("/carts", cartItem).then(() => {
        Swal.fire({
          title: "Item Added Successfully!",
          icon: "success",
          draggable: true,
        });
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="group relative block overflow-hidden text-left cursor-pointer">
      <div className="relative border rounded-2xl border-gray-100 bg-white p-6
                      transform transition-transform duration-300 ease-in-out
                      hover:scale-105 hover:-rotate-2 hover:shadow-2xl hover:-translate-y-2">
        <span className="bg-yellow-400 relative px-3 py-1.5 text-xs rounded-sm font-medium whitespace-nowrap">
          {category}
        </span>

        <img
          className="shadow-2xs rounded -mt-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={image}
          alt={name}
        />

        <div className="flex gap-5 items-center justify-between mt-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="bg-white px-3 py-1.5 text-sm rounded-sm font-medium">${price}</p>
        </div>

        <p className="mt-1.5 text-1xl text-gray-700">{descrition}</p>

        <div className="mt-4 md:flex gap-2">
          <Link
            to={`/shop/${category}`}
            className="group relative inline-block text-sm font-medium text-gray-600"
          >
            <span className="rounded absolute inset-0 translate-x-0.5 translate-y-0.5 bg-lime-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative block border border-current bg-white px-1 py-3 rounded">
              Order Now!
            </span>
          </Link>

          <div
            onClick={handleCart}
            className="group relative inline-block text-sm font-medium text-gray-600 cursor-pointer"
          >
            <span className="rounded absolute inset-0 translate-x-0 translate-y-0 bg-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
            <span className="relative block border border-current bg-white px-1 py-3 rounded">
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


/**
 * import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const Product = ({ product }) => {
  const { name, price, image, descrition, category, id } = product;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  const handleCart = () => {
    if (user && user.email) {
      const cartItem = { menuId: id, image, name, price };
      axiosSecure.post("/carts", cartItem).then(() => {
        Swal.fire({
          title: "Item Added Successfully!",
          icon: "success",
          draggable: true,
        });
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="group relative block overflow-hidden text-left cursor-pointer">
      <div className="relative border rounded-2xl border-gray-100 bg-white p-6
                      transform transition-transform duration-300 ease-in-out
                      hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
        <span className="bg-yellow-400 relative px-3 py-1.5 text-xs rounded-sm font-medium whitespace-nowrap">
          {category}
        </span>

        <img
          className="shadow-2xs rounded -mt-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={image}
          alt={name}
        />

        <div className="flex gap-5 items-center justify-between mt-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="bg-white px-3 py-1.5 text-sm rounded-sm font-medium">${price}</p>
        </div>

        <p className="mt-1.5 text-1xl text-gray-700">{descrition}</p>

        <div className="mt-4 md:flex gap-2">
          <Link
            to={`/shop/${category}`}
            className="group relative inline-block text-sm font-medium text-gray-600"
          >
            <span className="rounded absolute inset-0 translate-x-0.5 translate-y-0.5 bg-lime-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative block border border-current bg-white px-1 py-3 rounded">
              Order Now!
            </span>
          </Link>

          <div
            onClick={handleCart}
            className="group relative inline-block text-sm font-medium text-gray-600 cursor-pointer"
          >
            <span className="rounded absolute inset-0 translate-x-0 translate-y-0 bg-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
            <span className="relative block border border-current bg-white px-1 py-3 rounded">
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

 */
