import Button from "../common/Button";

const RefinedElegance = () => {
  return (
    <section className="bg-[#363638] md:mb-[56.5px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,581px] items-center">
          <div className="flex flex-col items-center py-12 md:py-24 px-4 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-[59px] leading-131 font-prata font-regular text-[#FAFAF9] text-center">
              Refined
              <br />
              Elegance
            </h2>
            <p className="font-martian font-regular text-[#B8B8B7] leading-175 text-base md:text-[16px] max-w-[496px] text-center mt-[39px]">
              Elevate your living spaces with our expertly curated selection of
              high-end vintage furniture and decor
            </p>
            <div className="flex justify-center mt-[37px]">
              <Button
                variant="outlined"
                className="md:px-[62px] py-4 md:py-[23.5px] hover:bg-[#BBBBBB] hover:text-[#363638] transition-all duration-300 ease-in-out rounded-[78px] transform hover:scale-[1.02]"
              >
                Explore More
              </Button>
            </div>
          </div>
          <div className="h-[400px] md:h-[600px] lg:h-[797.2px] flex justify-end max-w-full">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Vintage leather armchair"
              className="w-full shadow-lg h-full w-[581px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefinedElegance;
