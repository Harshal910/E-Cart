import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://lh3.googleusercontent.com/proxy/GKQ3oSjJMZY01LjhPX259Tvx7x0UEfrAAyJVG2KuwU6E0974YqcBFu5f3TL-D9uF22197o8WGblD-HZfZP6BD3atyxn1InV7cPhKR_23fHHtzRVDk000P1k"
          alt=""
        />

        <div className="home_row">
          <Product
            id="54547878"
            title="Hp Gaming Leptop"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41Hxk3Dl5RL.__AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Asus Gaming Leptop"
            price={40.99}
            image="https://m.media-amazon.com/images/I/81TLrifigYL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538034"
            title="Samsung Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)"
            price={40.99}
            image="https://m.media-amazon.com/images/I/619jtWsN0cL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="49538045"
            title="Dell Gaming Leptop"
            price={38.99}
            image="https://m.media-amazon.com/images/I/61HDZFz4qgL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="49538145"
            title="Acer Gaming Leptop"
            price={41.99}
            image="https://m.media-amazon.com/images/I/71EGs7rkM6L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="49538147"
            title="Lenovo Gaming Leptop"
            price={35.99}
            image="https://m.media-amazon.com/images/I/61WVv134ZsL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="49538167"
            title="Msi Gaming Leptop"
            price={34.99}
            image="https://m.media-amazon.com/images/I/51E-4pUSDpL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538166"
            title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Gorilla Glass 5 Protection"
            price={35.99}
            image="https://m.media-amazon.com/images/I/91Lr-OxVKjL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="49538140"
            title="Redmi Note 8 (Moonlight White, 4GB RAM, 64GB Storage)"
            price={30.99}
            image="https://m.media-amazon.com/images/I/61K6JcPwbQL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="49538157"
            title="SHOPTOSHOP TWS-L21 Bluetooth Stereo Wireless Earphones Premium IPX5 Sweatproof Earbuds 300mAh Battery in-Ear Mini Music headsets Sports (Black)"
            price={34.99}
            image="https://m.media-amazon.com/images/I/61QvsWAEoXL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="49538120"
            title="Boult Audio AirBass MuseBuds True Wireless in-Ear Earphones with mic & Magnetic Charging Case, Latest Bluetooth 5.0 Headphone, Auto Pairing & Upto 18 Hours Playtime with Case (Red)"
            price={20.99}
            image="https://m.media-amazon.com/images/I/71OdBLZ4UGL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="49538155"
            title="boAt Rockerz 510 Bluetooth Headphone with Thumping Bass, Up to 10H Playtime, Dual Connectivity Modes, Easy Access Controls and Ergonomic Design (Raging Red)"
            price={34.99}
            image="https://m.media-amazon.com/images/I/610DvHd8BeL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538149"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"
            price={20.99}
            image="https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
