import React, { Fragment } from "react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import profile from "../../../../images/profile/profile.png";

const AppProfile = () => {
  return (
    <Fragment>
      {/* <PageTitle activeMenu="Profile" motherMenu="App" /> */}
      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content ">
                <div className="cover-photo rounded"></div>
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src={profile}
                    className="img-fluid rounded-circle"
                    style={{ border: "2px solid rgba(29, 84, 207, 1)" }}
                    alt="profile"
                  />
                </div>
                <div className="profile-details flex justify-between items-center">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">Mitchell C. Shay</h4>
                    <p>UX / UI Designer</p>
                  </div>
                  {/* <Link className="text-[#0aa1dd] text-[16px] font-semibold">
                    Reset Wallet Balance
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-[#0aa1dd] text-[16px]">Contact</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.033 0.000234916C13.8216 -0.00341406 13.6117 0.03548 13.4156 0.114603C13.2196 0.193727 13.0414 0.311463 12.8918 0.460808L12.1895 1.18467L16.8198 5.83603L17.5221 5.11288C17.6736 4.96166 17.7938 4.78206 17.8758 4.58437C17.9578 4.38668 18 4.17476 18 3.96074C18 3.74673 17.9578 3.53481 17.8758 3.33712C17.7938 3.13942 17.6736 2.95983 17.5221 2.80861L15.1961 0.482573C14.887 0.175113 14.4691 0.00181398 14.033 0.000234916ZM11.3994 1.82146L10.3017 2.8746L15.1301 7.7015L16.2495 6.67012L11.3994 1.82146ZM9.59866 3.64269L2.0067 11.167C1.92044 11.2112 1.84454 11.2731 1.784 11.3487C1.72347 11.4244 1.67969 11.512 1.65554 11.6058L0.0303998 17.1138C-0.00629362 17.2327 -0.00983976 17.3594 0.020143 17.4803C0.0501258 17.6011 0.112502 17.7115 0.200559 17.7995C0.288616 17.8875 0.39902 17.9499 0.519888 17.9799C0.640756 18.0098 0.767512 18.0063 0.886515 17.9696L6.39543 16.3457C6.52048 16.327 6.63792 16.2741 6.73473 16.1928C6.83154 16.1115 6.90395 16.005 6.94393 15.8851L14.4277 8.46888L13.3968 7.43821L5.71489 15.1395L2.62052 16.0382L1.96175 15.3803L2.90565 12.1556L10.5215 4.56384L9.59866 3.64269ZM11.2667 5.33193L3.56372 13.055L4.6825 13.2958L4.8363 14.3279L12.5617 6.62589L11.2667 5.33193Z"
                  fill="#0AA1DD"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-[8px] mt-3">
              <div>
                <h6 className="text-[#0aa1dd]">Mobile Number</h6>
                <p className="text-[#9B9B9A] text-[12px]">+965 9876543210</p>
              </div>
              <div>
                <h6 className="text-[#0aa1dd]">Email</h6>
                <p className="text-[#9B9B9A] text-[12px]">
                  cryptographicsolution@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-[#0aa1dd] text-[16px]">Company Details</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.033 0.000234916C13.8216 -0.00341406 13.6117 0.03548 13.4156 0.114603C13.2196 0.193727 13.0414 0.311463 12.8918 0.460808L12.1895 1.18467L16.8198 5.83603L17.5221 5.11288C17.6736 4.96166 17.7938 4.78206 17.8758 4.58437C17.9578 4.38668 18 4.17476 18 3.96074C18 3.74673 17.9578 3.53481 17.8758 3.33712C17.7938 3.13942 17.6736 2.95983 17.5221 2.80861L15.1961 0.482573C14.887 0.175113 14.4691 0.00181398 14.033 0.000234916ZM11.3994 1.82146L10.3017 2.8746L15.1301 7.7015L16.2495 6.67012L11.3994 1.82146ZM9.59866 3.64269L2.0067 11.167C1.92044 11.2112 1.84454 11.2731 1.784 11.3487C1.72347 11.4244 1.67969 11.512 1.65554 11.6058L0.0303998 17.1138C-0.00629362 17.2327 -0.00983976 17.3594 0.020143 17.4803C0.0501258 17.6011 0.112502 17.7115 0.200559 17.7995C0.288616 17.8875 0.39902 17.9499 0.519888 17.9799C0.640756 18.0098 0.767512 18.0063 0.886515 17.9696L6.39543 16.3457C6.52048 16.327 6.63792 16.2741 6.73473 16.1928C6.83154 16.1115 6.90395 16.005 6.94393 15.8851L14.4277 8.46888L13.3968 7.43821L5.71489 15.1395L2.62052 16.0382L1.96175 15.3803L2.90565 12.1556L10.5215 4.56384L9.59866 3.64269ZM11.2667 5.33193L3.56372 13.055L4.6825 13.2958L4.8363 14.3279L12.5617 6.62589L11.2667 5.33193Z"
                  fill="#0AA1DD"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-[8px] mt-3">
              <div>
                <h6 className="text-[#0aa1dd]">Company Name</h6>
                <p className="text-[#9B9B9A] text-[12px]">
                  Alpha Solutions Pvt. Ltd.
                </p>
              </div>
              <div>
                <h6 className="text-[#0aa1dd]">Company Address</h6>
                <p className="text-[#9B9B9A] text-[12px] w-2/3">
                  No.99 Street Name, Area name, District, State, Country - Pin
                  code
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-[#0aa1dd] text-[16px]">Social Media</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.033 0.000234916C13.8216 -0.00341406 13.6117 0.03548 13.4156 0.114603C13.2196 0.193727 13.0414 0.311463 12.8918 0.460808L12.1895 1.18467L16.8198 5.83603L17.5221 5.11288C17.6736 4.96166 17.7938 4.78206 17.8758 4.58437C17.9578 4.38668 18 4.17476 18 3.96074C18 3.74673 17.9578 3.53481 17.8758 3.33712C17.7938 3.13942 17.6736 2.95983 17.5221 2.80861L15.1961 0.482573C14.887 0.175113 14.4691 0.00181398 14.033 0.000234916ZM11.3994 1.82146L10.3017 2.8746L15.1301 7.7015L16.2495 6.67012L11.3994 1.82146ZM9.59866 3.64269L2.0067 11.167C1.92044 11.2112 1.84454 11.2731 1.784 11.3487C1.72347 11.4244 1.67969 11.512 1.65554 11.6058L0.0303998 17.1138C-0.00629362 17.2327 -0.00983976 17.3594 0.020143 17.4803C0.0501258 17.6011 0.112502 17.7115 0.200559 17.7995C0.288616 17.8875 0.39902 17.9499 0.519888 17.9799C0.640756 18.0098 0.767512 18.0063 0.886515 17.9696L6.39543 16.3457C6.52048 16.327 6.63792 16.2741 6.73473 16.1928C6.83154 16.1115 6.90395 16.005 6.94393 15.8851L14.4277 8.46888L13.3968 7.43821L5.71489 15.1395L2.62052 16.0382L1.96175 15.3803L2.90565 12.1556L10.5215 4.56384L9.59866 3.64269ZM11.2667 5.33193L3.56372 13.055L4.6825 13.2958L4.8363 14.3279L12.5617 6.62589L11.2667 5.33193Z"
                  fill="#0AA1DD"
                />
              </svg>
            </div>
            {/* icons */}
            <div className="mt-3 grid grid-cols-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <g clipPath="url(#clip0_432_779)">
                  <path
                    d="M0.973927 22.7248C0.972857 26.5897 1.98272 30.3634 3.90295 33.6897L0.790283 45.0546L12.4208 42.005C15.6376 43.7562 19.2419 44.6739 22.9045 44.6741H22.9141C35.0052 44.6741 44.8476 34.8353 44.8528 22.7421C44.8551 16.8821 42.575 11.3717 38.4325 7.22598C34.2908 3.08063 28.7824 0.796498 22.9133 0.793823C10.8208 0.793823 0.979097 10.6321 0.974105 22.7248"
                    fill="url(#paint0_linear_432_779)"
                  />
                  <path
                    d="M0.190775 22.7176C0.189527 26.7215 1.23558 30.6303 3.22428 34.0757L0 45.8479L12.0475 42.6891C15.367 44.4989 19.1044 45.4532 22.9075 45.4546H22.9173C35.4421 45.4546 45.6381 35.2618 45.6434 22.7358C45.6455 16.6652 43.2835 10.9567 38.993 6.66251C34.702 2.36882 28.9966 0.00249612 22.9173 0C10.3903 0 0.195767 10.1913 0.190775 22.7176ZM7.36553 33.4823L6.91569 32.7682C5.0247 29.7615 4.0266 26.2869 4.02803 22.719C4.03195 12.3075 12.5052 3.8369 22.9244 3.8369C27.9701 3.83904 32.7121 5.80598 36.2787 9.37473C39.8451 12.9438 41.8076 17.6882 41.8063 22.7343C41.8017 33.1459 33.3282 41.6175 22.9173 41.6175H22.9098C19.5199 41.6157 16.1952 40.7054 13.2958 38.985L12.6058 38.5758L5.45653 40.4502L7.36553 33.4823Z"
                    fill="url(#paint1_linear_432_779)"
                  />
                  <path
                    d="M17.2371 13.2201C16.8116 12.2746 16.364 12.2555 15.9594 12.2389C15.6281 12.2247 15.2494 12.2257 14.8711 12.2257C14.4924 12.2257 13.8771 12.3682 13.357 12.9361C12.8364 13.5045 11.3694 14.878 11.3694 17.6717C11.3694 20.4656 13.4043 23.1655 13.6879 23.5448C13.972 23.9233 17.6163 29.8398 23.388 32.1159C28.1849 34.0074 29.161 33.6312 30.2021 33.5364C31.2433 33.4419 33.5619 32.1632 34.0349 30.8372C34.5083 29.5114 34.5083 28.3749 34.3664 28.1374C34.2244 27.9009 33.8457 27.7587 33.2779 27.4749C32.7098 27.1909 29.9181 25.8171 29.3976 25.6276C28.877 25.4382 28.4985 25.3438 28.1198 25.9123C27.7411 26.48 26.6537 27.7587 26.3222 28.1374C25.9911 28.517 25.6597 28.5643 25.092 28.2803C24.5238 27.9953 22.695 27.3965 20.5253 25.4621C18.8373 23.957 17.6976 22.0983 17.3663 21.5297C17.0351 20.962 17.3308 20.6542 17.6156 20.3713C17.8707 20.1169 18.1836 19.7082 18.4678 19.3768C18.751 19.0451 18.8455 18.8085 19.0348 18.4298C19.2243 18.0508 19.1295 17.7192 18.9877 17.4351C18.8455 17.1511 17.742 14.3428 17.2371 13.2201Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_432_779"
                    x1="2203.91"
                    y1="4426.87"
                    x2="2203.91"
                    y2="0.793823"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1FAF38" />
                    <stop offset="1" stopColor="#60D669" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_432_779"
                    x1="2282.17"
                    y1="4584.79"
                    x2="2282.17"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9F9F9" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <clipPath id="clip0_432_779">
                    <rect width="45.6434" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <path
                  d="M40 20.4302C40 9.38455 31.0456 0.430176 20 0.430176C8.95437 0.430176 0 9.38455 0 20.4302C0 30.4127 7.31375 38.6869 16.875 40.1872V26.2114H11.7969V20.4302H16.875V16.0239C16.875 11.0114 19.8609 8.24267 24.4294 8.24267C26.6175 8.24267 28.9062 8.6333 28.9062 8.6333V13.5552H26.3844C23.8998 13.5552 23.125 15.0969 23.125 16.6786V20.4302H28.6719L27.7852 26.2114H23.125V40.1872C32.6862 38.6869 40 30.4128 40 20.4302Z"
                  fill="#1877F2"
                />
              </svg>
              {/* InstaGram */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <g clipPath="url(#clip0_432_787)">
                    <path
                      d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z"
                      fill="url(#paint0_radial_432_787)"
                    />
                    <path
                      d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z"
                      fill="url(#paint1_radial_432_787)"
                    />
                    <path
                      d="M19.0013 4.15625C14.9701 4.15625 14.464 4.17391 12.8808 4.24591C11.3005 4.31834 10.2219 4.56846 9.27809 4.93555C8.30166 5.31466 7.47353 5.82187 6.64852 6.64718C5.82276 7.47234 5.31555 8.30048 4.93525 9.27645C4.56713 10.2205 4.31671 11.2997 4.24561 12.8792C4.1748 14.4626 4.15625 14.9687 4.15625 19.0001C4.15625 23.0316 4.17406 23.536 4.24591 25.1192C4.31864 26.6995 4.56876 27.7781 4.93555 28.7219C5.31495 29.6983 5.82216 30.5265 6.64748 31.3515C7.47234 32.1772 8.30048 32.6856 9.27616 33.0648C10.2207 33.4318 11.2995 33.682 12.8795 33.7544C14.4629 33.8264 14.9684 33.844 18.9996 33.844C23.0313 33.844 23.5357 33.8264 25.1189 33.7544C26.6992 33.682 27.779 33.4318 28.7235 33.0648C29.6995 32.6856 30.5265 32.1772 31.3512 31.3515C32.1769 30.5265 32.684 29.6983 33.0645 28.7224C33.4293 27.7781 33.6799 26.6992 33.7541 25.1195C33.8252 23.5362 33.8438 23.0316 33.8438 19.0001C33.8438 14.9687 33.8252 14.4629 33.7541 12.8795C33.6799 11.2992 33.4293 10.2207 33.0645 9.2769C32.684 8.30048 32.1769 7.47234 31.3512 6.64718C30.5256 5.82157 29.6998 5.31436 28.7227 4.9357C27.7764 4.56846 26.6971 4.3182 25.1168 4.24591C23.5334 4.17391 23.0293 4.15625 18.9967 4.15625H19.0013ZM17.6697 6.83124C18.065 6.83065 18.506 6.83124 19.0013 6.83124C22.9648 6.83124 23.4344 6.84549 24.9995 6.91659C26.4468 6.9828 27.2323 7.2246 27.7556 7.42781C28.4483 7.69678 28.9422 8.01845 29.4614 8.53813C29.981 9.05766 30.3025 9.5524 30.5722 10.2452C30.7754 10.7677 31.0175 11.5532 31.0834 13.0005C31.1545 14.5653 31.1699 15.0352 31.1699 18.9967C31.1699 22.9582 31.1545 23.4283 31.0834 24.993C31.0172 26.4403 30.7754 27.2258 30.5722 27.7485C30.3032 28.4412 29.981 28.9345 29.4614 29.4537C28.9419 29.9732 28.4486 30.2948 27.7556 30.5639C27.2329 30.768 26.4468 31.0092 24.9995 31.0754C23.4347 31.1465 22.9648 31.1619 19.0013 31.1619C15.0378 31.1619 14.568 31.1465 13.0033 31.0754C11.556 31.0086 10.7705 30.7668 10.2468 30.5636C9.55418 30.2945 9.05929 29.9729 8.53976 29.4534C8.02023 28.9339 7.69871 28.4403 7.429 27.7473C7.22579 27.2246 6.98369 26.4391 6.91778 24.9918C6.84668 23.427 6.83243 22.957 6.83243 18.993C6.83243 15.0291 6.84668 14.5616 6.91778 12.9967C6.98398 11.5495 7.22579 10.7639 7.429 10.2407C7.69812 9.54795 8.02023 9.0532 8.53991 8.53367C9.05944 8.01414 9.55418 7.69248 10.2469 7.42291C10.7702 7.21881 11.556 6.9776 13.0033 6.9111C14.3726 6.8492 14.9033 6.83065 17.6697 6.82753V6.83124ZM26.9249 9.2959C25.9415 9.2959 25.1437 10.093 25.1437 11.0766C25.1437 12.06 25.9415 12.8578 26.9249 12.8578C27.9083 12.8578 28.7062 12.06 28.7062 11.0766C28.7062 10.0932 27.9083 9.2953 26.9249 9.2953V9.2959ZM19.0013 11.3771C14.7916 11.3771 11.3785 14.7903 11.3785 19.0001C11.3785 23.21 14.7916 26.6215 19.0013 26.6215C23.2112 26.6215 26.6232 23.21 26.6232 19.0001C26.6232 14.7905 23.2109 11.3771 19.001 11.3771H19.0013ZM19.0013 14.0521C21.7339 14.0521 23.9494 16.2673 23.9494 19.0001C23.9494 21.7327 21.7339 23.9482 19.0013 23.9482C16.2686 23.9482 14.0535 21.7327 14.0535 19.0001C14.0535 16.2673 16.2686 14.0521 19.0013 14.0521Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_432_787"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.0937 40.9267) rotate(-90) scale(37.6608 35.0275)"
                    >
                      <stop stopColor="#FFDD55" />
                      <stop offset="0.1" stopColor="#FFDD55" />
                      <stop offset="0.5" stopColor="#FF543E" />
                      <stop offset="1" stopColor="#C837AB" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_432_787"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-6.36515 2.73734) rotate(78.681) scale(16.8346 69.3927)"
                    >
                      <stop stopColor="#3771C8" />
                      <stop offset="0.128" stopColor="#3771C8" />
                      <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id="clip0_432_787">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Tweeter */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z"
                    fill="white"
                  />
                  <path
                    d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z"
                    fill="#1D9BF0"
                  />
                  <path
                    d="M28.0648 12.8547C28.0803 13.0778 28.0803 13.301 28.0803 13.5263C28.0803 20.3884 22.8563 28.3025 13.3041 28.3025V28.2982C10.4822 28.3023 7.71877 27.4941 5.34375 25.9702C5.75409 26.0196 6.16641 26.0442 6.57984 26.0452C8.91872 26.047 11.1903 25.2625 13.0296 23.8178C11.9459 23.7973 10.8957 23.4387 10.0258 22.7921C9.15595 22.1455 8.50986 21.2433 8.17791 20.2115C8.95595 20.3615 9.75805 20.3309 10.5224 20.122C8.09972 19.6325 6.35667 17.5039 6.35667 15.0317V14.9659C7.07891 15.3681 7.88721 15.5911 8.71355 15.6158C6.43177 14.0908 5.72836 11.0551 7.1062 8.68162C8.40998 10.286 10.0367 11.5982 11.8806 12.5329C13.7246 13.4677 15.7445 14.004 17.8093 14.1072C17.6034 13.221 17.6339 12.2964 17.8975 11.4256C18.1611 10.5549 18.6488 9.76867 19.3116 9.14554C21.4033 7.17932 24.6929 7.28015 26.6591 9.37068C27.8221 9.14107 28.9374 8.71472 29.9569 8.10998C29.5692 9.31241 28.758 10.3331 27.674 10.9821C28.7035 10.8608 29.7088 10.5852 30.6562 10.1646C29.9593 11.2084 29.0818 12.1192 28.0648 12.8547Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="text-[#0aa1dd] text-[16px]">Password</h4>
              <p className="text-[#9B9B9A] text-[12px]">Change Your Password</p>
            </div>
            <h4 className="text-[#0aa1dd] text-[12px]">Change</h4>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div>
              <h4 className="text-[#0aa1dd] text-[16px]">Expiry Date</h4>
              <p className="text-[#545454] text-[12px]">01/01/2024, 12.00AM</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div>
              <h4 className="text-[#0aa1dd] text-[16px]">Number of Users</h4>
              <p className="text-[#545454] text-[12px]">02</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0AA1DD",
              padding: "12px 13px",
              borderRadius: 5,
              border: "none",
              fontSize: 14,
              fontWeight: "normal",
              color: "#fff",
              gap: 5,
              marginTop: 60,
            }}
          >
            Reset Wallet Balance
          </button>
        </div>
      </div>
      <div className="row"></div>
    </Fragment>
  );
};

export default AppProfile;