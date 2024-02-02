import React from "react";
import { Input } from "../../Components";
import { useRequirements } from "../../Context/RequirementsProvider";

const BasicInfo = ({ disabled }) => {
  const { requirementForm, handleChange } = useRequirements();
  const { username, mobileNumber, email } = requirementForm;

  return (
    <div>
      <div className="form-group-login">
        <label htmlFor="username" className="text-dark-login text-bold">
          Username
        </label>
        <Input
          type="text"
          id="username"
          placeholder="Enter your username"
          name="username"
          onChange={handleChange}
          disabled={disabled}
          value={username}
        />
      </div>

      <div className="form-group-login">
        <label htmlFor="mobile" className="text-dark-login text-bold">
          Mobile Number
        </label>
        <Input
          type="text"
          id="mobile"
          name="mobileNumber"
          placeholder="Enter your Mobile number"
          onChange={handleChange}
          disabled={disabled}
          value={mobileNumber}
        />
      </div>

      <div className="form-group-login">
        <label htmlFor="email" className="text-dark-login text-bold">
          Email
        </label>
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          disabled={disabled}
          value={email}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
