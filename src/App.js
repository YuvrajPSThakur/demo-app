import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Item } from "./components/Items";
import { CarouselItem } from "./components/CarouselItem";

function App() {
  return (
    <div>
      <header className='App-header'>
        <Header title={"Checkout"} subTitle={"Viman Nagar"} />
        <div style={{ padding: 8 }}>
          <Item
            imageSrc='Burger'
            price={"200"}
            calorie={"200"}
            name={"Spicy Zinger Burger"}
          />
          <Item
            imageSrc='Burger'
            price={"200"}
            calorie={"200"}
            name={"Spicy Zinger Burger"}
          />
        </div>
        <CarouselItem />
      </header>
    </div>
  );
}

export default App;
