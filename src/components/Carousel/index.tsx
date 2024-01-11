import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TesteBanner from "../../Image/bannerextranet_seguratabela_kv2__1355x350px_.png";
import TesteBannertwo from "../../Image/_onodera__banner_site_divulgacaoganhadora__1753x387px__v01.png"
import TesteBannertree from "../../Image/banner-site.jpg"
import Shape from "../../Image/banner_site_barrigachapada_trilipo_shapedetox.png"

const MyCarousel = () => {
  return (
    <Carousel
      style={{
        maxWidth: "100%",
        maxHeight: "400px",
        margin: "auto",
        marginTop: "75px",
      }}
      interval={2000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TesteBannertwo}
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TesteBannertree}
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TesteBanner}
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shape}
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
