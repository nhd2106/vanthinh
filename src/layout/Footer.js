import React from "react";
import footerStyle from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className='container'>
      
    <div className={footerStyle.footer}>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div>
            <p className={footerStyle.contactHeading1}>KẾT NỐI VỚI HIỆU</p>
            <p>
                Hãy tương tác ngay với hiệu cá,<br></br>
                chúng tôi luôn sẵn sàng hỗ trợ bạn
            </p>
          </div>
          <div id="form-submit">
              <form>
                  <input placeholder="Địa Chỉ Email"/> <span><button>Gửi</button></span>
              </form>
          </div>
          <div id="social-network" className={footerStyle.socialIcon}>
            <ul className={footerStyle.ul1}>
                <li>
                    <a href="#"> <img src="https://cdn.shopify.com/s/files/1/0126/6076/8825/files/Group_3_Copy_10_2x_aa6c8b9d-457c-4619-b245-4d5f03b4fb99.png?18896"/></a>
                </li>
                <li >
                    <a href="#"> <img src="https://cdn.shopify.com/s/files/1/0126/6076/8825/files/Group_8_Copy_6_2x_e9e7dadb-879a-427c-8a52-bf9a49ef2f8f.png?18901"/></a>
                </li>
                <li >
                    <a href="#"> <img src="https://cdn.shopify.com/s/files/1/0126/6076/8825/files/youtube.png?v=1578106155"/></a>
                </li>
            </ul>
          </div>
         
        </div>
        <div className="col-md-8 col-sm-12">
         <div className='row'>
           <div className='col-md-3 col-sm-12'>
              <p className={footerStyle.contactHeading2}>Lối Tắt</p>
              <ul className={footerStyle.ul2}>
                <li>
                  <a href="#">Ghé Cửa Hiệu</a>
                </li>
                <li>
                  <a href="#">Thực đơn gợi ý</a>
                </li>
                <li>
                  <a href="#">Chính sách</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
              </ul>

           </div>
           <div className='col-md-6 col-sm-12'>
                <p className={footerStyle.contactHeading2}>Liên Hệ</p>
                <ul className={footerStyle.ul2}>
                <li>
                  <a href="#">
                    <i className={`fa fa-phone mr-3 ${footerStyle.icon}`} aria-hidden="true"></i><span>1982312837</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className={`fa fa-envelope ${footerStyle.icon}`} aria-hidden="true"></i> <span >info@hieucabien.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className={`fa fa-map ${footerStyle.icon}`} aria-hidden="true"></i> <span >44 Tây Sơn, Tân Quý, Tân Phú, Hồ chí Minh</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className={`fa fa-clock-o ${footerStyle.icon}`} aria-hidden="true"></i> <span > Thứ 2 — Thứ 7, 8:00am - 5:00pm</span>
                  </a>
                </li>
                
              </ul>
           </div>
         </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
