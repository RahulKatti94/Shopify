import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import AutoPlay from "./Autoplay";
import Autoplay2 from "./Autoplay2";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "E-Commerce Site",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <AutoPlay />
      <Autoplay2 />
    </>
  );
};

export default About;
