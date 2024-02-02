import React from "react";
import BasicInfo from "./BasicInfo";
import CompanyDetails from "./CompanyDetails";
import { FileInput } from "../../Components";
import { useRequirements } from "../../Context/RequirementsProvider";
import themeOne from "../../Images/Theme/Theme 1.svg";
import themeTwo from "../../Images/Theme/Theme 2.svg";
import themeThree from "../../Images/Theme/Theme 3.svg";
import themeFour from "../../Images/Theme/Theme 4.svg";

const Preview = () => {
  const {
    requirementForm,
    handleChange,
    handleCheckBoxChange,
    handleFileChange,
  } = useRequirements();

  const {
    subscription,
    drivingLicense,
    civilId,
    companyId,
    invoiceTheme,
    paymentOption,
  } = requirementForm;

  const choosenTheme = (choosen) => {
    if (choosen === "1") return themeOne;
    if (choosen === "2") return themeTwo;
    if (choosen === "3") return themeThree;
    if (choosen === "4") return themeFour;
  };

  return (
    <div className="animatedView">
      <p
        className="text-dark-login text-md text-bold"
        style={{ textAlign: "center" }}
      >
        Basic Detials
      </p>
      <BasicInfo disabled={true} />

      <p
        className="text-dark-login text-md text-bold"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        Company Details
      </p>
      <CompanyDetails disabled={true} />

      <p
        className="text-dark-login text-md text-bold"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        Verification
      </p>
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
            disabled={true}
          />
          <label htmlFor="3">3 Months</label>
          <input
            type="radio"
            id="6"
            name="subscription"
            value="6"
            checked={subscription === "6"}
            onChange={handleChange}
            disabled={true}
          />
          <label htmlFor="3">6 Months</label>
          <input
            type="radio"
            id="12"
            name="subscription"
            value="12"
            checked={subscription === "12"}
            onChange={handleChange}
            disabled={true}
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
          disabled={true}
        />
        <FileInput
          type="file"
          id="civil-id"
          name="civilId"
          placeholder={!civilId ? "Upload Civil Id" : civilId.name}
          onChange={handleFileChange}
          disabled={true}
        />
        <FileInput
          type="file"
          id="company-id"
          name="companyId"
          placeholder={!companyId ? "Upload Company Id" : companyId.name}
          onChange={handleFileChange}
          disabled={true}
        />
      </div>

      <div className="form-group-login">
        <label className="text-bold text-dark-login">
          Payment Option for the Company
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <div>
              <input
                type="checkbox"
                name="knet"
                checked={paymentOption.knet}
                onChange={handleCheckBoxChange}
                disabled={true}
              />
              <label htmlFor="">KNET</label>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="mastercard"
              checked={paymentOption.mastercard}
              onChange={handleCheckBoxChange}
              disabled={true}
            />
            <label htmlFor="">Mastercard</label>
          </div>
        </div>
      </div>

      <div className="form-group-login">
        <label className="text-bold text-dark-login">Invoice Theme</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={choosenTheme(invoiceTheme)} alt="" height={250} width={250} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
