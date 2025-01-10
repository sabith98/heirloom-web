const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
          alt="Luxury sofa"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
