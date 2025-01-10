import Button from "../common/Button";
import crown from "../../assets/images/Crown.webp";
import horseSofa from "../../assets/images/horse-sofa.webp";

const TimelessDesign = () => {
  return (
    <section className="bg-white py-12 md:py-[28px]">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[36.36%,62.01%] gap-[1.63%] ml-[10px] mr-[19px] mt-[60px]">
          <div className="bg-[#333337] p-8 md:p-12 flex flex-col justify-center text-center items-center text-center">
            <img
              src={crown}
              alt="Crown"
              className="w-12 h-12 md:w-[53px] md:h-[55px]"
              loading="lazy"
            />
            <h2 className="text-3xl md:text-[45px] leading-[129%] font-prata font-regular text-[#F0EEEC] mt-[63px]">
              Timeless Design,
              <br />
              Uncompromising
            </h2>
            <p className="text-[#AFAEAF] font-martian font-regular mt-[44px] leading-181 text-base md:text-lg">
              Indulge in the finest in luxury furniture and decor with our
              expertly curated collection of high-end vintage pieces
            </p>
            <Button
              variant="filled"
              className="mt-[48px] px-[46px] py-[19px] bg-[#C6A570] text-[#4e2d23] rounded-[68px] w-full md:w-auto"
            >
              Shop the Collection
            </Button>
          </div>
          <div>
            <img
              src={horseSofa}
              alt="Luxury vintage sofa"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelessDesign;
