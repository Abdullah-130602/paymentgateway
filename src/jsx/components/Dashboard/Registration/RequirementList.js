import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const RequirementList = () => {
  const [stop] = useState();

  // Requirement form API
  const [reqForm, setReqForm] = useState([]);
  let accessToken = JSON.parse(localStorage.getItem("userDetails"));
  const RequirementForm = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "requirements/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setReqForm(result.requirements);
      })
      .catch((error) => console.log("error", error));
  };

  // Registration
  const [Data, setData] = useState();
  const getAdminDashboardData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + `registrations/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.registrations);
      })
      .catch((error) => console.log("error", error));
  };

  // Send Form
  // Send Form

  const [IsLoading, setIsLoading] = useState(false);

  const handleSendForm = async (id) => {
    setIsLoading(true);
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

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "requirements/create",
      requestOptions
    )
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
          setIsLoading(false);
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
          setIsLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    RequirementForm();
    getAdminDashboardData();
  }, [stop]);
  

  return (
    <Fragment>
      <div className="flex flex-col gap-10 mb-10">
        {/* Table 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#0aa1dd] text-[20px] font-semibold">
            Registrations
          </h4>
          <div className="p-3 bg-white rounded-lg">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-[#0aa1dd]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Requirement Form Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data && Data.length > 0 ? (
                    Data.map((el, i) => {
                      return (
                        <tr
                          className="bg-white text-[12px] font-normal text-[#545454] border-b"
                          key={i}
                        >
                          <th className="px-6 py-3 font-normal">{i + 1}</th>
                          <th className="px-6 py-3 font-normal">
                            {el.User.username}
                          </th>
                          <td className="px-6 py-3">{el.User.mobileNumber}</td>
                          <td className="px-6 py-3">{el.User.email}</td>
                          <td className="px-6 py-3">
                            {el.status === "form sent" ? (
                              <div className="p-2 rounded-md bg-green-600 text-white text-center text-xs">
                                Sent
                              </div>
                            ) : (
                              <button
                                className="p-2 rounded-md bg-[#0aa1dd] text-white text-xs w-full"
                                onClick={() => handleSendForm(el.id)}
                                disabled={IsLoading}
                              >
                                {IsLoading[el.id] ? <Spinner animation="border" variant="light" /> : "Send Form"}
                              </button>
                            )}
                          </td>
                          <td className="px-6 py-3">
                            {el.status === "form sent" ? (
                              <h6 className="font-normal text-green-600 text-sm">
                                Submitted{" "}
                                <span>
                                  <i className="bi bi-check2-all ml-1 text-base"></i>
                                </span>
                              </h6>
                            ) : el.status === 0 ? (
                              <h6 className="font-normal text-orange-500 text-sm">
                                Pending
                                <span>
                                  <i className="bi bi-stopwatch ml-2 text-base"></i>
                                </span>
                              </h6>
                            ) : (
                              <h6 className="font-normal text-[#0aa1dd] text-sm">
                                Form To Be Send
                                <span>
                                  <i className="bi bi-info-circle ml-2 text-base"></i>
                                </span>
                              </h6>
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
        </div>
        {/* Table 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#0aa1dd] text-[20px] font-semibold">
            Requirement Forms
          </h4>
          <div className="p-3 bg-white rounded-lg">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-[#0aa1dd]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Company Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reqForm && reqForm.length > 0 ? (
                    reqForm.map((el, i) => {
                      return (
                        <tr
                          className="bg-white text-[12px] font-normal text-[#545454] border-b"
                          key={i}
                        >
                          <th className="px-6 py-3 font-normal">{i + 1}</th>
                          <th className="px-6 py-3 font-normal">
                            {el.Registration.User.username}
                          </th>
                          <th className="px-6 py-3 font-normal">
                            {el.companyName === null
                              ? "Not Mentioned"
                              : el.CompanyName}
                          </th>
                          <td className="px-6 py-3">
                            {el.Registration.User.mobileNumber
                              ? el.Registration.User.mobileNumber
                              : "Not Mentioned"}
                          </td>
                          <td className="px-6 py-3">
                            {el.Registration.User.email}
                          </td>
                          <td className="px-6 py-3">{el.status}</td>
                          <td className="px-6 py-3 cursor-pointer">
                            <Link
                              to={`/create-account/${el.id}/${el.Registration.User.id}/${el.Registration.User.username}'s-Account`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M4.5 2.25C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V11.25C15.75 10.9516 15.8685 10.6655 16.0795 10.4545C16.2905 10.2435 16.5766 10.125 16.875 10.125C17.1734 10.125 17.4595 10.2435 17.6705 10.4545C17.8815 10.6655 18 10.9516 18 11.25V13.5C18 14.6935 17.5259 15.8381 16.682 16.682C15.8381 17.5259 14.6935 18 13.5 18H4.5C3.30653 18 2.16193 17.5259 1.31802 16.682C0.474106 15.8381 0 14.6935 0 13.5V4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0H6.75C7.04837 0 7.33452 0.118527 7.5455 0.329505C7.75647 0.540484 7.875 0.826631 7.875 1.125C7.875 1.42337 7.75647 1.70952 7.5455 1.92049C7.33452 2.13147 7.04837 2.25 6.75 2.25H4.5ZM11.25 2.25C10.9516 2.25 10.6655 2.13147 10.4545 1.92049C10.2435 1.70952 10.125 1.42337 10.125 1.125C10.125 0.826631 10.2435 0.540484 10.4545 0.329505C10.6655 0.118527 10.9516 0 11.25 0H16.875C17.1734 0 17.4595 0.118527 17.6705 0.329505C17.8815 0.540484 18 0.826631 18 1.125V6.75C18 7.04837 17.8815 7.33452 17.6705 7.5455C17.4595 7.75647 17.1734 7.875 16.875 7.875C16.5766 7.875 16.2905 7.75647 16.0795 7.5455C15.8685 7.33452 15.75 7.04837 15.75 6.75V3.84075L12.0465 7.5465C11.9419 7.6511 11.8177 7.73407 11.6811 7.79068C11.5444 7.84729 11.3979 7.87642 11.25 7.87642C11.1021 7.87642 10.9556 7.84729 10.8189 7.79068C10.6823 7.73407 10.5581 7.6511 10.4535 7.5465C10.3489 7.4419 10.2659 7.31773 10.2093 7.18106C10.1527 7.0444 10.1236 6.89792 10.1236 6.75C10.1236 6.60208 10.1527 6.4556 10.2093 6.31894C10.2659 6.18227 10.3489 6.0581 10.4535 5.9535L14.1593 2.25H11.25Z"
                                  fill="#545454"
                                />
                              </svg>
                            </Link>
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
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default RequirementList;
