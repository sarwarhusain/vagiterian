import Footer from "../../pages/Shared/Footer/Footer";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import { Outlet, useLocation } from "react-router";

const Root = () => {
  const location = useLocation();
  // console.log(location);
  const noHeadeFooter = location.pathname.includes("login");
  return (
    <div className="container mx-auto ">
      {noHeadeFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeadeFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
