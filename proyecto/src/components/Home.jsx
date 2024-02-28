import Header from './header';
import Banner from './Banner';
import Footer from './Footer';
import Section from './Section';
import Product from './Product';
import Productcollection from './productcollection';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
    return (
      <div>
        <Header />
        <Banner />
        <Section />
        <Product />
        <Productcollection />
        <Footer />

      </div>
    );
}
export default Home