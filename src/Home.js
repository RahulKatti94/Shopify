import AutoPlay from "./Autoplay";
import Autoplay2 from "./Autoplay2";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Shopify",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <AutoPlay />
      <Autoplay2 />
    </>
  );
};

export default Home;
