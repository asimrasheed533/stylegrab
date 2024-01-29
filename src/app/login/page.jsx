"use client";
// import { PngLoginimg } from "@assets";
import loginimg from "../../assets/loginimg.jpeg";
import { useState } from "react";
import Image from "next/image";

export default function Index() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    }
    if (!email.includes("@")) {
      setEmailError("Correct email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (email && email.includes("@") && password) {
      setEmailError("");
      setPasswordError("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="login__container">
        <div className="login__container__img">
          <Image src={loginimg} alt="pern" />
        </div>
        <form onSubmit={handleLogin} className="login__container__form">
          <div className="login__container__form__wraper">
            <div className="login__container__form__logo">
              <svg
                width="70"
                height="70"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6649 34.8828C8.30501 34.8828 0.693359 27.2073 0.693359 17.7881C0.693359 8.36887 8.30501 0.693359 17.6649 0.693359C27.0247 0.693359 34.6518 8.3533 34.6518 17.7881C34.6518 27.2229 27.0402 34.8828 17.6649 34.8828ZM17.6649 2.56164C9.32608 2.56164 2.54986 9.39642 2.54986 17.7881C2.54986 26.1798 9.34155 33.0146 17.6803 33.0146C26.0191 33.0146 32.8108 26.1798 32.8108 17.7881C32.7953 9.39642 26.0191 2.56164 17.6649 2.56164Z"
                  fill="url(#paint0_linear_354_283)"
                />
                <path
                  d="M13.3662 18.6357C8.6571 21.0136 4.77168 23.0185 4.86493 23.1584C4.97372 23.3138 8.50168 21.7596 12.8844 19.7547L13.273 18.8689C13.3041 18.7756 13.3352 18.7135 13.3662 18.6357Z"
                  fill="url(#paint1_linear_354_283)"
                />
                <path
                  d="M21.8535 15.5742C26.4072 13.445 30.0906 11.6887 30.0906 11.6887C30.8211 11.3468 30.2771 10.2589 29.5622 10.6008C29.5622 10.6008 26.516 12.0928 22.5529 14.0511L22.04 15.1079C21.9778 15.2633 21.9157 15.4188 21.8535 15.5742ZM29.2514 11.1759C29.4534 11.0982 29.842 10.8029 29.9663 11.1137C29.9974 11.2069 29.9507 11.2847 29.8886 11.3313C29.2825 11.6732 28.6142 11.8597 27.9459 12.0151C28.3499 11.6887 28.7851 11.409 29.2514 11.1759Z"
                  fill="url(#paint2_linear_354_283)"
                />
                <path
                  d="M21.9453 18.6357C21.9764 18.7135 22.0075 18.7756 22.0386 18.8533L22.4271 19.7392C26.8099 21.7441 30.3378 23.2983 30.4466 23.1428C30.5243 23.0185 26.6544 20.9981 21.9453 18.6357Z"
                  fill="url(#paint3_linear_354_283)"
                />
                <path
                  d="M30.1513 17.1285C30.1513 18.807 29.8093 20.3922 29.2188 21.8532C29.4053 21.9619 29.5917 22.0552 29.7316 22.1329C30.3844 20.5943 30.7418 18.9002 30.7418 17.1129C30.7418 15.4189 30.4155 13.8026 29.8249 12.3105C29.685 12.3727 29.4985 12.466 29.2965 12.5592C29.8404 13.9891 30.1513 15.5277 30.1513 17.1285Z"
                  fill="url(#paint4_linear_354_283)"
                />
                <path
                  d="M5.26832 17.1289C5.26832 15.5436 5.56361 14.0206 6.10757 12.6373C5.90553 12.5441 5.73457 12.4508 5.57915 12.3887C5.00411 13.8651 4.67773 15.4659 4.67773 17.1444C4.67773 18.9006 5.03519 20.5791 5.65686 22.1022C5.81228 22.009 5.98324 21.9157 6.16974 21.8225C5.5947 20.3616 5.26832 18.7763 5.26832 17.1289Z"
                  fill="url(#paint5_linear_354_283)"
                />
                <path
                  d="M17.7175 4.67945C22.2246 4.67945 26.1721 7.08842 28.3635 10.6786C28.5656 10.5853 28.7365 10.492 28.8919 10.4143C26.6073 6.62217 22.4577 4.08887 17.733 4.08887C12.9772 4.08887 8.81206 6.65325 6.54297 10.461C6.69839 10.5387 6.86934 10.6164 7.07139 10.7252C9.23168 7.10396 13.1948 4.67945 17.7175 4.67945Z"
                  fill="url(#paint6_linear_354_283)"
                />
                <path
                  d="M17.7176 29.577C12.9774 29.577 8.84326 26.9038 6.74513 22.9873C6.54309 23.065 6.35659 23.1427 6.20117 23.2049C8.39255 27.339 12.7287 30.152 17.7176 30.152C22.6909 30.152 27.0271 27.3545 29.2184 23.2515C29.063 23.1893 28.8765 23.1116 28.6745 23.0339C26.5608 26.9194 22.4423 29.577 17.7176 29.577Z"
                  fill="url(#paint7_linear_354_283)"
                />
                <path
                  d="M12.7465 14.0511C8.7989 12.0928 5.73718 10.6008 5.73718 10.6008C5.02227 10.2589 4.49385 11.3468 5.20877 11.6887C5.20877 11.6887 8.89215 13.445 13.4459 15.5742C13.3992 15.4188 13.3215 15.2633 13.2594 15.1079L12.7465 14.0511ZM5.42635 11.3313C5.34864 11.2847 5.31756 11.1914 5.34864 11.1137C5.47297 10.8029 5.86152 11.1137 6.06356 11.1759C6.52981 11.4245 6.94944 11.6887 7.36906 12.0151C6.70077 11.8442 6.03248 11.6732 5.42635 11.3313Z"
                  fill="url(#paint8_linear_354_283)"
                />
                <mask
                  id="mask0_354_283"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="29"
                  height="29"
                >
                  <path
                    d="M21.0768 31.423C28.7664 29.4476 33.3986 21.6126 31.4232 13.923C29.4478 6.23343 21.6128 1.60116 13.9232 3.57655C6.23364 5.55195 1.60137 13.387 3.57677 21.0766C5.55216 28.7661 13.3872 33.3984 21.0768 31.423Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_354_283)">
                  <path
                    d="M18.1065 29.4645V26.1852H21.4946C22.3339 26.1852 22.9866 25.4702 22.9555 24.5999L22.9244 23.6829C22.8934 22.6883 22.6602 21.7247 22.2717 20.8388L21.6034 19.3157C20.9817 17.9325 21.0128 16.3628 21.6345 15.0884L23.686 10.8921C24.0434 10.1461 23.6238 9.26023 22.769 8.98048L19.8316 8.04798C19.6762 8.00136 19.583 7.87702 19.583 7.73715L19.5674 6.46273H18.1531V5.43697L18.5572 5.03289C18.9924 4.59772 18.9924 3.91389 18.5572 3.47872C18.1221 3.04355 17.4382 3.04355 17.0031 3.47872C16.5679 3.91389 16.5679 4.59772 17.0031 5.03289L17.4071 5.43697V6.46273H15.9928L15.9773 7.73715C15.9773 7.87702 15.8685 8.00136 15.7286 8.04798L12.7291 8.98048C11.8898 9.24469 11.4547 10.1461 11.8121 10.8921L13.8636 15.0728C14.4853 16.3473 14.5008 17.917 13.8947 19.3157L13.2264 20.8388C12.8379 21.7247 12.6047 22.6883 12.5737 23.6829L12.5426 24.5999C12.5115 25.4702 13.1642 26.1852 14.0035 26.1852H17.3916V29.4645C14.0346 29.5888 11.377 31.3916 11.377 33.583C11.377 35.8676 14.2366 37.7171 17.7491 37.7171C21.2615 37.7171 24.1212 35.8676 24.1212 33.583C24.1212 31.3916 21.448 29.5888 18.1065 29.4645Z"
                    fill="url(#paint9_linear_354_283)"
                  />
                  <mask
                    id="mask1_354_283"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="11"
                    y="6"
                    width="13"
                    height="21"
                  >
                    <path
                      d="M23.6541 10.8933C24.0116 10.1473 23.5919 9.26137 22.7371 8.98162L19.7998 8.04912C19.6443 8.0025 19.5511 7.87816 19.5511 7.73829L19.5356 6.46387H15.961L15.9454 7.73829C15.9454 7.87816 15.8366 8.0025 15.6968 8.04912L12.7283 8.98162C11.889 9.24583 11.4539 10.1473 11.8113 10.8933L13.8628 15.074C14.4845 16.3484 14.5 17.9181 13.8939 19.3169L13.2256 20.8399C12.8371 21.7258 12.604 22.6894 12.5729 23.6841L12.5418 24.601C12.5107 25.4714 13.1635 26.1863 14.0027 26.1863H21.4938C22.3331 26.1863 22.9858 25.4714 22.9547 24.601L22.9236 23.6841C22.8926 22.6894 22.6594 21.7258 22.2709 20.8399L21.6026 19.3169C20.9809 17.9336 21.012 16.3639 21.6337 15.0895L23.6541 10.8933Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_354_283)">
                    <path
                      d="M23.3117 12.3379H12.2305V16.5186H23.3117V12.3379Z"
                      fill="#F5EDDF"
                    />
                    <path
                      d="M23.3117 12.8662H12.2305V13.5034H23.3117V12.8662Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.3117 14.1562H12.2305V14.7935H23.3117V14.1562Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.3117 15.4619H12.2305V16.0991H23.3117V15.4619Z"
                      fill="#00754F"
                    />
                  </g>
                  <mask
                    id="mask2_354_283"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="11"
                    y="6"
                    width="13"
                    height="21"
                  >
                    <path
                      d="M23.6541 10.8933C24.0116 10.1473 23.5919 9.26137 22.7371 8.98162L19.7998 8.04912C19.6443 8.0025 19.5511 7.87816 19.5511 7.73829L19.5356 6.46387H15.961L15.9454 7.73829C15.9454 7.87816 15.8366 8.0025 15.6968 8.04912L12.7283 8.98162C11.889 9.24583 11.4539 10.1473 11.8113 10.8933L13.8628 15.074C14.4845 16.3484 14.5 17.9181 13.8939 19.3169L13.2256 20.8399C12.8371 21.7258 12.604 22.6894 12.5729 23.6841L12.5418 24.601C12.5107 25.4714 13.1635 26.1863 14.0027 26.1863H21.4938C22.3331 26.1863 22.9858 25.4714 22.9547 24.601L22.9236 23.6841C22.8926 22.6894 22.6594 21.7258 22.2709 20.8399L21.6026 19.3169C20.9809 17.9336 21.012 16.3639 21.6337 15.0895L23.6541 10.8933Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_354_283)">
                    <path
                      d="M23.9953 18.4932L12.9141 20.8245V16.6438L23.9953 14.3125V18.4932Z"
                      fill="#F5EDDF"
                    />
                    <path
                      d="M23.9953 15.478L12.9141 17.8093V17.1721L23.9953 14.8408V15.478Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.9953 16.7681L12.9141 19.0993V18.4621L23.9953 16.1309V16.7681Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.9953 18.0737L12.9141 20.3894V19.7522L23.9953 17.4365V18.0737Z"
                      fill="#00754F"
                    />
                  </g>
                  <mask
                    id="mask3_354_283"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="11"
                    y="6"
                    width="13"
                    height="21"
                  >
                    <path
                      d="M23.6541 10.8933C24.0116 10.1473 23.5919 9.26137 22.7371 8.98162L19.7998 8.04912C19.6443 8.0025 19.5511 7.87816 19.5511 7.73829L19.5356 6.46387H15.961L15.9454 7.73829C15.9454 7.87816 15.8366 8.0025 15.6968 8.04912L12.7283 8.98162C11.889 9.24583 11.4539 10.1473 11.8113 10.8933L13.8628 15.074C14.4845 16.3484 14.5 17.9181 13.8939 19.3169L13.2256 20.8399C12.8371 21.7258 12.604 22.6894 12.5729 23.6841L12.5418 24.601C12.5107 25.4714 13.1635 26.1863 14.0027 26.1863H21.4938C22.3331 26.1863 22.9858 25.4714 22.9547 24.601L22.9236 23.6841C22.8926 22.6894 22.6594 21.7258 22.2709 20.8399L21.6026 19.3169C20.9809 17.9336 21.012 16.3639 21.6337 15.0895L23.6541 10.8933Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask3_354_283)">
                    <path
                      d="M23.3117 18.7881H12.2305V22.9688H23.3117V18.7881Z"
                      fill="#F5EDDF"
                    />
                    <path
                      d="M23.3117 19.3164H12.2305V19.9536H23.3117V19.3164Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.3117 20.6064H12.2305V21.2437H23.3117V20.6064Z"
                      fill="#00754F"
                    />
                    <path
                      d="M23.3117 21.9121H12.2305V22.5493H23.3117V21.9121Z"
                      fill="#00754F"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_354_283"
                    x1="17.6724"
                    y1="1.25977"
                    x2="17.6724"
                    y2="34.8681"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0273741" stop-color="#00855A" />
                    <stop offset="0.8318" stop-color="#00754F" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_354_283"
                    x1="9.12051"
                    y1="7.2764"
                    x2="9.12051"
                    y2="29.108"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00473C" />
                    <stop offset="0.4813" stop-color="#004339" />
                    <stop offset="0.9493" stop-color="#00372E" />
                    <stop offset="0.9911" stop-color="#00362D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_354_283"
                    x1="26.1459"
                    y1="7.27651"
                    x2="26.1459"
                    y2="29.1081"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00473C" />
                    <stop offset="0.4813" stop-color="#004339" />
                    <stop offset="0.9493" stop-color="#00372E" />
                    <stop offset="0.9911" stop-color="#00362D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_354_283"
                    x1="26.1864"
                    y1="7.27637"
                    x2="26.1864"
                    y2="29.108"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00473C" />
                    <stop offset="0.4813" stop-color="#004339" />
                    <stop offset="0.9493" stop-color="#00372E" />
                    <stop offset="0.9911" stop-color="#00362D" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_354_283"
                    x1="29.9802"
                    y1="2.43553"
                    x2="29.9802"
                    y2="29.7365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E69A46" />
                    <stop offset="0.9955" stop-color="#E68B46" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_354_283"
                    x1="5.43051"
                    y1="2.436"
                    x2="5.43051"
                    y2="29.7369"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E69A46" />
                    <stop offset="0.9955" stop-color="#E68B46" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_354_283"
                    x1="17.6977"
                    y1="2.43546"
                    x2="17.6977"
                    y2="29.7364"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E69A46" />
                    <stop offset="0.9955" stop-color="#E68B46" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_354_283"
                    x1="17.7007"
                    y1="2.43521"
                    x2="17.7007"
                    y2="29.7361"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E69A46" />
                    <stop offset="0.9955" stop-color="#E68B46" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_354_283"
                    x1="9.16422"
                    y1="7.27651"
                    x2="9.16422"
                    y2="29.1081"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00473C" />
                    <stop offset="0.4813" stop-color="#004339" />
                    <stop offset="0.9493" stop-color="#00372E" />
                    <stop offset="0.9911" stop-color="#00362D" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_354_283"
                    x1="17.7363"
                    y1="3.93437"
                    x2="17.7363"
                    y2="35.0233"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00473C" />
                    <stop offset="0.4813" stop-color="#004339" />
                    <stop offset="0.9493" stop-color="#00372E" />
                    <stop offset="0.9911" stop-color="#00362D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="login__container__form__headeing">Sign In</div>
            <div className="login__container__form__subheadeing">
              Welcome back! Please enter your details.
            </div>
            <div className="login__container__form__input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  if (!e.target.value) {
                    setEmailError("Invalid Email");
                  } else {
                    setEmailError("");
                  }
                  setEmail(e.target.value);
                }}
              />
              {emailError !== "" ? (
                <div className="input__from__error">{emailError}</div>
              ) : null}
            </div>
            <div className="login__container__form__input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  if (!e.target.value) {
                    setPasswordError("Invalid Password");
                  } else {
                    setPasswordError("");
                  }
                  setPassword(e.target.value);
                }}
              />
              {passwordError !== "" ? (
                <div className="input__from__error">{passwordError}</div>
              ) : null}
            </div>

            <div className="login__container__form__loginbtn">
              <button className="login__container__form__loginbtn__button">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
