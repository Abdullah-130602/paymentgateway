import { useState } from "react";

const useRequirementForm = (steps) => {
  const [currentStep, setCurrentSetp] = useState(0);

  const nextSetp = () => {
    setCurrentSetp((prev) => {
      if (prev === 4) return prev;
      return prev + 1;
    });
  };

  const prevSetp = () => {
    setCurrentSetp((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return {
    steps,
    currentStep,
    step: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    nextSetp,
    prevSetp,
  };
};

export default useRequirementForm;
