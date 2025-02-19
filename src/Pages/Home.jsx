import Best from "../Component/PageComponent/Home/Best";
import Blog from "../Component/PageComponent/Home/Blog";
import HeroSection from "../Component/PageComponent/Home/HeroSection";
import TheRestaurant from "../Component/PageComponent/Home/TheRestaurant";

const Home = () => {
  

  return (
    <div>
      {/* <HeroSection/> */}
      <TheRestaurant/>
      <Best/>
      <Blog/>
    </div>
  );
};

export default Home;
