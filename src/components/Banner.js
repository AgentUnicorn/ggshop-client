import React from "react";
import "./Navbar/css/base.css";
import "./Navbar/css/main.css";
import slider from './Navbar/image/slider.jpg'

export default function Banner() {
  return (
    <div>
      <div className="swipe">
        <div className="swipe__sale">
          <img src={slider} alt="" className="slider" />
          <div className="sale">
            <div className="sale__item">
              <p className="sale__desc">
                Ghế công thái học SIHOO về hàng, giá sốc rộn ràng!{" "}
              </p>
            </div>

            <div className="sale__item">
              <p className="sale__desc">
                Ghế công thái học SIHOO về hàng, giá sốc rộn ràng!{" "}
              </p>
            </div>

            <div className="sale__item">
              <p className="sale__desc">
                Ghế công thái học SIHOO về hàng, giá sốc rộn ràng!{" "}
              </p>
            </div>

            <div className="sale__item">
              <p className="sale__desc">
                Ghế công thái học SIHOO về hàng, giá sốc rộn ràng!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="swipe__news">
          <div className="news__item">
            <p className="news__desc">
              Siêu Sale Chốt Năm, Trăm Ngàn Deal Sốc Với Khuyến Mại Lên Tới 50%
              Tại ThinkPro (Duy nhất 12.12.2021)
            </p>
          </div>

          <div className="news__item">
            <p className="news__desc">
              Siêu Sale Chốt Năm, Trăm Ngàn Deal Sốc Với Khuyến Mại Lên Tới 50%
              Tại ThinkPro (Duy nhất 12.12.2021)
            </p>
          </div>

          <div className="news__item">
            <p className="news__desc">
              Siêu Sale Chốt Năm, Trăm Ngàn Deal Sốc Với Khuyến Mại Lên Tới 50%
              Tại ThinkPro (Duy nhất 12.12.2021)
            </p>
          </div>
          <h2 className="more-news">
            Tất cả tin tức
            <i className="fas fa-chevron-right"></i>
          </h2>
        </div>
      </div>
    </div>
  );
}
