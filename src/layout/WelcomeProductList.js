import React from "react";
import Slider from "react-slick";
import CardProductItem from "./CardProductItem";
import WelcomeListStyle from '../styles/WelcomeList.module.scss'
const WelcomeProductList = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplayspeed: 500,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={ WelcomeListStyle.welcome}>
      <h1 className={`text-center ${WelcomeListStyle.homeTitle}`}>Cá này đang bán chạy</h1>
      <div className={WelcomeListStyle.slider}>
      <Slider {...settings}>
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/MAHI%20MAHI/mahi%20portion%208oz%206%20oz.jpg" alt="ca-hoi." />
          <div className="card-body">
            <h4 className="card-title">Cá Hồi</h4>
            <p className="card-text text-danger">Giá: 450,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/KING%20MACKEREL/King%20Mackerel%20steak02.jpg" alt="ca-hong.<" />
          <div className="card-body">
            <h4 className="card-title">Cá Thu</h4>
            <p className="card-text text-danger">Giá: 250,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/RED%20SQUIRED/Red%20Squirel%20fish.jpg" alt="ca-thu." />
          <div className="card-body">
            <h4 className="card-title">Cá Hồng</h4>
            <p className="card-text text-danger">Giá: 160,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/CUTTLEFISH%20-%20Muc%20nang/Raw%20baby%20cuttlefish04.jpg" alt='mung-nang.' />
          <div className="card-body">
            <h4 className="card-title">Mực Nang</h4>
            <p className="card-text text-danger">Giá: 170,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/CUTTLEFISH%20-%20Muc%20nang/Whole%20Clean%20Cuttlefish.jpg" alt='muc-la.' />
          <div className="card-body">
            <h4 className="card-title">Mực Lá</h4>
            <p className="card-text text-danger">Giá: 360,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/KING%20MACKEREL/King%20Mackerel%20steak02.jpg" alt='ca-ngu.' />
          <div className="card-body">
            <h4 className="card-title">Cá Ngừ Đại Dương</h4>
            <p className="card-text text-danger">Giá: 180,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
        <div className="card">
          <img className="card-img-top" src="http://www.vanthinhseafoods.com/images/Sanphamseafood/Shrimp%20-%20Tom/Fresh%20Water%20Shrimp01.jpg" alt='tom-cang-xanh.' />
          <div className="card-body">
            <h4 className="card-title">Tôm Càng Xanh</h4>
            <p className="card-text text-danger">Giá: 250,000 đ</p>
            <button className={WelcomeListStyle.button}>Mua ngay ></button>
          </div>
        </div>
        
      </Slider>
      </div>
    </div>
  );
};

export default WelcomeProductList;
