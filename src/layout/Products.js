import React from "react";
import ProductsStyle from "../styles/Products.module.scss";
const Products = () => {
  return (
    <div className={ProductsStyle.products}>
       {/* product list */}
      <div id="cá biển nhập khẩu">
      <h2 id="hometitle" className={ProductsStyle.homeTitle}>
        Cá Biển Nhập Khẩu
      </h2>
      <div id="product" className={ProductsStyle.container}>
         

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/RED%20SQUIRED/Red%20Squirel%20fish.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Hồng</h5>
            <p className="card-text text-danger">Giá bán: 120,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/GROUPER/Grouper%20fillet%2001.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Mú</h5>
            <p className="card-text text-danger">Giá bán: 180,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/BARRAMUNDI/Fresh%20Barramundi%20fillet%20skin%20on%2001.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Chẽm</h5>
            <p className="card-text text-danger">Giá bán: 220,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/RED%20SNAPPER/Frozen%20Red%20snapper.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Hồng</h5>
            <p className="card-text text-danger">Giá bán: 150,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>

      
      </div>
      
      </div>

      <div id="cá biển tiện lợi">
      <h2 id="hometitle" className={ProductsStyle.homeTitle}>
        Cá Biển Khơi Xa
      </h2>
      <div id="product" className={ProductsStyle.container}>
         

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/RED%20SQUIRED/Red%20Squirel%20fish.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Hồng</h5>
            <p className="card-text text-danger">Giá bán: 120,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/GROUPER/Grouper%20fillet%2001.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Mú</h5>
            <p className="card-text text-danger">Giá bán: 180,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/BARRAMUNDI/Fresh%20Barramundi%20fillet%20skin%20on%2001.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Chẽm</h5>
            <p className="card-text text-danger">Giá bán: 220,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>
        
   

        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://www.vanthinhseafoods.com/images/Sanphamseafood/RED%20SNAPPER/Frozen%20Red%20snapper.jpg"
            alt="ca-bien, ca-bien-xuat-khau, ca-bien-khoi-xa."
          />
          <div className="card-body">
            <h5 className="card-title">Cá Hồng</h5>
            <p className="card-text text-danger">Giá bán: 150,000đ</p>
            <button className={ProductsStyle.button}>Mua Ngay ></button>
          </div>
        </div>

      
      </div>
      
      </div>
    </div>
  );
};

export default Products;
