import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Table.css";

const InvoiceList = () => {
  const [time, setTime] = useState("All");
  const sortByTime = [
    { name: "All" },
    { name: "Paid" },
    { name: "unpaid" },
    { name: "Expired" },
  ];
  const handleChangeDate = (el) => {
    setTime(el.name);
  };

  return (
    <div>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="p-2 rounded-[4px] bg-white flex gap-2">
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
          <button className="text-xs font-semibold text-white bg-[#0aa1dd] py-2 px-3 rounded-md flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.0832 2.5C14.309 2.49988 14.527 2.58317 14.6953 2.73389C14.8635 2.8846 14.9702 3.09213 14.9948 3.31667L14.9998 3.41667V5.83333H15.8332C16.4708 5.8333 17.0844 6.07694 17.5484 6.5144C18.0123 6.95187 18.2916 7.55009 18.329 8.18667L18.3332 8.33333V14.1667C18.3333 14.5871 18.1745 14.9921 17.8886 15.3005C17.6027 15.6088 17.2108 15.7976 16.7915 15.8292L16.6665 15.8333H14.9998V17.4167C15 17.6425 14.9167 17.8605 14.7659 18.0288C14.6152 18.197 14.4077 18.3037 14.1832 18.3283L14.0832 18.3333H5.9165C5.69062 18.3334 5.47265 18.2502 5.3044 18.0994C5.13615 17.9487 5.02948 17.7412 5.00484 17.5167L4.99984 17.4167V15.8333H3.33317C2.91269 15.8335 2.5077 15.6747 2.19938 15.3888C1.89106 15.1028 1.70221 14.711 1.67067 14.2917L1.6665 14.1667V8.33333C1.66647 7.69566 1.91011 7.08207 2.34757 6.61812C2.78504 6.15416 3.38326 5.87491 4.01984 5.8375L4.1665 5.83333H4.99984V3.41667C4.99972 3.19079 5.08301 2.97281 5.23372 2.80457C5.38444 2.63632 5.59197 2.52964 5.8165 2.505L5.9165 2.5H14.0832ZM13.3332 13.3333H6.6665V16.6667H13.3332V13.3333ZM15.8332 7.5H4.1665C3.96239 7.50003 3.76539 7.57496 3.61286 7.7106C3.46033 7.84623 3.36288 8.03312 3.339 8.23583L3.33317 8.33333V14.1667H4.99984V12.5833C4.99972 12.3575 5.08301 12.1395 5.23372 11.9712C5.38444 11.803 5.59197 11.6963 5.8165 11.6717L5.9165 11.6667H14.0832C14.309 11.6666 14.527 11.7498 14.6953 11.9006C14.8635 12.0513 14.9702 12.2588 14.9948 12.4833L14.9998 12.5833V14.1667H16.6665V8.33333C16.6665 8.11232 16.5787 7.90036 16.4224 7.74408C16.2661 7.5878 16.0542 7.5 15.8332 7.5ZM14.1665 8.33333C14.3789 8.33357 14.5832 8.4149 14.7376 8.56071C14.8921 8.70651 14.985 8.90579 14.9975 9.11783C15.0099 9.32986 14.9409 9.53865 14.8046 9.70153C14.6683 9.8644 14.4749 9.96908 14.264 9.99417L14.1665 10H12.4998C12.2874 9.99976 12.0831 9.91843 11.9287 9.77263C11.7742 9.62682 11.6813 9.42754 11.6689 9.2155C11.6564 9.00347 11.7254 8.79468 11.8617 8.63181C11.998 8.46893 12.1914 8.36425 12.4023 8.33917L12.4998 8.33333H14.1665ZM13.3332 4.16667H6.6665V5.83333H13.3332V4.16667Z"
                  fill="white"
                />
              </svg>
            </span>
            Print
          </button>
        </div>
        {/* Filter */}
        <div className="flex justify-end">
          <div className="flex gap-2 items-center">
            <p className="text-[#0AA1DD] text-sm">Advance Filter</p>
            <button className="border-[2px] p-1 border-[#0aa1dd] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M21.6425 0H0.330021C0.240051 0.00694095 0.156034 0.0476488 0.0948273 0.113956C0.033621 0.180262 -0.000246098 0.267263 2.12422e-05 0.3575V1.54C-0.000804896 1.6612 0.022474 1.78136 0.0685041 1.89348C0.114534 2.00561 0.182397 2.10746 0.268146 2.19312L8.51814 10.4431V17.3181L13.5025 19.8V10.4294L21.7525 2.17937C21.9103 2.00913 21.9986 1.78591 22 1.55375V0.3575C22 0.262685 21.9623 0.171754 21.8953 0.104709C21.8282 0.0376652 21.7373 0 21.6425 0Z"
                  fill="#0AA1DD"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Grid Filters */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {/* user */}
          <div className="w-full flex flex-col">
            <label htmlFor="user" className="text-[#555] text-sm font-semibold">
              User
            </label>
            <Form.Select
              aria-label="Default select example"
              style={{ outline: "none", borderRadius: 5, border: 0 }}
              className="ring-0 focus:ring-transparent p-2 bg-white border-none rounded-[5px] text-[#A1A1A1]"
            >
              <option value="1" className="text-[#A1A1A1] py-3">User 01</option>
              <option value="2" className="text-[#A1A1A1] py-3">Two</option>
              <option value="3" className="text-[#A1A1A1] py-3">Three</option>
            </Form.Select>
          </div>
          {/* Expire */}
          <div className="w-full flex flex-col">
            <label htmlFor="user" className="text-[#555] text-sm font-semibold">
              Expire Date
            </label>
            <div className="relative">
              <input
                type="text"
                disabled
                className="bg-white p-2 px-3 rounded-[5px] w-full"
                placeholder="dd/mm/yyyy"
              />
              <button className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.6 1.6H12V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0C10.9878 0 10.7843 0.0842854 10.6343 0.234315C10.4843 0.384344 10.4 0.587827 10.4 0.8V1.6H5.6V0.8C5.6 0.587827 5.51571 0.384344 5.36569 0.234315C5.21566 0.0842854 5.01217 0 4.8 0C4.58783 0 4.38434 0.0842854 4.23431 0.234315C4.08429 0.384344 4 0.587827 4 0.8V1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7471 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V4C16 3.36348 15.7471 2.75303 15.2971 2.30294C14.847 1.85286 14.2365 1.6 13.6 1.6ZM14.4 13.6C14.4 13.8122 14.3157 14.0157 14.1657 14.1657C14.0157 14.3157 13.8122 14.4 13.6 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V8H14.4V13.6ZM14.4 6.4H1.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H4V4C4 4.21217 4.08429 4.41566 4.23431 4.56569C4.38434 4.71571 4.58783 4.8 4.8 4.8C5.01217 4.8 5.21566 4.71571 5.36569 4.56569C5.51571 4.41566 5.6 4.21217 5.6 4V3.2H10.4V4C10.4 4.21217 10.4843 4.41566 10.6343 4.56569C10.7843 4.71571 10.9878 4.8 11.2 4.8C11.4122 4.8 11.6157 4.71571 11.7657 4.56569C11.9157 4.41566 12 4.21217 12 4V3.2H13.6C13.8122 3.2 14.0157 3.28429 14.1657 3.43431C14.3157 3.58434 14.4 3.78783 14.4 4V6.4Z"
                    fill="#545454"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Start */}
          <div className="w-full flex flex-col">
            <label htmlFor="user" className="text-[#555] text-sm font-semibold">
              Start Date
            </label>
            <div className="relative">
              <input
                type="text"
                disabled
                className="bg-white p-2 px-3 rounded-[5px] w-full"
                placeholder="dd/mm/yyyy"
              />
              <button className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.6 1.6H12V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0C10.9878 0 10.7843 0.0842854 10.6343 0.234315C10.4843 0.384344 10.4 0.587827 10.4 0.8V1.6H5.6V0.8C5.6 0.587827 5.51571 0.384344 5.36569 0.234315C5.21566 0.0842854 5.01217 0 4.8 0C4.58783 0 4.38434 0.0842854 4.23431 0.234315C4.08429 0.384344 4 0.587827 4 0.8V1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7471 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V4C16 3.36348 15.7471 2.75303 15.2971 2.30294C14.847 1.85286 14.2365 1.6 13.6 1.6ZM14.4 13.6C14.4 13.8122 14.3157 14.0157 14.1657 14.1657C14.0157 14.3157 13.8122 14.4 13.6 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V8H14.4V13.6ZM14.4 6.4H1.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H4V4C4 4.21217 4.08429 4.41566 4.23431 4.56569C4.38434 4.71571 4.58783 4.8 4.8 4.8C5.01217 4.8 5.21566 4.71571 5.36569 4.56569C5.51571 4.41566 5.6 4.21217 5.6 4V3.2H10.4V4C10.4 4.21217 10.4843 4.41566 10.6343 4.56569C10.7843 4.71571 10.9878 4.8 11.2 4.8C11.4122 4.8 11.6157 4.71571 11.7657 4.56569C11.9157 4.41566 12 4.21217 12 4V3.2H13.6C13.8122 3.2 14.0157 3.28429 14.1657 3.43431C14.3157 3.58434 14.4 3.78783 14.4 4V6.4Z"
                    fill="#545454"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* End */}
          <div className="w-full flex flex-col">
            <label htmlFor="user" className="text-[#555] text-sm font-semibold">
              End Date
            </label>
            <div className="relative">
              <input
                type="text"
                disabled
                className="bg-white p-2 px-3 rounded-[5px] w-full"
                placeholder="dd/mm/yyyy"
              />
              <button className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.6 1.6H12V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0C10.9878 0 10.7843 0.0842854 10.6343 0.234315C10.4843 0.384344 10.4 0.587827 10.4 0.8V1.6H5.6V0.8C5.6 0.587827 5.51571 0.384344 5.36569 0.234315C5.21566 0.0842854 5.01217 0 4.8 0C4.58783 0 4.38434 0.0842854 4.23431 0.234315C4.08429 0.384344 4 0.587827 4 0.8V1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7471 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V4C16 3.36348 15.7471 2.75303 15.2971 2.30294C14.847 1.85286 14.2365 1.6 13.6 1.6ZM14.4 13.6C14.4 13.8122 14.3157 14.0157 14.1657 14.1657C14.0157 14.3157 13.8122 14.4 13.6 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V8H14.4V13.6ZM14.4 6.4H1.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H4V4C4 4.21217 4.08429 4.41566 4.23431 4.56569C4.38434 4.71571 4.58783 4.8 4.8 4.8C5.01217 4.8 5.21566 4.71571 5.36569 4.56569C5.51571 4.41566 5.6 4.21217 5.6 4V3.2H10.4V4C10.4 4.21217 10.4843 4.41566 10.6343 4.56569C10.7843 4.71571 10.9878 4.8 11.2 4.8C11.4122 4.8 11.6157 4.71571 11.7657 4.56569C11.9157 4.41566 12 4.21217 12 4V3.2H13.6C13.8122 3.2 14.0157 3.28429 14.1657 3.43431C14.3157 3.58434 14.4 3.78783 14.4 4V6.4Z"
                    fill="#545454"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="relative overflow-x-auto">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-3 py-4">Quick View</th>
                <th className="px-3 py-4 text-left">Payment Ref</th>
                <th className="px-3 py-4 text-left">Created Date</th>
                <th className="px-3 py-4 text-left">ID-Customer</th>
                <th className="px-3 py-4 text-left">Invoice Ref</th>
                <th className="px-3 py-4 text-left">Invoice Value</th>
                <th className="px-3 py-4 text-left">Invoice Option</th>
                <th className="px-3 py-4 text-left">Invoice Status</th>
                <th className="px-3 py-4 text-left">Created by</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-transparent border-2 border-black lg:text-black text-base">
                <td className="p-3 font-medium capitalize text-center">
                  <i className="bi bi-eye-fill text-gray-800 text-xl" />
                </td>
                <td className="p-3">AJA/22-23/1</td>
                <td className="p-3">20/12/2023</td>
                <td className="p-3 uppercase">Alpha</td>
                <td className="p-3 uppercase">Apple</td>
                <td className="p-3 uppercase">12</td>
                <td className="p-3 uppercase">Link</td>
                <td className="p-3 uppercase text-green-600 font-semibold text-base">
                  Paid
                </td>
                <td className="p-3 uppercase">Alpha</td>
              </tr>
              <tr className="bg-transparent border-2 border-black lg:text-black text-base">
                <td className="p-3 font-medium capitalize text-center">
                  <i className="bi bi-eye-fill text-gray-800 text-xl" />
                </td>
                <td className="p-3">AJA/22-23/1</td>
                <td className="p-3">20/12/2023</td>
                <td className="p-3 uppercase">Alpha</td>
                <td className="p-3 uppercase">Apple</td>
                <td className="p-3 uppercase">12</td>
                <td className="p-3 uppercase">Link</td>
                <td className="p-3 uppercase text-red-500 font-semibold text-base">
                  unpaid
                </td>
                <td className="p-3 uppercase">Alpha</td>
              </tr>
              <tr className="bg-transparent border-2 border-black lg:text-black text-base">
                <td className="p-3 font-medium capitalize text-center">
                  <i className="bi bi-eye-fill text-gray-800 text-xl" />
                </td>
                <td className="p-3">AJA/22-23/1</td>
                <td className="p-3">20/12/2023</td>
                <td className="p-3 uppercase">Alpha</td>
                <td className="p-3 uppercase">Apple</td>
                <td className="p-3 uppercase">12</td>
                <td className="p-3 uppercase">Link</td>
                <td className="p-3 uppercase text-orange-400 font-semibold">
                  Pending
                </td>
                <td className="p-3 uppercase">Alpha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
