import { useState, createContext, useContext } from "react";

const RequirementContext = createContext({});

export const useRequirements = () => useContext(RequirementContext);

export const RequirementsProvider = ({
  username,
  mobileNumber,
  email,
  children,
}) => {
  const INITIAL_REQUIREMENT = {
    username: username || "",
    mobileNumber: mobileNumber || "",
    email: email || "",
    companyName: "",
    numberOfUsers: "",
    subdomainTitle: "",
    companyAddress: "",
    socialMediaAccount: "",
    logo: undefined,
    subscription: "3",
    drivingLicense: undefined,
    civilId: undefined,
    companyId: undefined,
    paymentOption: { knet: true, mastercard: false },
    invoiceTheme: "",
  };
  const [requirementForm, setRequirementForm] = useState(INITIAL_REQUIREMENT);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRequirementForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setRequirementForm((prev) => ({ ...prev, [name]: file }));
  };

  const handleCheckBoxChange = (e) => {
    const { name } = e.target;

    setRequirementForm((prev) => ({
      ...prev,
      paymentOption: {
        ...prev.paymentOption,
        [name]: !prev.paymentOption[name],
      },
    }));
  };

  return (
    <RequirementContext.Provider
      value={{
        requirementForm,
        handleChange,
        handleFileChange,
        handleCheckBoxChange,
      }}
    >
      {children}
    </RequirementContext.Provider>
  );
};
