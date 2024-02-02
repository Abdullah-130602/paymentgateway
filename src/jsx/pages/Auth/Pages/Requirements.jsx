import headerImage from "../Images/rect-header.png";
import { Button } from "../Components";
import "./index.css";
import leftArrow from "../Images/leftarrow.svg";
import rightArrow from "../Images/rightarrow.svg";
import useMultiForm from "../hooks/useRequirementForm";
import { useRequirements } from "../Context/RequirementsProvider";

import BasicInfo from "./Requirements From/BasicInfo";
import CompanyDetails from "./Requirements From/CompanyDetails";
import Verification from "./Requirements From/Verification";
import Preview from "./Requirements From/Preview";

const Requirements = () => {
  const { step, isFirstStep, isLastStep, nextSetp, prevSetp } = useMultiForm([
    <BasicInfo disabled={false} />,
    <CompanyDetails disabled={false} />,
    <Verification disabled={false} />,
    <Preview />,
  ]);

  const { requirementForm } = useRequirements();

  return (
    <div className="background-2-login">
      <header
        className="wrapper-login header-login"
        style={{ paddingBottom: "40px" }}
      >
        <span className="text-lg text-bold text-primary">REQUIREMENT FORM</span>
        <img src={headerImage} alt="" />
      </header>
      <div className="wrapper-login card-login">{step}</div>

      {!isLastStep ? (
        <div
          className="wrapper-login"
          style={{
            margin: "auto",
            paddingTop: "40px",
            paddingBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isFirstStep && (
            <Button
              color="light"
              hasIcon={true}
              variant="transparent"
              onClick={prevSetp}
            >
              <img src={leftArrow} alt="left-arrow" />
              Previous
            </Button>
          )}

          <div></div>
          <Button
            color="light"
            hasIcon={true}
            variant="transparent"
            onClick={nextSetp}
          >
            Next
            <img src={rightArrow} alt="right-arrow" />
          </Button>
        </div>
      ) : (
        <div
          className="wrapper-login"
          style={{
            margin: "auto",
            paddingTop: "40px",
            paddingBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="light"
            variant="contained"
            onClick={() => console.log(requirementForm)} // get the form here!!
          >
            SUBMIT
          </Button>
        </div>
      )}
    </div>
  );
};

export default Requirements;
