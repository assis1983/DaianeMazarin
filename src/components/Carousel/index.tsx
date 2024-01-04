import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Perfil from "../../Image/perfil.png";
import Banner from "../../Image/banner.jpeg"


const MyCarousel = () => {
  return (
    <Carousel style={{ maxWidth: "100%", maxHeight: "400px", margin: "auto" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Perfil}
          alt="First slide"
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some text about the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= { Banner }
          alt="Second slide"
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some text about the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/400x200"
          alt="Second slide"
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some text about the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
