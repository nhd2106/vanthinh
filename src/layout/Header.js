import React from "react";
import headerStyle from '../styles/Header.module.scss'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
const Header = () => {
  const StyledBadge = withStyles(theme => ({
    Badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }))(Badge);

  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-sm navbar-light ">
            
          <a className="navbar-brand pr-5" href="#">
            <img src="logo.png" width="100" height='80'></img>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className={`nav-item  ${headerStyle.dropDown}`}>
                <a className="nav-link" href="#">
                  Ghé Hiệu Cá <span className="sr-only">(current)</span>
                </a>
                <div className={headerStyle.dropDownContent}>
                    <a href="#">Cá biển các loại</a>
                    <a href="#">cá biển tẩm bột</a>
                    <a href="#">Chả cá biển</a>
                </div>
              </li>

              <li className={`nav-item ${headerStyle.dropDown}`}>
                <a className="nav-link" href="#">
                  Về Hiệu Cá
                </a>
                <div className={headerStyle.dropDownContent}>
                    <a href="#">Cá biển các loại</a>
                    <a href="#">cá biển tẩm bột</a>
                    <a href="#"></a>
                </div>
              </li>
              
              <li className={`nav-item ${headerStyle.dropDown}`}>
                <a className="nav-link" href="#">
                  Gợi Ý Chế Biến
                </a>
               
              </li>
              <li className={`nav-item ${headerStyle.dropDown}`}>
                <a className="nav-link" href="#">
                  Liên Hệ
                </a>
               
              </li>
             
              
              
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart" id="cart">
                 
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={9} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
