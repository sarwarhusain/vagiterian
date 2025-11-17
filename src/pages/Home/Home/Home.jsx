import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Tabs from "../Tabs/Tabs";
import ProductsList from "../AllProducts/ProductsList";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Tabs></Tabs>
      <ProductsList></ProductsList>
      <Review></Review>
    </div>
  );
};

export default Home;
