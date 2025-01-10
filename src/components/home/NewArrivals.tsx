import Button from "../common/Button";
import timelessArrivalSofa from "../../assets/images/timeless-elegance-sofa.webp";

const NewArrivals = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FEFBFB] min-h-[600px] md:h-[967.06px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center justify-center text-center px-4 md:px-6">
            <span className="text-[14px] md:text-[15px] uppercase leading-120 text-[#9C999B] text-center font-martian font-regular">
              Discover Our Newest Arrivals
            </span>
            <h2 className="font-prata text-[40px] md:text-[55px] leading-131 text-center text-[#3F3C3C] mt-4 md:mt-[24px]">
              Timeless
              <br />
              Elegance
            </h2>
            <p className="font-martian font-medium text-[#979597] leading-161 text-[16px] md:text-[18px] text-center mt-6 md:mt-[33px] max-w-[478px]">
              Immerse yourself in a world of refined luxury as you explore our
              carefully selected collection of high-end vintage furniture, rugs
            </p>
            <Button
              variant="filled"
              className="bg-[#363638] text-[#C2BFBE] px-6 md:px-[45px] py-4 md:py-[19px] rounded-[68px] mt-8 md:mt-[46px] w-full md:w-auto hover:bg-[#4A4A4C] hover:text-[#C2BFBE]"
            >
              Shop Now
            </Button>
          </div>
          <div className="aspect-[125/128] mt-8 md:mt-0">
            <img
              src={timelessArrivalSofa}
              alt="Luxury living room setup"
              className="w-full shadow-lg h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
