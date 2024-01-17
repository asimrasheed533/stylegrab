import Image from "next/image";
import React from "react";

export default function CartpriceDetail({ wp01 }) {
  return (
    <div className="cart__wraper__item__card">
      <div className="cart__wraper__item__card__col">
        <Image
          className="cart__wraper__item__card__col__image"
          src={wp01}
          width={150}
          height={150}
        />
      </div>
      <div className="cart__wraper__item__card__col">
        <div className="cart__wraper__item__card__col__title">
          Lahanga Choli Stitched Shit
        </div>
        <div
          className="product__container__cart"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            className="product__container__cart__btn"
            style={{
              padding: "1em 0em",
            }}
          >
            <button
              className="product__container__cart__button"
              style={{
                backgroundColor: "#8b1616",
                fontSize: "12px",
              }}
            >
              Remove to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="cart__wraper__item__card__col">
        <div className="cart__wraper__item__card__col__price">Rs.12000</div>
      </div>
    </div>
  );
}
