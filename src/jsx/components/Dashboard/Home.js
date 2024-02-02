import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const Home = () => {

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

  // Time Bar Logic
  const [StartDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [EndDate, setEndDate] = useState(
    moment().add(1, "days").format("YYYY-MM-DD")
  );
  const [time, setTime] = useState("Today");
  const sortByTime = [
    { name: "Today" },
    { name: "Weekly" },
    { name: "Monthly" },
  ];

  const initialStartDate = moment().startOf("day");
  const initialEndDate = moment().endOf("day");

  const handleDateRangeChange = (event, picker) => {
    if (picker.startDate.format("YYYY-MM-DD") > moment().format("YYYY-MM-DD")) {
      toast.error("You Cannot see the future!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setStartDate(picker.startDate.format("YYYY-MM-DD"));
      setEndDate(picker.endDate.format("YYYY-MM-DD"));
    }
  };

  const handleChangeDate = (el) => {
    setTime(el.name);
    if (el.name === "Today") {
      setStartDate(moment().format("YYYY-MM-DD"));
      setEndDate(moment().add(1, "days").format("YYYY-MM-DD"));
    } else if (el.name === "Weekly") {
      setStartDate(moment().subtract(7, "days").format("YYYY-MM-DD"));
      setEndDate(moment().format("YYYY-MM-DD"));
    } else if (el.name === "Monthly") {
      setStartDate(moment().subtract(30, "days").format("YYYY-MM-DD"));
      setEndDate(moment().format("YYYY-MM-DD"));
    }
  };

  // API
  const [Data, setData] = useState();

  let accessToken = JSON.parse(localStorage.getItem("userDetails"));
  const getAdminDashboardData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL +
        `dashboard?startDate=${StartDate}&endDate=${EndDate}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      })
      .catch((error) => console.log("error", error));
  };

  // Send Form

  const [IsLoading, setIsLoading] = useState({});

  const handleSendForm = async (id) => {
    setIsLoading((prevLoadingState) => ({ ...prevLoadingState, [id]: true }));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var raw = JSON.stringify({
      registrationId: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL +"requirements/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (
          result.message === "Requirement form has been sent through E-mail"
        ) {
          toast.success("✅ Message has been sent to user", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          getAdminDashboardData();
          setIsLoading((prevLoadingState) => ({
            ...prevLoadingState,
            [id]: false,
          }));
        } else {
          toast.error(`${result.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading((prevLoadingState) => ({
            ...prevLoadingState,
            [id]: false,
          }));
        }
      })
      .catch((error) => console.log("error", error));
  };

  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
    getAdminDashboardData();
  }, [StartDate, EndDate]);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            {/* calendar */}
            <div className="flex gap-[17px] justify-end">
              <div className="p-2 rounded-[4px] bg-white mb-5 flex gap-2">
                {sortByTime.map((el, i) => {
                  return (
                    <button
                      className={`${
                        time === el.name
                          ? "bg-[#0aa1dd] p-1 rounded-[4px] px-2 text-xs text-white font-semibold"
                          : "text-[#0aa1dd] font-[500] text-xs px-2"
                      } `}
                      key={i}
                      onClick={() => handleChangeDate(el)}
                    >
                      {el.name}
                    </button>
                  );
                })}
              </div>
              <div className="p-2 rounded-[4px] bg-white mb-5">
                <DateRangePicker
                  initialSettings={{
                    startDate: initialStartDate.format("MM/DD/YYYY"),
                    endDate: initialEndDate.format("MM/DD/YYYY"),
                  }}
                  onApply={handleDateRangeChange}
                >
                  <button className="text-[#0aa1dd] font-[500] text-xs px-2 p-1 flex items-center gap-2">
                    Date
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.6 1.6H12V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0C10.9878 0 10.7843 0.0842854 10.6343 0.234315C10.4843 0.384344 10.4 0.587827 10.4 0.8V1.6H5.6V0.8C5.6 0.587827 5.51571 0.384344 5.36569 0.234315C5.21566 0.0842854 5.01217 0 4.8 0C4.58783 0 4.38434 0.0842854 4.23431 0.234315C4.08429 0.384344 4 0.587827 4 0.8V1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7471 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V4C16 3.36348 15.7471 2.75303 15.2971 2.30294C14.847 1.85286 14.2365 1.6 13.6 1.6ZM14.4 13.6C14.4 13.8122 14.3157 14.0157 14.1657 14.1657C14.0157 14.3157 13.8122 14.4 13.6 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V8H14.4V13.6ZM14.4 6.4H1.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H4V4C4 4.21217 4.08429 4.41566 4.23431 4.56569C4.38434 4.71571 4.58783 4.8 4.8 4.8C5.01217 4.8 5.21566 4.71571 5.36569 4.56569C5.51571 4.41566 5.6 4.21217 5.6 4V3.2H10.4V4C10.4 4.21217 10.4843 4.41566 10.6343 4.56569C10.7843 4.71571 10.9878 4.8 11.2 4.8C11.4122 4.8 11.6157 4.71571 11.7657 4.56569C11.9157 4.41566 12 4.21217 12 4V3.2H13.6C13.8122 3.2 14.0157 3.28429 14.1657 3.43431C14.3157 3.58434 14.4 3.78783 14.4 4V6.4Z"
                          fill="#0AA1DD"
                        />
                      </svg>
                    </span>
                  </button>
                </DateRangePicker>
              </div>
            </div>
            {/* Main Crds */}
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card cardBG">
                    <div className="card-body tryal row py-20">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 25,
                          marginTop: 35,
                        }}
                      >
                        <div>
                          <h4 style={{ color: "#fff" }}>
                            Number of Requirement Forms
                          </h4>
                          <h1
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: 43,
                            }}
                          >
                            {Data && Data.totalRequirements}
                          </h1>
                        </div>
                        <div>
                          <h4 style={{ color: "#fff" }}>
                            Number of Regsiteration Forms
                          </h4>
                          <h1
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: 43,
                            }}
                          >
                            {Data && Data.totalRegistrations}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid Cards */}
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-6 col-sm-6">
                      <div className="card">
                        <div className="card-body d-flex p-5 justify-content-between">
                          <div>
                            <h4 className="fs-18 font-w500 text-[#545454] mb-4">
                              Number of Requirement Forms To Be Submitted
                            </h4>
                            <div className="d-flex align-items-center">
                              <h2 className="fs-32 font-w700 mb-0">
                                {Data && Data.requirementsYetToBeSubmitted}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-sm-6">
                      <div className="card">
                        <div className="card-body d-flex p-5 justify-content-between">
                          <div>
                            <h4 className="fs-18 font-w500 text-[#545454] mb-4">
                              Expiring Clients
                            </h4>
                            <div className="d-flex align-items-center">
                              <h2 className="fs-32 font-w700 mb-0">
                                {Data && Data.expiringClients}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-sm-6">
                      <div className="card">
                        <div className="card-body d-flex p-5 justify-content-between">
                          <div>
                            <h4 className="fs-18 font-w500 text-[#545454] mb-4">
                              Requirement Forms Waiting For Activation
                            </h4>
                            <div className="d-flex align-items-center">
                              <h2 className="fs-32 font-w700 mb-0">
                                {Data && Data.requirementsWaitingForActivation}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="card">
                        <div className="card-body d-flex p-5 justify-content-between">
                          <div>
                            <h4 className="fs-18 font-w500 text-[#545454] mb-4">
                              Number Of Clients
                            </h4>
                            <div className="d-flex align-items-center">
                              <h2 className="fs-32 font-w700 mb-0">
                                {Data && Data.requirementsYetToBeSubmitted}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {/* Buttons */}
              <div className="flex flex-col md:flex-col lg:flex-row gap-5 mt-4 md:mt0 lg:mt-0">
                <div className="flex gap-3 items-center w-full md:w-full lg:w-1/2">
                  <button className="bg-[#0AA1DD] p-5 text-[14px] md:text-[18px] w-full font-semibold text-white rounded-lg flex gap-2 items-center transition-all ease-in-out duration-500 hover:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M0 3.25C0 2.38805 0.34241 1.5614 0.951903 0.951903C1.5614 0.34241 2.38805 0 3.25 0H16.8409C17.2677 0 17.6903 0.0840637 18.0846 0.247392C18.4789 0.410719 18.8372 0.650113 19.139 0.951903C19.4408 1.25369 19.6802 1.61197 19.8435 2.00628C20.0068 2.40059 20.0909 2.8232 20.0909 3.25V16.5455H26V21.5682C26 22.7436 25.5331 23.8708 24.702 24.702C23.8708 25.5331 22.7436 26 21.5682 26H4.43182C3.25643 26 2.12918 25.5331 1.29805 24.702C0.466922 23.8708 0 22.7436 0 21.5682V3.25ZM20.0909 24.2273H21.5682C22.2734 24.2273 22.9498 23.9471 23.4484 23.4484C23.9471 22.9498 24.2273 22.2734 24.2273 21.5682V18.3182H20.0909V24.2273ZM4.72727 6.79545C4.72727 7.28473 5.12436 7.68182 5.61364 7.68182H14.4773C14.7124 7.68182 14.9378 7.58843 15.104 7.42221C15.2703 7.25598 15.3636 7.03053 15.3636 6.79545C15.3636 6.56038 15.2703 6.33493 15.104 6.1687C14.9378 6.00248 14.7124 5.90909 14.4773 5.90909H5.61364C5.37856 5.90909 5.15311 6.00248 4.98688 6.1687C4.82066 6.33493 4.72727 6.56038 4.72727 6.79545ZM5.61364 11.8182C5.37856 11.8182 5.15311 11.9116 4.98688 12.0778C4.82066 12.244 4.72727 12.4695 4.72727 12.7045C4.72727 12.9396 4.82066 13.1651 4.98688 13.3313C5.15311 13.4975 5.37856 13.5909 5.61364 13.5909H14.4773C14.7124 13.5909 14.9378 13.4975 15.104 13.3313C15.2703 13.1651 15.3636 12.9396 15.3636 12.7045C15.3636 12.4695 15.2703 12.244 15.104 12.0778C14.9378 11.9116 14.7124 11.8182 14.4773 11.8182H5.61364ZM4.72727 18.6136C4.72727 19.1029 5.12436 19.5 5.61364 19.5H9.75C9.98508 19.5 10.2105 19.4066 10.3768 19.2404C10.543 19.0742 10.6364 18.8487 10.6364 18.6136C10.6364 18.3786 10.543 18.1531 10.3768 17.9869C10.2105 17.8207 9.98508 17.7273 9.75 17.7273H5.61364C5.37856 17.7273 5.15311 17.8207 4.98688 17.9869C4.82066 18.1531 4.72727 18.3786 4.72727 18.6136Z"
                        fill="white"
                      />
                    </svg>
                    Create Invoice
                  </button>
                  <button className="bg-[#0AA1DD] p-5 text-[14px] md:text-[18px] w-full font-semibold text-white rounded-lg flex gap-3 items-center transition-all ease-in-out duration-500 hover:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="17"
                      viewBox="0 0 28 24"
                      fill="none"
                    >
                      <path
                        d="M22.3999 20.8V24H0V20.8C0 20.8 0 14.4 11.2 14.4C22.3999 14.4 22.3999 20.8 22.3999 20.8ZM16.7999 5.60006C16.7999 4.49249 16.4715 3.40979 15.8562 2.48888C15.2408 1.56797 14.3662 0.850207 13.343 0.426357C12.3197 0.00250824 11.1937 -0.10839 10.1075 0.107686C9.02117 0.323763 8.02335 0.857109 7.24018 1.64028C6.45701 2.42345 5.92366 3.42127 5.70758 4.50756C5.49151 5.59385 5.60241 6.71982 6.02625 7.74308C6.4501 8.76635 7.16787 9.64094 8.08878 10.2563C9.00969 10.8716 10.0924 11.2 11.2 11.2C12.6852 11.2 14.1095 10.61 15.1597 9.55985C16.2099 8.50965 16.7999 7.08527 16.7999 5.60006ZM22.3039 14.4C23.2875 15.1612 24.0924 16.1287 24.6618 17.2344C25.2312 18.3402 25.5515 19.5572 25.5999 20.8V24H31.9999V20.8C31.9999 20.8 31.9999 14.992 22.3039 14.4ZM20.7999 8.41261e-05C19.6986 -0.0060482 18.6216 0.323212 17.7119 0.944081C18.6838 2.30205 19.2064 3.93013 19.2064 5.60006C19.2064 7.27 18.6838 8.89807 17.7119 10.256C18.6216 10.8769 19.6986 11.2062 20.7999 11.2C22.2851 11.2 23.7095 10.61 24.7597 9.55985C25.8099 8.50965 26.3999 7.08527 26.3999 5.60006C26.3999 4.11486 25.8099 2.69048 24.7597 1.64028C23.7095 0.590081 22.2851 8.41261e-05 20.7999 8.41261e-05Z"
                        fill="white"
                      />
                    </svg>
                    Add Customers
                  </button>
                </div>
                <div className="w-full md:w-full lg:w-1/2">
                  <div className="bg-[#fff] p-5 rounded-xl shadow-2xl flex justify-between items-center">
                    <h4 className="fs-18 font-w500 text-[#545454]">
                      Number of Transactions
                    </h4>
                    <h2 className="fs-32 font-w700 mb-0">786</h2>
                  </div>
                </div>
              </div>
              {/* Table */}
              <div className="flex flex-col md:flex-col lg:flex-row gap-5 mb-5">
                <div className="bg-[#fff] p-5 rounded-xl shadow-2xl w-full md:w-full lg:w-1/2">
                  <h1 className="font-semibold text-[#0aa1dd] py-2 text-lg">
                    Registrations
                  </h1>
                  <div className="relative overflow-x-scroll">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-scroll">
                      <thead className="text-xs text-gray-700 uppercase bg-[#eee]">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            Name
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Mobile
                          </th>
                          <th scope="col" className="px-4 py-3 w-6">
                            Email
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data && Data.registrations.length > 0 ? (
                          Data.registrations.map((el, i) => {
                            return (
                              <tr className="bg-white border-b" key={i}>
                                <th
                                  scope="row"
                                  className="px-3 py-2 text-[#545454] text-nowrap"
                                >
                                  {el.User !== null ? el.User.username : null}
                                </th>
                                <td className="px-3 py-2 text-[#545454] text-nowrap">
                                  {el.User !== null
                                    ? el.User.mobileNumber
                                    : null}
                                </td>
                                <td
                                  className="px-3 py-2 text-[#545454] cursor-pointer"
                                  onClick={() => handleCopyClick(el.User)}
                                >
                                  <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                      <Tooltip id="button-tooltip">
                                        Copy
                                      </Tooltip>
                                    }
                                  >
                                    <span>
                                      {el.User !== null ? el.User.email : null}
                                    </span>
                                  </OverlayTrigger>
                                </td>
                                <td className="px-3 py-2 text-[#545454]">
                                  {el.status !== "Pending" ? (
                                    <div className="p-2 rounded-md bg-green-600 text-white text-center text-xs font-semibold w-[98px]">
                                      Sent
                                    </div>
                                  ) : (
                                    <button
                                      className="p-2 rounded-md bg-[#0aa1dd] text-white text-center text-xs font-semibold w-[98px]"
                                      onClick={() => handleSendForm(el.id)}
                                      disabled={IsLoading[el.id]}
                                    >
                                      {IsLoading[el.id] ? (
                                        <Spinner
                                          as="span"
                                          animation="border"
                                          size="sm"
                                          role="status"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        "Send Form"
                                      )}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr className="font-semibold text-red-500">
                            <td className="py-[12.5px] px-3">No Data Found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bg-[#fff] p-5 rounded-xl shadow-2xl w-full md:w-full lg:w-1/2">
                  <h1 className="font-semibold text-[#0aa1dd] text-primary text-lg py-2">
                    Expiring Clients Today
                  </h1>
                  <div className="relative overflow-x-scroll">
                    <table className="w-full text-sm text-left rtl:text-right overflow-x-scroll">
                      <thead className="text-xs text-gray-700 uppercase bg-[#eee]">
                        <tr>
                          <th scope="col" className="px-3 py-[12.5px]">
                            Client Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[12.5px] whitespace-nowrap"
                          >
                            Comapany Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-[12.5px] whitespace-nowrap"
                          >
                            Contact Number
                          </th>
                          <th scope="col" className="px-3 py-[12.5px]">
                            Subscription
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data && Data.clientsExpiring > 0 ? (
                          Data.requirements.map((el, i) => {
                            return (
                              <tr className="bg-white border-b" key={i}>
                                <th
                                  scope="row"
                                  className="px-3 py-[12.5px] font-medium text-gray-900 whitespace-nowrap"
                                >
                                  {el.name}
                                </th>
                                <td className="px-3 py-[12.5px]">
                                  {el.company}
                                </td>
                                <td className="px-3 py-[12.5px]">
                                  {el.mobile}
                                </td>
                                <td className="px-3 py-[12.5px]">
                                  {el.subscription} Months
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr className="font-semibold text-red-500">
                            <td className="py-[12.5px] px-3 ">No Data Found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Home;
