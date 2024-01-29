"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import wp01 from "../../../assets/women/wp01.png";
export default function page() {
  const router = useRouter();
  const data = router.query;
  console.log("data", data);
  return (
    <>
      <div className="product__container">
        <div className="back__btn">
          <svg
            className="back__btn__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div className="product__container__content">
          <div className="product__container__content__title">
            Lahanga Choli Stitched Shit
          </div>
          <div className="product__container__content__price">Rs.12000</div>
          <div className="product__container__content__detail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat a
            dolorum ducimus placeat, officia dicta.
          </div>
          <div className="product__container__cart">
            <div className="product__container__cart__num">
              <div className="product__container__cart__num__entry">-</div>
              <div className="product__container__cart__num__entry">1</div>
              <div className="product__container__cart__num__entry">+</div>
            </div>
            <div className="product__container__cart__btn">
              <button className="product__container__cart__button">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product__dec">
            Free 3-5 day shipping . Tool-free assembly . 30-day trail
          </div>
        </div>
        <div className="product__container__img">
          <Image className="product__container__image" src={wp01} />
          <div className="product__container__img__multi__wraper">
            <div className="product__container__multi__img">
              <Image
                className="product__container__multi__img__image"
                src={wp01}
                width={50}
                height={50}
              />
            </div>
            <div className="product__container__multi__img">
              <Image
                className="product__container__multi__img__image"
                src={wp01}
                width={50}
                height={50}
              />
            </div>
            <div className="product__container__multi__img">
              <Image
                className="product__container__multi__img__image"
                src={wp01}
                width={50}
                height={50}
              />
            </div>
            <div className="product__container__multi__img">
              <Image
                className="product__container__multi__img__image"
                src={wp01}
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
