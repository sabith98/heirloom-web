import heroSofa from "../../assets/images/hero-sofa.jpg";

const FeaturedSection = () => {
  return (
    <section className="pt-16 md:py-20 px-[10px] bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center max-w-[947px] mx-auto mb-12 md:mb-[100px]">
          <span className="text-[14px] md:text-[16px] font-martian font-regular uppercase leading-120 text-[#95928E]">
            Explore Our Luxury Furniture Collection
          </span>
          <h1 className="font-prata text-[40px] md:text-[58px] leading-126 text-[#423B3A] mt-4 md:mt-[29px] max-w-[483px] mx-auto">
            Elevate Your Living Space
          </h1>
          <p className="font-martian font-medium text-[16px] md:text-[18px] leading-172 text-[#747170] mt-4 md:mt-[24px] max-w-[947px] mx-auto">
            Welcome to our luxury furniture store, where we curate a stunning
            array of high-end vintage pieces, from plush sofas to sculpted
            armchairs and statement-making rugs, all designed to transform your
            living spaces into havens of style and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <img
              src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80"
              alt="Luxury living room setup"
              className="w-full h-[300px] md:h-[600px] object-cover"
              loading="lazy"
            />
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-prata mb-2 md:mb-3">
                Curated Collections
              </h3>
              <p className="font-martian text-[16px] md:text-[18px] text-[#979597] leading-relaxed">
                Each piece in our collection is carefully selected for its
                exceptional craftsmanship, timeless design, and ability to
                transform any space into a sophisticated sanctuary.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 mt-12 md:mt-24">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Vintage armchair"
              className="w-full h-[300px] md:h-[600px] object-cover"
              loading="lazy"
            />
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-prata mb-2 md:mb-3">
                Vintage Excellence
              </h3>
              <p className="font-martian text-[16px] md:text-[18px] text-[#979597] leading-relaxed">
                Our vintage pieces bring character and history to modern spaces,
                creating unique environments that tell stories through design.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-screen mt-12 md:mt-[100px]">
          <div className="absolute inset-0">
            <img
              src={heroSofa}
              alt="Luxury sofa"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
