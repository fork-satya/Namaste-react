import React from "react";
import ReactDOM from "react-dom/client";


/**
 * 
 * Header
 * -logo
 * -nav
 * Body
 * -search
 * -card container
 *  - rest card
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 */

 const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/28/adaa8b16-41c1-4034-80af-381812046aff_f8f18ab9-e56c-41e0-803f-776e4124baa4.png_compressed" className="logo-img" /> 
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>      
  )
 };

 const RestaurantCard = () => {
  return (
    <div className="res-card"> 
      <img alt="restaurant" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/28/adaa8b16-41c1-4034-80af-381812046aff_f8f18ab9-e56c-41e0-803f-776e4124baa4.png_compressed" className="res-logo" />
      <h3>Meghana Foods</h3>
      <h4>North Indian, Biryani, Mughlai</h4>
      <h4>4.5 stars</h4>
    </div>
  )
 };

 const Body = () => {
  return (
    <div className="body"> 
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />    
    </div>
    </div>
  )
 };

const AppLayout = () => {
  return (
    <div className="app"> 
      <Header />
      <Body />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
