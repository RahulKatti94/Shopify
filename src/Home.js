import AutoPlay from "./Autoplay";
import Autoplay2 from "./Autoplay2";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
// import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Shopify",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      {/* <Trusted /> */}
      <AutoPlay />
      <Autoplay2 />
    </>
  );
};

export default Home;
