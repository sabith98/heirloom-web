import { Grid } from "lucide-react";

const FooterLogo = () => {
  return (
    <div className="space-y-4 flex flex-col">
      <div className="flex items-center space-x-2">
        <Grid className="h-6 w-6 text-white" />
        <span className="text-white text-xl font-light">Heirloom</span>
      </div>
      <p className="text-[#AFAEAE] text-[16px] leading-[110%] font-martian font-regular">
        © {new Date().getFullYear()} Heirloom, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default FooterLogo;
