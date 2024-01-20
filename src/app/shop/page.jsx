"use client";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import wp01 from "../../assets/women/wp01.png";
import wp02 from "../../assets/women/wp02.png";
import wp03 from "../../assets/women/wp03.png";
import wp04 from "../../assets/women/wp04.png";
import wp05 from "../../assets/women/wp05.png";
export default function page() {
  const pathname = usePathname();
  console.log(pathname);
  const products = [
    {
      img: wp01,
      title: "NF-Green Lahanga Choli Stitched Shit",
      price: "19000",
    },
    {
      img: wp02,
      title: "NF-Green Lahanga Choli Stitched Shit",
      price: "8000",
    },
    {
      img: wp03,
      title: "NF-Green Lahanga Choli Stitched Shit",
      price: "5000",
    },
    {
      img: wp04,
      title: "NF-Green Lahanga Choli Stitched Shit",
      price: "20000",
    },
    {
      img: wp05,
      title: "NF-Green Lahanga Choli Stitched Shit",
      price: "19000",
    },
  ];
  return (
    <>
      <div className="shop__main__header__line"></div>
      <div className="shop__main__header">
        <div className="shop__main__header__left">
          <div className="shop__main__header__left__content__entry">Men</div>
          <div className="shop__main__header__left__content__entry">Women</div>
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
        {products.map((product, index) => (
          <div key={index} className="shop__products__card__wraper">
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
              href={pathname + "/productdetail"}
              className="shop__products__card__img"
            >
              <Image
                className="shop__products__card__base__img"
                src={product.img}
                alt="product"
                width={200}
                height={300}
              />
            </Link>

            <div className="shop__products__card__content">
              <div className="shop__products__card__content__title">
                {product.title}
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
