import FeaturedSection from "../components/home/FeaturedSection";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import ProductShowcase from "../components/home/ProductShowcase";
import RefinedElegance from "../components/home/RefinedElegance";
import TimelessDesign from "../components/home/TimelessDesign";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <NewArrivals />
      <RefinedElegance />
      <ProductShowcase />
      <TimelessDesign />
    </>
  );
};

export default HomePage;
