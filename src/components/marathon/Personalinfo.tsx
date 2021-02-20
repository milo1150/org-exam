import React, {
  ChangeEvent,
  useState,
  useRef,
  SetStateAction,
  useEffect,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import {
  ActionBox,
  ContentBox,
  InputBox,
  LayoutInputBox,
  SpanError,
} from '../../style/component';
import { P1, P2 } from '../../style/MarathonStyles';

import { Personalinfo as PropsType } from '../../Typescript/Type';
import { MockPersonalinfo } from '../../initData/ApplicantInit';

interface props {
  props: PropsType;
}
const Personalinfo: React.FC<props> = ({ props }) => {
  const [draft, setDraft] = useState<PropsType>(MockPersonalinfo);
  const { handleSubmit, control, errors, register } = useForm<PropsType>({
    defaultValues: MockPersonalinfo,
  });

  const summary = (data: PropsType) => {
    console.log(data);
  };

  const updateDraft = (value: any, name: string) => {
    setDraft((state): any => {
      const data: PropsType = { ...state };
      data[name] = value;
      return data;
    });
  };

  const validateDraft = () => {
    console.log('validate:', draft);
  };

  useEffect(() => {
    console.log(draft);
  }, [draft]);

  return (
    <form onSubmit={handleSubmit(summary)}>
      <ContentBox>
        <P1>ข้อมูลส่วนตัว</P1>
        <LayoutInputBox>
          <InputBox>
            <P2>คำนำหน้า</P2>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ onChange, value, name }) => (
                <Input
                  onChange={onChange}
                  onBlur={() => updateDraft(value, name)}
                />
              )}
            />
          </InputBox>
          {errors.title && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>ชื่อ (ภาษาไทยและภาษาอังกฤษ)</P2>
            <Controller
              as={Input}
              name="firstname"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.firstname && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>นามสกุล (ภาษาไทยและภาษาอังกฤษ)</P2>
            <Controller
              as={Input}
              name="lastname"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.lastname && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>วันเดือนปีเกิด</P2>
            <Controller
              as={Input}
              name="birth"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.birth && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>อีเมล</P2>
            <Controller
              as={Input}
              name="email"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.email && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>เลขบัตรประจำตัวประชาชน</P2>
            <Controller
              as={Input}
              name="idcard"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.idcard && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>ที่อยู่</P2>
            <Controller
              as={Input}
              name="address"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.address && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>เบอร์โทรศัพท์</P2>
            <Controller
              as={Input}
              name="contact"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.contact && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>รูปถ่ายหน้าตรง</P2>
            <Controller
              as={Input}
              name="photo"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.photo && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>ชื่อบนเบอร์วิ่ง (BIB)</P2>
            <Controller
              as={Input}
              name="nameBIB"
              control={control}
              rules={{ required: true }}
            />
          </InputBox>
          {errors.nameBIB && <SpanError>โปรดระบุ</SpanError>}
          <ActionBox>
            <Button type="ghost" onClick={() => validateDraft()}>
              Save
            </Button>
            <Button htmlType="submit" type="primary">
              ถัดไป
            </Button>
          </ActionBox>
        </LayoutInputBox>
      </ContentBox>
    </form>
  );
};
export default Personalinfo;
