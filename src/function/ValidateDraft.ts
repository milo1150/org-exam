import { Personalinfo, RegExpPersonalinfo } from '../Typescript/Type';
export function ValidateDraft(data: Personalinfo): void {
  const RegExp: RegExpPersonalinfo = {
    title: /[a-zA-Z]/g,
    firstname: /[a-zA-Z]/g,
    lastname: /[a-zA-Z]/g,
    birth: /[a-zA-Z]/g,
    email: /[a-zA-Z]/g,
    idcard: /[a-zA-Z]/g,
    address: /[a-zA-Z]/g,
    contact: /[0-9]/g,
    photo: /[a-zA-Z]/g,
    nameBIB: /[a-zA-Z]/g,
  };
  const arr: Array<[string, string]> = [];
  for (let i of Object.entries(data)) {
    if (i[1] !== '') arr.push(i);
  }
  console.log(arr);
}
