import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";

const footerLinks = {
  quickLinks: [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Contact", to: "/contact" },
  ],
  explore: [
    { name: "FAQs", to: "/faqs" },
    { name: "Shipping", to: "/shipping" },
    { name: "Returns", to: "/returns" },
    { name: "Privacy Policy", to: "/privacy" },
  ],
  social: [
    { name: "Instagram", to: "#" },
    { name: "Facebook", to: "#" },
    { name: "Twitter", to: "#" },
    { name: "Pinterest", to: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#35363A]">
      <div className="px-4 md:px-[100px] py-12 md:pt-[120px] md:pb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-[100px]">
          <FooterLogo />
          <FooterMenu title="Quick Links" links={footerLinks.quickLinks} />
          <FooterMenu title="Explore More" links={footerLinks.explore} />
          <FooterMenu title="Connect with Us" links={footerLinks.social} />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-[#AFAEAE] text-sm text-center">
            Designed & Developed by{" "}
            <a
              href="https://linkedin.com/in/sabith98"
              target="_blank"
              className="text-blue-500 hover:underline hover:text-blue-600 font-medium"
            >
              Mohamed Sabith
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
