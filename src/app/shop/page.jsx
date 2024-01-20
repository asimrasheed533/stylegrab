"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../data/products.json";
export default function page() {
  const pathname = usePathname();
  console.log(pathname);
  console.log(data.products);
  return (
    <>
      <div className="shop__main__header__line"></div>
      <div className="shop__main__header">
        <div className="shop__main__header__left">
          <button className="shop__main__header__left__content__entry">
            Men
          </button>
          <button className="shop__main__header__left__content__entry">
            Women
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
        {data.products.slice(0, 20).map((product, index) => (
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
              href={pathname + "/productdetail"}
              className="shop__products__card__img"
            >
              <Image
                className="shop__products__card__base__img"
                src={product.images[0].src}
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
                Rs.{product.variants[0].price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
