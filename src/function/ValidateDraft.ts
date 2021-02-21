import {
  RegCheckObj,
  Personalinfo,
  RegExpPersonalinfo,
} from '../Typescript/Type';

export const PersonalinfoDraftValidate = (data: Personalinfo): RegCheckObj => {
  const arr: Array<[string, string]> = [];
  for (let i of Object.entries(data)) {
    if (i[1] !== '') arr.push(i);
  }
  let status: boolean = true;
  let okNumber: number = arr.length;
  const errMsg: string[] = [];
  for (let k of arr) {
    const key: string = k[0];
    const value: any = k[1];
    switch (key) {
      case 'title':
        break;
      case 'firstname':
        break;
      case 'lastname':
        break;
      case 'birth':
        break;
      case 'email':
        break;
      case 'idcard':
        if (!RegExpPersonalinfo.idcard.test(value)) {
          okNumber--;
          errMsg.push('เลขบัตรประชาชน');
        }
        break;
      case 'address':
        if (!RegExpPersonalinfo.address.test(value)) {
          okNumber--;
          errMsg.push('ที่อยู่');
        }
        break;
      case 'contact':
        if (!RegExpPersonalinfo.contact.test(value)) {
          okNumber--;
          errMsg.push('เบอร์โทรศัพท์');
        }
        break;
      case 'photo':
        break;
      case 'nameBIB':
        break;
    }
  }
  if (okNumber !== arr.length) status = false;
  return { status: status, errMsg: errMsg };
};
