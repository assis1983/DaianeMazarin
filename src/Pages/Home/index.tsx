import MyBanner from "../../components/Banner";
import WhatsAppButton from "../../components/ButtonWhatss";
import MyCarousel from "../../components/Carousel";
import MyFooter from "../../components/Footer";
import Header from "../../components/Header";
import Treatments from "../../components/Treatments";

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <MyBanner />
      <Treatments />
      <WhatsAppButton />
      <MyFooter />
    </div>
  );
}

export default Home;
