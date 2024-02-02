import React from "react";
import { Input, TextArea, FileInput } from "../../Components";
import { useRequirements } from "../../Context/RequirementsProvider";

const CompanyDetails = ({ disabled }) => {
  const { requirementForm, handleChange, handleFileChange } = useRequirements();
  const {
    companyName,
    numberOfUsers,
    subdomainTitle,
    companyAddress,
    socialMediaAccount,
    logo,
  } = requirementForm;

  return (
    <div>
      <div className="form-group-login">
        <label
          htmlFor="company-name"
          className="text-dark-login text-bold text-sm"
        >
          Company Name
        </label>
        <Input
          id="company-name"
          placeholder="Enter your company name"
          name="companyName"
          onChange={handleChange}
          value={companyName}
          disabled={disabled}
        />
      </div>
      <div className="form-group-login">
        <label
          htmlFor="no-of-users"
          className="text-dark-login text-bold text-sm"
        >
          Number of Users
        </label>
        <Input
          id="no-of-users"
          placeholder="Enter number of users"
          name="numberOfUsers"
          onChange={handleChange}
          value={numberOfUsers}
          disabled={disabled}
        />
      </div>
      <div className="form-group-login">
        <label
          htmlFor="subdomain-title"
          className="text-dark-login text-bold text-sm"
        >
          Subdomain Title
        </label>
        <Input
          id="subdomain-title"
          placeholder="Enter subdomain title"
          name="subdomainTitle"
          onChange={handleChange}
          value={subdomainTitle}
          disabled={disabled}
        />
      </div>
      <div className="form-group-login">
        <label
          htmlFor="company-address"
          className="text-dark-login text-bold text-sm"
        >
          Company Address
        </label>
        <TextArea
          id="company-address"
          name="companyAddress"
          placeholder="Enter your company address"
          value={companyAddress}
          disabled={disabled}
          onChange={handleChange}
        />
      </div>
      <div className="form-group-login">
        <label
          htmlFor="social-media-acc"
          className="text-dark-login text-bold text-sm"
        >
          Social Media Account
        </label>
        <Input
          id="social-media-acc"
          name="socialMediaAccount"
          placeholder="Enter your social media account"
          value={socialMediaAccount}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      <div className="form-group-login">
        <label
          htmlFor="company-logo"
          className="text-dark-login text-bold text-sm"
        >
          Upload Logo
        </label>
        <FileInput
          type="file"
          id="company-logo"
          name="logo"
          placeholder={!logo ? "Upload your logo" : logo.name}
          onChange={handleFileChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CompanyDetails;
