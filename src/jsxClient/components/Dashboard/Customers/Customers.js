import React from "react";
import { Form } from "react-bootstrap";

const Customers = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-14">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
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
            <option value="1" className="text-[#A1A1A1] py-3">
              User 01
            </option>
            <option value="2" className="text-[#A1A1A1] py-3">
              Two
            </option>
            <option value="3" className="text-[#A1A1A1] py-3">
              Three
            </option>
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
  );
};

export default Customers;
