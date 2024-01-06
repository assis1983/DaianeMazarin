import GlobalStyle from "./Global/GlobalStyle";
import Header from "./components/Header";
import MyCarousel from "./components/Carousel";
import MyBanner from "./components/Banner";
import WhatsAppButton from "./components/ButtonWhatss";
import MyFooter from "./components/Footer";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MyCarousel />
      <MyBanner />
      <Treatments />
      <WhatsAppButton />
      <MyFooter />
    </div>
  );
}

export default App;
