import React, { useState, useEffect, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, message } from 'antd';
import _ from 'lodash';
import {
  ActionBox,
  ContentBox,
  InputBox,
  LayoutInputBox,
  SpanError,
} from '../../style/component';
import { P1, P2 } from '../../style/MarathonStyles';

import {
  Personalinfo as PropsType,
  RegExpPersonalinfo,
  RegCheckObj,
} from '../../Typescript/Type';
import { PersonalinfoDraftValidate } from '../../function/ValidateDraft';

interface props {
  props: PropsType;
  dispatch: (data: PropsType) => void;
}

const Personalinfo: React.FC<props> = ({ props, dispatch }) => {
  // console.log('props:', props);

  // Setup
  const [draft, setDraft] = useState<PropsType>(props);
  const { handleSubmit, control, errors } = useForm<PropsType>({
    defaultValues: useMemo(() => {
      console.log('USE MEMO:', props);
      return props;
    }, []),
  });

  // dispatch Reducer
  const summary = (data: PropsType) => dispatch(data);

  // Draft Zone
  const updateDraft = (value: any, name: string) => {
    setDraft((state): any => {
      const data: PropsType = { ...state };
      data[name] = value;
      return data;
    });
  };

  const checkDraft = (): void => {
    const data: RegCheckObj = PersonalinfoDraftValidate(draft);
    if (data.status) message.success('Save Draft success');
    else {
      for (let i of data.errMsg) {
        message.error(`${i} ไม่ถูกต้อง`, 3);
      }
    }
  };

  useEffect(() => {
    console.log('draft:', draft);
  }, [draft]);

  // When onload detect cookie, props will change value
  useEffect(() => {
    setDraft(props);
  }, [props]);

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
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.title}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.title && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>ชื่อ (ภาษาไทยและภาษาอังกฤษ)</P2>
            <Controller
              name="firstname"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.firstname}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.firstname && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>นามสกุล (ภาษาไทยและภาษาอังกฤษ)</P2>
            <Controller
              name="lastname"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.lastname}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.lastname && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>วันเดือนปีเกิด</P2>
            <Controller
              name="birth"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.birth}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.birth && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>อีเมล</P2>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.email}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.email && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>เลขบัตรประจำตัวประชาชน</P2>
            <Controller
              name="idcard"
              control={control}
              rules={{
                required: true,
                maxLength: 13,
                pattern: RegExpPersonalinfo.idcard,
              }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.idcard}
                  maxLength={13}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {(errors.idcard && errors.idcard.type === 'pattern' && (
            <SpanError>โปรดระบุตัวเลขเท่านั้น</SpanError>
          )) ||
            (errors.idcard && <SpanError>โปรดระบุ</SpanError>)}
          <InputBox>
            <P2>ที่อยู่</P2>
            <Controller
              name="address"
              control={control}
              rules={{ required: true, pattern: RegExpPersonalinfo.address }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.address}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {(errors.address && errors.address.type === 'pattern' && (
            <SpanError>โปรดระบุตัวหนังสือและตัวเลขเท่านั้น</SpanError>
          )) ||
            (errors.address && <SpanError>โปรดระบุ</SpanError>)}
          <InputBox>
            <P2>เบอร์โทรศัพท์</P2>
            <Controller
              name="contact"
              control={control}
              rules={{ required: true, pattern: RegExpPersonalinfo.contact }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.contact}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {(errors.contact && errors.contact.type === 'pattern' && (
            <SpanError>โปรดระบุตัวเลขเท่านั้น</SpanError>
          )) ||
            (errors.contact && <SpanError>โปรดระบุ</SpanError>)}

          <InputBox>
            <P2>รูปถ่ายหน้าตรง</P2>
            <Controller
              name="photo"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.photo}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.photo && <SpanError>โปรดระบุ</SpanError>}
          <InputBox>
            <P2>ชื่อบนเบอร์วิ่ง (BIB)</P2>
            <Controller
              name="nameBIB"
              control={control}
              rules={{ required: true }}
              render={({ onChange, value, name }) => (
                <Input
                  value={draft.nameBIB}
                  onChange={(e) => {
                    onChange(e);
                    updateDraft(e.target.value, name);
                  }}
                />
              )}
            />
          </InputBox>
          {errors.nameBIB && <SpanError>โปรดระบุ</SpanError>}
          <ActionBox>
            <Button type="ghost" onClick={() => checkDraft()}>
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
