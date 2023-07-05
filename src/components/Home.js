import React from "react";
import BannerBackground from "../Assets/Home.jpg";
//import BannerImage from "../Asset/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
            <h1 className="primary-heading">
                Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
                Healthy switcher chefs do all the prep work, like peeding, chopping
                & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
                Bookings Now <FiArrowRight />{" "}
            </button>
            </div>
        
        </div>
        </div>
        );
};

export default Home;