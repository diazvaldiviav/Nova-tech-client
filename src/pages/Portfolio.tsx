import { FC } from "react";
import BannerPortafolio from "../component/layout/BannerPortafolio";
import OurWork from "../component/layout/OurWork";
import Certifications from "../component/layout/Certifications";
import TechStack from "../component/layout/TechStack";

const Portfolio: FC = () => {
  return (
    <div>
      <BannerPortafolio />
      <OurWork />
      <TechStack />
      <Certifications />
    </div>
  );
};

export default Portfolio;
