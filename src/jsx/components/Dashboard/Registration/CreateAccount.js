import React, { Fragment, useEffect, useState } from "react";
import RegLogo from "../../../../images/RegLogo.png";
import themeImg from "../../../../images/Theme.png";
import { useParams } from "react-router-dom";

const CreateAccount = () => {
  const Subscription = [{ valid: 3 }, { valid: 6 }, { valid: 12 }];
  const PaymentOptions = [{ name: "KNet" }, { name: "Mastercard" }];
  const documments = [
    { name: "Driving License" },
    { name: "Civil ID" },
    { name: "Company ID" },
    { name: "Company ID" },
  ];

  // User API
  let { id } = useParams();
  // let { userId } = useParams();
  let accessToken = JSON.parse(localStorage.getItem("userDetails"));
  const [UserData, setUserData] = useState();
  const getUserData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + `users/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setUserData(result.user);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Approval API
  const [SubDomain, setSubDomain] = useState();
  const [AccountForUsers, setAccountForUsers] = useState();
  const [Document, setDocument] = useState();
  const [IsPaymentCompleted, setIsPaymentCompleted] = useState();
  const [Theme, setTheme] = useState();
  const [PayOptions, setPayOptions] = useState();

  const handleApprove = async (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    let raw = JSON.stringify({
      subdomainStatus: SubDomain === undefined ? false : true,
      paymentStatus: IsPaymentCompleted === undefined ? false : true,
      selectedTheme: Theme === undefined ? false : true,
      documentVerification: Document === undefined ? false : true,
      selectedPaymentOption: PayOptions === undefined ? false : true,
      accountCreatedForUsers: AccountForUsers === undefined ? false : true,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL +
        `requirements/approve/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Fragment>
      <form action="">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-[24px]">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="Mohammed Imran Khan"
              defaultValue={UserData && UserData.username}
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="mobile"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="mobile"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="+965 9865 2376"
              defaultValue={UserData && UserData.mobileNumber}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="CompName"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="CompName"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="Alpha Solutions Pvt. Ltd."
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="cryptographicsolutions@gmail.com"
              defaultValue={UserData && UserData.email}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="users"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Number of Users <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="users"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="02"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subDomain"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Subdomain Titlex <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subDomain"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="bnr.linkwork.in"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subDomain"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Company Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="subDomain"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none"
              placeholder="No,99 Street name, Area name, Thaluk, District name, State, Country - Pin code"
              rows={3}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subDomain"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Social Media
            </label>
            <div className="bg-white p-5 rounded-lg flex items-center gap-5">
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
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subDomain"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Company Logo <span className="text-red-500">*</span>
            </label>
            <img src={RegLogo} alt="" className="w-[102px] h-[94px] " />
          </div>
        </div>
        {/* Radio/Checkbox/Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-9 gap-y-4 mt-[24px]">
          <div>
            <label className="text-[#545454] text-[14px] font-semibold">
              Subscription
            </label>
            {Subscription.map((el, i) => {
              return (
                <div className="form-check custom-radio mb-2" key={i}>
                  <input
                    type="radio"
                    className="form-check-input"
                    id={el.valid}
                    name="subscriptionGroup"
                  />
                  <label
                    className="form-check-label text-[14px] text-[#545454] font-semibold"
                    htmlFor={el.valid}
                  >
                    {el.valid} Months
                  </label>
                </div>
              );
            })}
          </div>
          <div>
            <label className="text-[#545454] text-[14px] font-semibold">
              Payment Options
            </label>
            {PaymentOptions.map((el, i) => {
              return (
                <div className="form-check custom-checkbox mb-2" key={i}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={el.name}
                    name="subscriptionGroup"
                  />
                  <label
                    className="form-check-label text-[14px] text-[#545454] font-semibold"
                    htmlFor={el.name}
                  >
                    {el.name}
                  </label>
                </div>
              );
            })}
          </div>
          <div>
            <label className="text-[#545454] text-[14px] font-semibold">
              Required Documents
            </label>
            {documments.map((el, i) => {
              return (
                <div
                  className="bg-white p-3 rounded-xl flex justify-between items-center mb-2.5"
                  key={i}
                >
                  <h6 className="text-[#A1A1A1] text-[14px] font-[500]">
                    {el.name}
                  </h6>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M4.5 2.25C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V11.25C15.75 10.9516 15.8685 10.6655 16.0795 10.4545C16.2905 10.2435 16.5766 10.125 16.875 10.125C17.1734 10.125 17.4595 10.2435 17.6705 10.4545C17.8815 10.6655 18 10.9516 18 11.25V13.5C18 14.6935 17.5259 15.8381 16.682 16.682C15.8381 17.5259 14.6935 18 13.5 18H4.5C3.30653 18 2.16193 17.5259 1.31802 16.682C0.474106 15.8381 0 14.6935 0 13.5V4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0H6.75C7.04837 0 7.33452 0.118527 7.5455 0.329505C7.75647 0.540484 7.875 0.826631 7.875 1.125C7.875 1.42337 7.75647 1.70952 7.5455 1.92049C7.33452 2.13147 7.04837 2.25 6.75 2.25H4.5ZM11.25 2.25C10.9516 2.25 10.6655 2.13147 10.4545 1.92049C10.2435 1.70952 10.125 1.42337 10.125 1.125C10.125 0.826631 10.2435 0.540484 10.4545 0.329505C10.6655 0.118527 10.9516 0 11.25 0H16.875C17.1734 0 17.4595 0.118527 17.6705 0.329505C17.8815 0.540484 18 0.826631 18 1.125V6.75C18 7.04837 17.8815 7.33452 17.6705 7.5455C17.4595 7.75647 17.1734 7.875 16.875 7.875C16.5766 7.875 16.2905 7.75647 16.0795 7.5455C15.8685 7.33452 15.75 7.04837 15.75 6.75V3.84075L12.0465 7.5465C11.9419 7.6511 11.8177 7.73407 11.6811 7.79068C11.5444 7.84729 11.3979 7.87642 11.25 7.87642C11.1021 7.87642 10.9556 7.84729 10.8189 7.79068C10.6823 7.73407 10.5581 7.6511 10.4535 7.5465C10.3489 7.4419 10.2659 7.31773 10.2093 7.18106C10.1527 7.0444 10.1236 6.89792 10.1236 6.75C10.1236 6.60208 10.1527 6.4556 10.2093 6.31894C10.2659 6.18227 10.3489 6.0581 10.4535 5.9535L14.1593 2.25H11.25Z"
                        fill="#A1A1A1"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <label className="text-[#545454] text-[14px] font-semibold">
              Invoice Theme
            </label>
            <div>
              <img src={themeImg} alt="" />
            </div>
          </div>
        </div>
        {/* Bottom Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-[24px] mt-[24px]">
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Subdomain Created"
              name="subscriptionGroup"
              onChange={(e) => setSubDomain(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="Subdomain Created"
            >
              Subdomain Created
            </label>
          </div>
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Account"
              name="subscriptionGroup"
              onChange={(e) => setAccountForUsers(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="Account"
            >
              Account Created for Users
            </label>
          </div>
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Document"
              name="subscriptionGroup"
              onChange={(e) => setDocument(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="Document"
            >
              Document Verification
            </label>
          </div>
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="IsPayComplete"
              name="subscriptionGroup"
              onChange={(e) => setIsPaymentCompleted(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="IsPayComplete"
            >
              Payment Completed
            </label>
          </div>
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Theme"
              name="subscriptionGroup"
              onChange={(e) => setTheme(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="Theme"
            >
              Selected Theme
            </label>
          </div>
          <div className="form-check custom-checkbox mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="PayOptions"
              name="subscriptionGroup"
              onChange={(e) => setPayOptions(e.target.checked)}
            />
            <label
              className="form-check-label text-[14px] text-[#545454] font-semibold"
              htmlFor="PayOptions"
            >
              Selected Payment Option
            </label>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center mt-[24px] mb-5 md:mb-0">
          <button
            className="uppercase bg-[#0aa1dd] text-white p-3 px-8 rounded-lg font-semibold text-[14px]"
            onClick={handleApprove}
          >
            create account
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateAccount;
