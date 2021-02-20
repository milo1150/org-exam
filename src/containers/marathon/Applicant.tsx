import React, { useReducer, useEffect, useMemo } from 'react';
import { ApplicantBox, Layout, StepBox } from '../../style/MarathonStyles';
import { Steps } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { initialState, MockPersonalinfo } from '../../initData/ApplicantInit';
import {
  initMarathonState,
  Personalinfo,
  ActionType,
} from '../../Typescript/Type';
import PersonalinfoComp from '../../components/marathon/Personalinfo';

const { Step } = Steps;

function reducer(
  state: initMarathonState,
  action: ActionType
): initMarathonState {
  switch (action.type) {
    case 'updatePersonalinfoTest':
      console.log('BRUH:', action.payload);
      const testData = { ...state };
      testData['Personalinfo'] = action.payload;
      return testData;
    case 'updatePersonalinfo':
      console.log('updatepersonalinfo:', action.payload);
      const dataPersonalinfo = { ...state };
      dataPersonalinfo['Personalinfo'] = action.payload;
      return dataPersonalinfo;
    default:
      return initialState;
  }
}

const Applicant: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function dispatchPersonalinfo(data: Personalinfo): void {
    return dispatch({ type: 'updatePersonalinfo', payload: data });
  }

  useMemo(() => {
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
      console.log('GOT KEY');
      console.log('MOCK:', MockPersonalinfo);
      dispatch({ type: 'updatePersonalinfoTest', payload: MockPersonalinfo });
    } else {
      // DF is just sample name of applicant key
      const uuid: string = uuidv4();
      document.cookie = `DF=${uuid}`;
    }
    // document.cookie = 'DF=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
  }, []);

  useEffect(() => {
    console.log('MAIN STATE:', state);
  }, [state]);

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
          <PersonalinfoComp
            props={state.Personalinfo}
            dispatch={dispatchPersonalinfo}
          />
        )}
        {state.currentStep === 1 && <p>ข้อมูลเกี่ยวกับการวิ่ง</p>}
      </ApplicantBox>
    </Layout>
  );
};
export default Applicant;
