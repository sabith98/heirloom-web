import Button from "../common/Button";
import vintageGreenArmchair from "../../assets/images/vintage-green-armchair.webp";
import elegantBrownLeatherArmchair from "../../assets/images/elegant-brown-leather-armchair.webp";
import luxuriousVelvetArmchair from "../../assets/images/luxurious-velvet-armchair.webp";

interface ShowcaseItem {
  image: string;
  alt: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    image: vintageGreenArmchair,
    alt: "Vintage green armchair",
  },
  {
    image: elegantBrownLeatherArmchair,
    alt: "Elegant brown leather armchair",
  },
  {
    image: luxuriousVelvetArmchair,
    alt: "Luxurious velvet armchair",
  },
];

const ProductShowcase = () => {
  return (
    <section className="pb-8 bg-[#FDFDFD]">
      <div className="max-w-8xl mx-auto pt-[47px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1.67%]">
          {/* Text card - will be first on mobile */}
          <div className="col-span-1 bg-[#323338] p-8 flex flex-col justify-center text-center order-first md:order-last">
            <h3 className="text-[34px] leading-159 text-[#EEEDEC] font-prata font-regular">
              Discover <br />
              Our <br />
              Collection
            </h3>
            <p className="text-[#B6B5B6] text-[17px] leading-153 text-center font-martian font-regular mt-[29px]">
              Explore the Handcrafted Luxury Furniture and Decor
            </p>
            <Button
              variant="filled"
              className="text-[#7a5546] text-[19px] bg-[#C5A46E] leading-120 mt-[36px] px-[51px] py-[17px] rounded-[64px]"
            >
              Browse Now
            </Button>
          </div>

          {/* Product images - will follow the text card on mobile */}
          {showcaseItems.map((item, index) => (
            <div key={index} className="col-span-1">
              <img
                src={`${item.image}?auto=format&fit=crop&q=80`}
                alt={item.alt}
                className="w-full aspect-[46/63] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
