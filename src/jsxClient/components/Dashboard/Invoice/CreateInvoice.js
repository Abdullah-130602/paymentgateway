import React from "react";

const CreateInvoice = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* First Row */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <div className="bg-white border-r rounded-l-lg">
              <select
                id="countries"
                className="bg-white text-gray-900 text-sm rounded-lg block py-[11.8px] px-[15px]"
              >
                <option className="p-1" defaultValue>
                  +965
                </option>
                <option className="p-1" value="US">
                  +989
                </option>
                <option className="p-1" value="CA">
                  +91
                </option>
              </select>
            </div>
            <input
              type="number"
              name="name"
              id=""
              className="text-[14px] py-[11px] px-[15px] rounded-r-lg outline-none w-full"
              placeholder="Mohammed Imran Khan"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Send Invoice via <span className="text-red-500">*</span>
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[11px] px-[15px]"
            >
              <option className="p-1" defaultValue value="US">
                SMS
              </option>
              <option className="p-1" value="CA">
                WhatsApp
              </option>
            </select>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-[#545454] text-[14px] font-semibold"
            >
              Expire Date <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <input
                type="number"
                name="name"
                id=""
                className="text-[14px] py-[11px] px-[15px] rounded-l-lg outline-none w-full"
                placeholder="01/01/2024 11:11 AM"
              />
              <div className="bg-white py-[10.5px] px-[15px] border-l rounded-r-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M18.7 2.2H16.5V1.1C16.5 0.808262 16.3841 0.528472 16.1778 0.322183C15.9715 0.115892 15.6917 0 15.4 0C15.1083 0 14.8285 0.115892 14.6222 0.322183C14.4159 0.528472 14.3 0.808262 14.3 1.1V2.2H7.7V1.1C7.7 0.808262 7.58411 0.528472 7.37782 0.322183C7.17153 0.115892 6.89174 0 6.6 0C6.30826 0 6.02847 0.115892 5.82218 0.322183C5.61589 0.528472 5.5 0.808262 5.5 1.1V2.2H3.3C2.42479 2.2 1.58542 2.54768 0.966548 3.16655C0.347678 3.78542 0 4.62479 0 5.5V18.7C0 19.5752 0.347678 20.4146 0.966548 21.0335C1.58542 21.6523 2.42479 22 3.3 22H18.7C19.5752 22 20.4146 21.6523 21.0335 21.0335C21.6523 20.4146 22 19.5752 22 18.7V5.5C22 4.62479 21.6523 3.78542 21.0335 3.16655C20.4146 2.54768 19.5752 2.2 18.7 2.2ZM19.8 18.7C19.8 18.9917 19.6841 19.2715 19.4778 19.4778C19.2715 19.6841 18.9917 19.8 18.7 19.8H3.3C3.00826 19.8 2.72847 19.6841 2.52218 19.4778C2.31589 19.2715 2.2 18.9917 2.2 18.7V11H19.8V18.7ZM19.8 8.8H2.2V5.5C2.2 5.20826 2.31589 4.92847 2.52218 4.72218C2.72847 4.51589 3.00826 4.4 3.3 4.4H5.5V5.5C5.5 5.79174 5.61589 6.07153 5.82218 6.27782C6.02847 6.48411 6.30826 6.6 6.6 6.6C6.89174 6.6 7.17153 6.48411 7.37782 6.27782C7.58411 6.07153 7.7 5.79174 7.7 5.5V4.4H14.3V5.5C14.3 5.79174 14.4159 6.07153 14.6222 6.27782C14.8285 6.48411 15.1083 6.6 15.4 6.6C15.6917 6.6 15.9715 6.48411 16.1778 6.27782C16.3841 6.07153 16.5 5.79174 16.5 5.5V4.4H18.7C18.9917 4.4 19.2715 4.51589 19.4778 4.72218C19.6841 4.92847 19.8 5.20826 19.8 5.5V8.8Z"
                    fill="#545454"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex flex-col">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Customer Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
            placeholder="Enter your customer name"
          />
        </div>

        <div className="w-full lg:w-1/4 flex flex-col">
          {/* Second input taking 25% space */}
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Invoice Value <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
            placeholder="Kuwait [KD]"
          />
        </div>

        <div className="w-full lg:w-1/4 flex flex-col">
          {/* Second input taking 25% space */}
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Invoice Ref <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
          />
        </div>
      </div>
      {/* Third Row */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-4 relative">
        {/* <div className="w-1/2"> */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Customer Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
            placeholder="jhon@example.com"
          />
        </div>

        <div className="w-full lg:w-1/4 flex flex-col">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Customer Ref <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
            placeholder="Kuwait [KD]"
          />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
          ></textarea>
        </div>
        <div className="w-[74%] absolute bottom-0 hidden md:hidden lg:block">
          <label
            htmlFor="name"
            className="text-[#545454] text-[14px] font-semibold"
          >
            Terms & Conditions <span className="text-red-500">*</span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
          ></textarea>
        </div>
      </div>
      {/* fourth for the mobile */}
      <div className="w-full block md:block lg:hidden">
        <label
          htmlFor="name"
          className="text-[#545454] text-[14px] font-semibold"
        >
          Terms & Conditions <span className="text-red-500">*</span>
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          className="text-[14px] py-[11px] px-[15px] rounded-lg outline-none w-full"
        ></textarea>
      </div>
      {/* Fifth row */}
      <div className="flex items-center gap-2 mt-[66px]">
        <div>
          <input type="checkbox" />
        </div>
        <div>
          <h1 className="text-[#545454] font-semibold text-base">Add Item</h1>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center">
        <button className="text-white bg-[#0aa1dd] font-semibold text-[20px] py-2 px-4 rounded-lg">CREATE INVOICE</button>
      </div>
    </div>
  );
};

export default CreateInvoice;
