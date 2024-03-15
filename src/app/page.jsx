"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import headerimg from "../assets/headerimg.png";
import eplur01 from "../assets/eplur01.png";
import eplur02 from "../assets/eplur02.png";
import eplur03 from "../assets/eplur03.png";
import discountimg from "../assets/discountimg.png";
import { CountDown } from "../components/CountDown";
import log01 from "../assets/log01.png";
import log02 from "../assets/log02.png";
import log03 from "../assets/log03.png";
import log04 from "../assets/log04.png";
import log05 from "../assets/log05.png";
import log06 from "../assets/log06.png";
import log07 from "../assets/log07.png";
import wcol01 from "../assets/wcol01.png";
import wcol02 from "../assets/wcol02.png";
import wcol03 from "../assets/wcol03.png";
import Fade from "react-reveal/Fade";
import BestSales from "@/components/BestSales";
export default function page() {
  const [slider, setIsSlider] = React.useState(6);

  const checkWidth = () => {
    if (window.innerWidth > 1200) {
      setIsSlider(5);
    } else if (window.innerWidth > 800) {
      setIsSlider(3);
    } else if (window.innerWidth > 600) {
      setIsSlider(2.3);
    } else {
      setIsSlider(1.3);
    }
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [slider]);
  return (
    <>
      <div className="main__header__container__bg">
        <div className="main__header__container">
          <div className="main__header__left">
            <Fade up duration={1000} dely={300}>
              <div className="main__header__left__contant__heading">
                Discover and Find Your Own Fashion!
              </div>
            </Fade>
            <div className="main__header__left__contant__sub__heading">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </div>
            <div className="main__header__left__contant__btn">
              <button className="main__header__button">Explore Now</button>
            </div>
          </div>
          <Fade duration={2500}>
            <div className="main__header__right">
              <Image className="main__header__right__img" src={headerimg} />
            </div>
          </Fade>
        </div>
      </div>

      {/* collection section */}
      <div className="collection__main__container">
        <Fade up duration={1000} dely={500}>
          <div className="collection__main__container__left">
            <Image
              className="collection__main__container__left__image"
              src={eplur01}
            />
          </div>
        </Fade>
        <div className="collection__main__container__right">
          <div className="collection__main__container__right__content">
            <Fade up duration={1500} dely={500}>
              <div left className="collection__right__content__heading">
                Shoping Collection release
              </div>
            </Fade>
            <div className="collection__right__content__sub__heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              animi dolore provident explicabo accusamus, itaque quibusdam fuga
              asperiores recusandae laudantium?
            </div>
          </div>
          <div className="collection__main__container__right__imgs__wraper">
            <div className="collection__main__container__right__imgs__card">
              <Image className="collection__main__card__image" src={eplur02} />
              <div className="collection__main__card__img__title__bg">
                <div className="collection__main__card__img__title">Man</div>
              </div>
            </div>
            <div className="collection__main__container__right__imgs__card">
              <Image className="collection__main__card__image" src={eplur03} />
              <div className="collection__main__card__img__title__bg">
                <div className="collection__main__card__img__title">Women</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //discount section */}
      <div className="discount__section">
        <Fade up duration={1000} dely={300}>
          <div className="discount__section__left">
            <Image
              className="discount__section__left__image"
              src={discountimg}
            />
          </div>
        </Fade>
        <div className="discount__section__right">
          <Fade up duration={1500} dely={500}>
            <div className="discount__section__right__heading">
              <span>20%</span> Discount On Purchase!
            </div>
          </Fade>
          <div className="discount__section__right__sub__heading">
            Limited time only Selected styles marked down as shown
          </div>
          <CountDown />
        </div>
      </div>
      {/* //explur section */}
      <div className="explur__main__container">
        <Fade up duration={1500} dely={500}>
          <div className="explur__main__container__heading">
            Explur Our new Collections
          </div>
        </Fade>
        <div className="explur__main__container__sub__heading">
          See Our All Latest Feature and Outfit in a min
        </div>
        <div className="explur__main__container__heading__imgs__wraper">
          <div className="explur__main__container__img__card">
            <div className="explur__main__container__img__card__bg">
              <div className="explur__main__wraper__img__card__img">
                <Image
                  className="explur__main__wraper__img__card__image"
                  src={wcol02}
                  alt="store"
                />
              </div>
            </div>
            {/* <div className="wraper__img__card__content">
              <div className="wraper__img__card__content__title">
                Camo Design Hat
              </div>
              <div className="wraper__img__card__content__price">Rs: 9000</div>
            </div> */}
          </div>

          <div className="explur__main__container__img__card">
            <div className="explur__main__container__img__card__bg">
              <div className="explur__main__wraper__img__card__img">
                <Image
                  className="explur__main__wraper__img__card__img2"
                  src={wcol01}
                  alt="store"
                />
              </div>
            </div>
            {/* <div className="wraper__img__card__content">
              <div className="wraper__img__card__content__title">
                Camo Design Hat
              </div>
              <div className="wraper__img__card__content__price">Rs: 9000</div>
            </div> */}
          </div>

          <div className="explur__main__container__img__card">
            <div className="explur__main__container__img__card__bg">
              <div className="explur__main__wraper__img__card__img">
                <Image
                  className="explur__main__wraper__img__card__image"
                  src={wcol03}
                  alt="store"
                />
              </div>
            </div>
            {/* <div className="wraper__img__card__content">
              <div className="wraper__img__card__content__title">
                Camo Design Hat
              </div>
              <div className="wraper__img__card__content__price">Rs: 9000</div>
            </div> */}
          </div>
        </div>
      </div>
      <BestSales />
      {/* // brand slider section */}
      <div className="brand__logo__container">
        <Swiper
          spaceBetween={50}
          slidesPerView={slider}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log01} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log02} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log03} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log04} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log05} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log01} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log06} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log07} width={150} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand__logo__img">
              <Image src={log05} width={150} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
