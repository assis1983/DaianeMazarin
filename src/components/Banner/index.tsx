import { BannerDiv, StyledImage } from "./style";
import Perfil from "../../Image/perfil.png";

const MyBanner = () => {
  return (
    <BannerDiv>
      <StyledImage 
        src= { Perfil }
      />
    </BannerDiv>
  );
};

export default MyBanner;
