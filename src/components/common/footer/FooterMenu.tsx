import { Link } from "react-router-dom";

interface FooterMenuProps {
  title: string;
  links: Array<{ name: string; to: string }>;
}

const FooterMenu = ({ title, links }: FooterMenuProps) => {
  return (
    <div>
      <h3 className="text-[#AFAEAE] font-martian font-semibold leading-[100%] text-sm md:text-[15px] mb-[20px]">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              className="hover:text-white transition-colors text-sm md:text-[16px] font-martian font-regular leading-[100%] text-[#AFAEAE]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
