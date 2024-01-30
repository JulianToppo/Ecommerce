import About from "./components/About";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MusicAlbums from "./components/MusicAlbums";
import CartContextStore from "./utils/CartContextStore";

function Example() {
  return (
    <div>
      <CartContextStore>
        <Header />
        <Banner />
        <MusicAlbums />
        <Footer />
        <Cart/>
      
     
      </CartContextStore>

    </div>
  );
}

export default Example;
