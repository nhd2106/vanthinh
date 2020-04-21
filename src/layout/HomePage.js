import React from 'react';
import homePageStyle from '../styles/HomePage.module.scss'
import Carousel from './Carousel';
import WelcomeProductList from './WelcomeProductList';
import ImportFish from './Products';


const HomePage = () => {
    return (
        <div className="container" >
            <Carousel/>
            <WelcomeProductList/>
            <ImportFish/>
          
        </div>
    )
}

export default HomePage;
