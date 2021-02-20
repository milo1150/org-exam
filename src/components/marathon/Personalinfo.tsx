import React from 'react';
import { Input } from 'antd';
import { ContentBox, InputBox } from '../../style/component';
import { P1, P2 } from '../../style/MarathonStyles';

import { Personalinfo as PropsType } from '../../Typescript/Type';

interface props {
  props: PropsType;
}
const Personalinfo: React.FC<props> = ({ props }) => {
  console.log(props);
  return (
    <ContentBox>
      <P1>ข้อมูลส่วนตัว</P1>
      <div>
        <InputBox>
          <P2>คำนำหน้า</P2>
          <Input placeholder="นาย / นาง / นางสาว" />
        </InputBox>
        <InputBox>
          <P2>ชื่อ (ภาษาไทยและภาษาอังกฤษ)</P2>
          <Input placeholder="" value={props.firstname} />
        </InputBox>
      </div>
    </ContentBox>
  );
};
export default Personalinfo;
