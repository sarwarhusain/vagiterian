import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCart = () => {
  const axiosSecure = useAxios();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCart;
//tan stack query for using when you pres addtocart then the data is calling to useAxios ,now axios show the another case he looking to useCart ,and the useCart is using call back function to axios and recived the cart item.then the item recived by navbar and navbar show the item in UI
//if i use tan stack, i dont have do that the useEffect ,tan stact easily worked  my effect
