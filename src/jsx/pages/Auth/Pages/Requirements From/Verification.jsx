import React from "react";
import { FileInput } from "../../Components";
import { useRequirements } from "../../Context/RequirementsProvider";
import themeOne from "../../Images/Theme/Theme 1.svg";
import themeTwo from "../../Images/Theme/Theme 2.svg";
import themeThree from "../../Images/Theme/Theme 3.svg";
import themeFour from "../../Images/Theme/Theme 4.svg";

const Verification = () => {
  const {
    requirementForm,
    handleChange,
    handleFileChange,
    handleCheckBoxChange,
  } = useRequirements();
  const {
    subscription,
    drivingLicense,
    civilId,
    companyId,
    paymentOption,
    invoiceTheme,
  } = requirementForm;

  return (
    <div>
      <div className="form-group-login">
        <label className="text-bold text-dark-login">Subscription</label>
        <div>
          <input
            type="radio"
            id="3"
            name="subscription"
            value="3"
            checked={subscription === "3"}
            onChange={handleChange}
          />
          <label htmlFor="3">3 Months</label>
          <input
            type="radio"
            id="6"
            name="subscription"
            value="6"
            checked={subscription === "6"}
            onChange={handleChange}
          />
          <label htmlFor="3">6 Months</label>
          <input
            type="radio"
            id="12"
            name="subscription"
            value="12"
            checked={subscription === "12"}
            onChange={handleChange}
          />
          <label htmlFor="12">12 Months</label>
        </div>
      </div>
      <div className="form-group-login">
        <label className="text-bold text-dark-login">Upload Documents</label>
        <FileInput
          type="file"
          id="driving-license"
          name="drivingLicense"
          placeholder={
            !drivingLicense ? "Upload Driving License" : drivingLicense.name
          }
          onChange={handleFileChange}
        />
        <FileInput
          type="file"
          id="civil-id"
          name="civilId"
          placeholder={!civilId ? "Upload Civil Id" : civilId.name}
          onChange={handleFileChange}
        />
        <FileInput
          type="file"
          id="company-id"
          name="companyId"
          placeholder={!companyId ? "Upload Company Id" : companyId.name}
          onChange={handleFileChange}
        />
      </div>

      <div className="form-group-login">
        <label className="text-bold text-dark-login">
          Payment Option for the Company
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
              <input
                type="checkbox"
                name="knet"
                checked={paymentOption.knet}
                onChange={handleCheckBoxChange}
              />
              <label htmlFor="" className="font-bold">
                KNET
              </label>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
            <input
              type="checkbox"
              name="mastercard"
              checked={paymentOption.mastercard}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="">Mastercard</label>
          </div>
        </div>
      </div>

      <div className="form-group-login">
        <label className="text-bold text-dark-login">Invoice Theme</label>
        <div className="grid-login">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={themeOne} alt="" />
            <div>
              <input
                type="radio"
                name="invoiceTheme"
                id="theme"
                onChange={handleChange}
                value="1"
                checked={invoiceTheme === "1"}
              />
              <label htmlFor="">Theme 1</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={themeTwo} alt="" />
            <div>
              <input
                type="radio"
                name="invoiceTheme"
                id="theme"
                onChange={handleChange}
                value="2"
                checked={invoiceTheme === "2"}
              />
              <label htmlFor="">Theme 2</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={themeThree} alt="" />
            <div>
              <input
                type="radio"
                name="invoiceTheme"
                id="theme"
                onChange={handleChange}
                value="3"
                checked={invoiceTheme === "3"}
              />
              <label htmlFor="">Theme 3</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={themeFour} alt="" />
            <div>
              <input
                type="radio"
                name="invoiceTheme"
                id="theme"
                onChange={handleChange}
                value="4"
                checked={invoiceTheme === "4"}
              />
              <label htmlFor="">Theme 4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
