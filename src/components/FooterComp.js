import React from "react";
import "./Footer/css/FooterComp.css"
import brandlogo from "./Footer/image/brandlogo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faInstagramSquare, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function FooterComp() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_wrapper">
          {/* column 1 */}
          <div className="footer_widget">
            {/* Logo */}
            <div className="footer_widget-firstColumn">
              <a href="#">
                <img src={brandlogo} alt="Brand logo" className="footer_brandlogo"></img>
              </a>
              {/* dummy test */}
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
              </p>
            </div>
            {/* social icons */}
            <ul className="footer_social-icons">
              <li>
                <a href="#"><FontAwesomeIcon icon={faYoutube} className="footer_social-icons-youtube"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} className="footer_social-icons-instagram"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} className="footer_social-icons-github"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} className="footer_social-icons-linkedin"></FontAwesomeIcon></a>
              </li>
            </ul>
          </div>

          {/* column 2 */}
          <div className="footer_widget">
            <h6>Chính sách</h6>
            <ul className="footer_links">
              <li><a href="#">Bảo hành</a></li>
              <li><a href="#">Vận chuyển</a></li>
              <li><a href="#">Thanh toán</a></li>
            </ul>
          </div>
          
          {/* column 3 */}
          <div className="footer_widget">
            <h6>Về chúng tôi</h6>
              <ul className="footer_links">
                <li><a href="#">Lịch sử thành lập</a></li>
                <li><a href="#">Giá trị cốt lõi</a></li>
                <li><a href="#">Tầm nhìn và sứ mệnh</a></li>
              </ul>
          </div>

          {/* column 4 */}
          <div className="footer_widget">
            <h6>Hệ thống của hàng : </h6>
              <ul className="footer_links">
                <li><b>Hà Nội: </b>555 Thái Hà, Đồng Đa, Hà Nội</li>
                <li><b>Tp.Hồ Chí Minh: </b>955 Trần Thiện Chánh, Phường 12, Quận 10</li>
              </ul>
          </div>
        </div>
        {/* copy right */}
        <div className="footer_copyRight">
            <em>&copy; 2021 Design and Developed by Nhom4 | All Rights Reserved.</em>
        </div>
      </div>
    </footer>
  );
}
