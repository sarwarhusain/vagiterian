import Footer from "../../pages/Shared/Footer/Footer";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="container mx-auto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
