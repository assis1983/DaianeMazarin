import GlobalStyle from "./Global/GlobalStyle";
import Header from "./components/Header";
import MyCarousel from "./components/Carousel";
import MyBanner from "./components/Banner";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MyCarousel />
      <MyBanner />
    </div>
  );
}

export default App;
