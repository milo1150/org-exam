import React, { useEffect } from 'react';
import { Button } from 'antd';

interface props {
  currentStep: number;
  stepBack: (n: number) => void;
}
const ApplicantBG: React.FC<props> = ({ currentStep, stepBack }) => {
  useEffect(() => {
    console.log(currentStep);
  }, []);
  // Back
  const pageBack = (n: number): void => stepBack(n);
  return (
    <div>
      <Button onClick={() => pageBack(currentStep)}>BACK</Button>
    </div>
  );
};
export default ApplicantBG;
