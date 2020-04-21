import React from 'react';
import carouselStyle from '../styles/Carousel.module.scss'
const Carousel = () => {
    return (
        
            <div className={carouselStyle.carousel}>
                <div id="carousel content" className={carouselStyle.carouselContent}>
                    <h1>HƯƠNG VỊ BIỂN kHƠI</h1>
                    <p>Hãy để hiệu cá mang đến bữa ăn của bạn những loại cá ngon lành nhất,<br>
                    </br> từ những làng chài tươi đẹp của Việt Nam</p>
                   
                    
                    <button>Ghé Ngay</button>
                   
                </div>
                
            </div>
            
    
    )
}

export default Carousel;