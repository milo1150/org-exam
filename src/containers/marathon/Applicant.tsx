import React, { useReducer, useEffect } from 'react';
import { ApplicantBox, Layout, StepBox } from '../../style/MarathonStyles';
import { Steps } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { initialState } from '../../initData/ApplicantInit';
import { initMarathonState, Personalinfo } from '../../Typescript/Type';
import PersonalinfoComp from '../../components/marathon/Personalinfo';
const { Step } = Steps;

type ActionType =
  | { type: 'currentstep'; payload: number }
  | { type: 'updatePersonalinfo'; payload: string };

function reducer(state: initMarathonState, action: ActionType) {
  switch (action.type) {
    case 'updatePersonalinfo':
      console.log(action.payload);
      let stateS: initMarathonState = { ...state };
      stateS.Personalinfo.firstname = action.payload;
      return { ...stateS };
    // case 'updatePersonalinfo':

    default:
      return initialState;
  }
}

const Applicant: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const cookies: string = document.cookie;
    const cookiesArr: string[] = cookies.split('; ');
    let key: string = '';
    for (let i of cookiesArr) {
      let str: string[] = i.split('=');
      if (str[0] === 'DF') {
        key = str[1];
        break;
      }
    }
    if (key) {
      /**
       * API to backend and update useReducer state if key exist
       * then dispatch Reducer
       * example : dispatch({ type: 'updateInitialState', payload: {data from backend} });
       */
      dispatch({ type: 'updatePersonalinfo', payload: 'kortoei' });
    } else {
      // DF is just sample name of applicant key
      const uuid: string = uuidv4();
      document.cookie = `DF=${uuid}`;
    }
    document.cookie = 'DF=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
    // console.log(state);
  }, []);
  return (
    <Layout>
      <StepBox>
        <Steps current={state.currentStep} direction="horizontal">
          <Step title="ข้อมูลส่วนตัว" />
          <Step title="ข้อมูลเกี่ยวกับการวิ่ง" />
          <Step title="ผู้ติดต่อฉุกเฉิน" />
          <Step title="ข้อมูลทางการแพทย์" />
          <Step title="เสื้อของที่ระลึก" />
        </Steps>
      </StepBox>
      <ApplicantBox>
        {state.currentStep === 0 && (
          <PersonalinfoComp props={state.Personalinfo} />
        )}
        {state.currentStep === 1 && <p>ข้อมูลเกี่ยวกับการวิ่ง</p>}
      </ApplicantBox>
    </Layout>
  );
};
export default Applicant;
