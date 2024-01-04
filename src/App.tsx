import GlobalStyle from "./Global/GlobalStyle";
import Header from "./components/Header";
import MyCarousel from "./components/Carousel";
import MyBanner from "./components/Banner";
import WhatsAppButton from "./components/ButtonWhatss";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MyCarousel />
      <MyBanner />
      <WhatsAppButton />
    </div>
  );
}

export default App;
