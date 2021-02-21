import { initMarathonState, Personalinfo } from '../Typescript/Type';
export const initialState: initMarathonState = {
  currentStep: 0,
  Personalinfo: {
    title: '',
    firstname: '',
    lastname: '',
    birth: '',
    email: '',
    idcard: '',
    address: '',
    contact: '',
    photo: '',
    nameBIB: '',
  },
  ApplicantBG: {
    previousRun: '',
    timeExpect: '',
  },
  EmergencyContact: {
    contact1: {
      nameSurname: '',
      relationship: '',
      phone: '',
    },
    contact2: {
      nameSurname: '',
      relationship: '',
      phone: '',
    },
  },
  Medicalinfo: {
    bloodtype: '',
    medicalAllergy: {
      status: '',
      ifYes: '',
    },
    chronicHealth: {
      status: '',
      ifYes: '',
    },
    surgery: {
      status: '',
      ifYes: '',
    },
    pregnant: {
      status: '',
      ifYes: '',
    },
    personalMed: {
      status: '',
      ifYes: '',
    },
    injured: {
      status: '',
      ifYes: '',
    },
    exerciseFreq: '',
    easilytired: {
      status: '',
      ifYes: '',
    },
  },
  Souvenir: {
    Tshirt: '',
  },
};

/**
|--------------------------------------------------
| TEST
|--------------------------------------------------
*/

// Save Draft Test and Form Test
export const MockPersonalinfo: Personalinfo = {
  title: 'Mr',
  firstname: 'kortoei ',
  lastname: 'tongmanee',
  birth: '',
  email: '',
  idcard: '111559874$#',
  address: '121 M.10 Paknum Chumphon $#@',
  contact: '0994717374 abcdef',
  photo: '',
  nameBIB: '',
};

// // Full Form Test
// export const MockPersonalinfo: Personalinfo = {
//   title: 'Mr',
//   firstname: 'kortoei ',
//   lastname: 'tongmanee',
//   birth: '120938',
//   email: 'oosamuoo02@gmail.com',
//   idcard: '111559874',
//   address: '121 M.10 Paknum Chumphon',
//   contact: '0994717374',
//   photo: 'ABC',
//   nameBIB: 'Helloworld',
// };
