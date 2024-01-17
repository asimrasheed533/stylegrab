"use client";
import AdressCart from "@/components/AdressCart";
import CartpriceDetail from "@/components/CartpriceDetail";
import React from "react";
import wp01 from "../../assets/women/wp01.png";
export default function page() {
  const [address, setAddress] = React.useState(false);
  return (
    <>
      <div className="cart__wraper">
        {!address ? (
          <div className="cart__wraper__item__container">
            <div className="cart__wraper__item__container__heading">Cart</div>
            <CartpriceDetail wp01={wp01} />
            <CartpriceDetail wp01={wp01} />
            <CartpriceDetail wp01={wp01} />
            <CartpriceDetail wp01={wp01} />
            <CartpriceDetail wp01={wp01} />
          </div>
        ) : (
          <>
            <AdressCart />
          </>
        )}
        <div className="cart__wraper__price__container">
          <div className="cart__wraper__price__container__content">
            <div className="cart__wraper__price__content__title">
              Order Summary
            </div>
            <div className="cart__wraper__price__content__entry">
              <div className="cart__wraper__price__content__entry__col">
                price
              </div>
              <div className="cart__wraper__price__content__entry__col">
                Rs.300000
              </div>
            </div>
            <div className="cart__wraper__price__content__entry">
              <div className="cart__wraper__price__content__entry__col">
                Discount
              </div>
              <div className="cart__wraper__price__content__entry__col">
                Rs.300000
              </div>
            </div>
            <div className="cart__wraper__price__content__entry">
              <div className="cart__wraper__price__content__entry__col">
                Shipping
              </div>
              <div
                className="cart__wraper__price__content__entry__col"
                style={{
                  color: "#3AA39F",
                  fontSize: "14px",
                }}
              >
                free
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#d6d3d3",
              }}
              className="cart__wraper__line"
            />
            <div className="cart__wraper__price__checkout">
              <button
                onClick={() => setAddress(true)}
                className="cart__wraper__price__checkout__btn"
              >
                {!address ? <> Proceed to Checkout</> : <>Placed Order</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
