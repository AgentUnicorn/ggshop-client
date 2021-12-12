import React from 'react'
import './Navbar/css/base.css'
import './Navbar/css/main.css'
import logo from './Navbar/image/logo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faShoppingBag, faUser} from "@fortawesome/free-solid-svg-icons";
import Banner from './Banner'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <div className="main">
        <div id="header">
            <a href="#"><img src={logo} alt="" className="header__logo"/></a>
            <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createProduct">Create Product</Link></li>
            </ul>
            <div id="search">
                <input type="text" className="search__input"/>
                <ul className="search__show">
                    <li>
                        <img src="./assets/image/search/inspiron5515-mistblue-0jpg-medium" alt=""/>
                        <a href="#">Chuột không dây</a>
                        <p className="search__price">22.000.000đ</p>
                    </li>
                    <li>
                        <img src="./assets/image/search/inspiron5515-mistblue-0jpg-medium" alt=""/>
                        <a href="#">Bàn phím cơ</a>
                        <p className="search__price">22.000.000đ</p>
                    </li>
                    <li>
                        <img src="./assets/image/search/inspiron5515-mistblue-0jpg-medium" alt="" />
                        <a href="#">Bàn phím cơ</a>
                        <p className="search__price">22.000.000đ</p>
                    </li>
                </ul>
                <button type="submit"><i className="search__icon fas fa-search"></i></button>
            </div>
            <ul id="user-notification">
                <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </a>
                </li>
                
            </ul>
        </div>

        <Banner />


    </div>
    </div>
  )
}
