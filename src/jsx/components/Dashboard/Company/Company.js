import React, { Fragment, useEffect, useState } from "react";
import team1 from "../../../../images/team/team1.png";
import team2 from "../../../../images/team/team2.png";
import team3 from "../../../../images/team/team3.png";
import green from "../../../../images/theme/green.png";
import red from "../../../../images/theme/red.png";
import orange from "../../../../images/theme/orange.png";
import purple from "../../../../images/theme/purple.png";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";

const Company = () => {
  // const data = [
  //   {
  //     img: team1,
  //     name: "Mohammed Imran Khan",
  //     comp: "Alpha Solutions Pvt. Ltd.",
  //     mobile: "+965 9845 3214",
  //     email: "abdullahbandarkar.130602@gmail.com",
  //     address:
  //       "No.99 Street name, Area name, District, State, Country - Pin code",
  //     expire: "01/01/2025",
  //     No_users: "02",
  //     No_invoices: "24964",
  //     No_Customer: "13500",
  //     subscription: "12 Months (1299 KWD)",
  //     theme: theme,
  //   },
  //   {
  //     img: team2,
  //     name: "Mohammed Ashraf Khan",
  //     comp: "Beta Solutions Pvt. Ltd.",
  //     mobile: "+965 9845 3214",
  //     email: "cryptographicsolu...",
  //     address:
  //       "No.99 Street name, Area name, District, State, Country - Pin code",
  //     expire: "01/01/2024",
  //     No_users: "02",
  //     No_invoices: "24964",
  //     No_Customer: "13500",
  //     subscription: "03 Months (499 KWD)",
  //     theme: theme,
  //   },
  //   {
  //     img: team3,
  //     name: "Mohammed Ashraf Khan",
  //     comp: "unique Solutions Pvt. Ltd.",
  //     mobile: "+965 9845 3214",
  //     email: "cryptographicsolu...",
  //     address:
  //       "No.99 Street name, Area name, District, State, Country - Pin code",
  //     expire: "01/05/2024",
  //     No_users: "02",
  //     No_invoices: "24964",
  //     No_Customer: "13500",
  //     subscription: "03 Months (499 KWD)",
  //     theme: theme,
  //   },
  // ];

  const handleCopyClick = (email) => {
    const textarea = document.createElement("textarea");
    textarea.value = email;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);
    toast.success("✅ Copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  let accessToken = JSON.parse(localStorage.getItem("userDetails"));

  const [Company, setCompany] = useState([]);

  const getAllClients = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      "https://payment-gateway-api-fem2.onrender.com/api/client/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCompany(result.clients);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        {Company &&
          Company.map((el, i) => {
            return (
              <div
                className="bg-white p-5 rounded-xl shadow-2xl relative"
                key={i}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={el.img}
                      alt="Company Logo"
                      className="h-full w-full md:w-auto"
                    />
                  </div>
                  {/* Profile */}
                  <div className="flex flex-col justify-between">
                    <h6 className="text-[14px] font-[500] text-[#545454]">
                      {el.Users.length > 0
                        ? el.Users[0].username
                        : "Not Mentioned"}
                    </h6>
                    <h6 className="text-[14px] font-semibold text-[#0aa1dd]">
                      {el.Requirement.companyName}
                    </h6>
                    <div className="flex gap-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 12C19.9996 9.8784 19.1566 7.84381 17.6564 6.34361C16.1562 4.84342 14.1216 4.00042 12 4V5.6C13.2657 5.60029 14.5029 5.97571 15.5553 6.67883C16.6077 7.38195 17.4281 8.38122 17.9128 9.5504C18.2345 10.327 18.4 11.1594 18.4 12H20ZM4 10.4V6.4C4 6.18783 4.08429 5.98434 4.23431 5.83431C4.38434 5.68429 4.58783 5.6 4.8 5.6H8.8C9.01217 5.6 9.21566 5.68429 9.36569 5.83431C9.51571 5.98434 9.6 6.18783 9.6 6.4V9.6C9.6 9.81217 9.51571 10.0157 9.36569 10.1657C9.21566 10.3157 9.01217 10.4 8.8 10.4H7.2C7.2 12.0974 7.87428 13.7253 9.07452 14.9255C10.2747 16.1257 11.9026 16.8 13.6 16.8V15.2C13.6 14.9878 13.6843 14.7843 13.8343 14.6343C13.9843 14.4843 14.1878 14.4 14.4 14.4H17.6C17.8122 14.4 18.0157 14.4843 18.1657 14.6343C18.3157 14.7843 18.4 14.9878 18.4 15.2V19.2C18.4 19.4122 18.3157 19.6157 18.1657 19.7657C18.0157 19.9157 17.8122 20 17.6 20H13.6C8.2984 20 4 15.7016 4 10.4Z"
                            fill="#0AA1DD"
                          />
                          <path
                            d="M16.4339 10.1633C16.6754 10.7455 16.7996 11.3697 16.7995 12.0001H15.3595C15.3596 11.5588 15.2728 11.1218 15.104 10.7141C14.9351 10.3064 14.6877 9.93599 14.3756 9.62396C14.0636 9.31193 13.6932 9.06444 13.2855 8.89562C12.8778 8.72681 12.4408 8.63997 11.9995 8.64007V7.20007C12.9488 7.20012 13.8768 7.48167 14.6661 8.00911C15.4554 8.53656 16.0706 9.28621 16.4339 10.1633Z"
                            fill="#0AA1DD"
                          />
                          <rect
                            x="0.489329"
                            y="0.489329"
                            width="23.0213"
                            height="23.0213"
                            rx="4.40396"
                            stroke="#0AA1DD"
                            strokeWidth="0.978658"
                          />
                        </svg>
                      </div>
                      <h6 className="text-[14px] font-[500] text-[#000]">
                        {el.Users.length > 0
                          ? el.Users[0].mobileNumber
                          : "Not Mentioned"}
                      </h6>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.0005 16.9999V6.99992C20.0005 6.0777 19.3703 5.33325 18.5896 5.33325H5.41142C4.63071 5.33325 4.00049 6.0777 4.00049 6.99992V16.9999C4.00049 17.9221 4.63071 18.6666 5.41142 18.6666H18.5896C19.3703 18.6666 20.0005 17.9221 20.0005 16.9999ZM18.7683 6.8777C19.0787 7.24436 18.9094 7.62214 18.7401 7.81103L14.9211 11.9444L18.5896 16.4555C18.7024 16.611 18.7777 16.8555 18.646 17.0221C18.5237 17.1999 18.2415 17.1888 18.1192 17.0777L14.0087 12.9333L11.9958 15.0999L9.99226 12.9333L5.88173 17.0777C5.75945 17.1888 5.47727 17.1999 5.35499 17.0221C5.2233 16.8555 5.29855 16.611 5.41142 16.4555L9.07985 11.9444L5.26092 7.81103C5.09161 7.62214 4.9223 7.24436 5.2327 6.8777C5.54311 6.51103 5.86292 6.68881 6.1263 6.95547L11.9958 12.5555L17.8747 6.95547C18.1381 6.68881 18.4579 6.51103 18.7683 6.8777Z"
                            fill="#0AA1DD"
                          />
                          <rect
                            x="0.489329"
                            y="0.489329"
                            width="23.0213"
                            height="23.0213"
                            rx="4.40396"
                            stroke="#0AA1DD"
                            strokeWidth="0.978658"
                          />
                        </svg>
                      </div>
                      <div
                        className="text-[14px] font-[400] text-[#000] cursor-pointer hidden md:hidden lg:block"
                        onClick={() => handleCopyClick(el.email)}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={<Tooltip id="button-tooltip">Copy</Tooltip>}
                        >
                          <span>
                            {el.Users.length > 0
                              ? el.Users[0].email
                              : "Not Mentioned"}
                            ...
                          </span>
                        </OverlayTrigger>
                      </div>
                      <h6 className="text-[14px] font-[400] text-[#000] block md:block lg:hidden">
                        {el.Users.length > 0
                          ? el.Users[0].email
                          : "Not Mentioned"}
                      </h6>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex flex-col justify-between">
                    <div className="">
                      <h6 className="text-[14px] font-[500] text-[#545454]">
                        Address
                      </h6>
                      <p className="text-[12px] w-48">
                        {el.Requirement.companyAddress}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <h6 className="text-[14px] font-[400] text-[#000]">
                        Expiry Dates
                      </h6>
                      <p className="text-[14px] font-[400] text-green-500">
                        {moment(el.subscriptionEndDate).format("DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                  {/* Details */}
                  <div>
                    <div className="flex justify-between gap-4">
                      <p>Number of Users</p>
                      <p>{el.Requirement.numberOfUsers}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p>Number of Invoices</p>
                      <p>{el.No_invoices}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p>Number of Customers</p>
                      <p>{el.No_Customer}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p>Subscription</p>
                      <p>{el.Requirement.Subscription.duration} Months</p>
                    </div>
                  </div>
                  {/* Theme */}
                  <div className="flex justify-center">
                    <img
                      src={
                        el.Requirement.Theme.color === "purple"
                          ? purple
                          : el.Theme.color === "red"
                          ? red
                          : el.Theme.color === "green"
                          ? green
                          : orange
                      }
                      alt=""
                    />
                  </div>
                  <div className="absolute top-2 right-2 md:top-5 md:right-5">
                    <Dropdown
                      as="li"
                      className="nav-item dropdown header-profile"
                    >
                      <Dropdown.Toggle
                        variant=""
                        as="a"
                        className="nav-link i-false c-pointer"
                        role="button"
                        data-toggle="dropdown"
                      >
                        <i className="bi bi-three-dots-vertical text-lg"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        align="right"
                        className="dropdown-menu dropdown-menu-end"
                      >
                        <Link
                          to=""
                          className="text-[#0aa1dd] p-1 px-2 ml-3 font-semibold"
                        >
                          View Invoices
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Company;
