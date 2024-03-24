"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import data from "../../data/products.json";
import m08 from "../../assets/mobiles/m08.jpg";
import m09 from "../../assets/mobiles/m09.jpg";
import m12 from "../../assets/mobiles/m12.jpg";
import m13 from "../../assets/mobiles/m13.png";
export default function page() {
  const pathnameC = usePathname();
  const products = data.products.slice(0, 20);
  const [filteredItems, setFilteredItems] = useState(products);
  console.log(data.products);
  const filterItem = (category) => {
    const updatedItems = products.filter((curItem) => {
      return curItem.category === category;
    });
    // if (category === "all") {
    //   setFilteredItems(products);
    //   return;
    // }
    setFilteredItems(updatedItems);
  };
  console.log("fliter", filteredItems);
  return (
    <>
      <div className="shop__main__header__line"></div>
      <div className="shop__main__header">
        <div className="shop__main__header__left">
          {/* <button
            className="shop__main__header__left__content__entry"
            onClick={() => filterItem("all")}
          >
            All
          </button> */}
          <button
            className="shop__main__header__left__content__entry"
            onClick={() => filterItem("dress")}
          >
            Apple
          </button>
          <button
            className="shop__main__header__left__content__entry"
            onClick={() => filterItem("accessories")}
          >
            Android
          </button>
        </div>
        <div className="shop__main__header__right">
          <div className="shop__main__header__left__search">
            <input
              className="shop__main__header__left__search__input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="shop__products__container">
        {filteredItems.map((product, index) => (
          <div key={product.id} className="shop__products__card__wraper">
            <div className="shop__products__fav__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <Link
              href={{
                // pathname: `${pathnameC}/productdetail`,
                pathname: "/",
                query: product,
              }}
              className="shop__products__card__img"
            >
              <Image
                className="shop__products__card__base__img"
                src={m12}
                alt="product"
                width={200}
                height={300}
              />
            </Link>

            <div className="shop__products__card__content">
              <div className="shop__products__card__content__title">
                oppo 17
              </div>
              <div className="shop__products__card__content__price">
                Rs.{product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
