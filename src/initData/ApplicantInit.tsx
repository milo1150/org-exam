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

export const MockPersonalinfo: Personalinfo = {
  title: 'Mr',
  firstname: 'kortoei ',
  lastname: 'tongmanee',
  birth: '',
  email: '',
  idcard: '',
  address: '55555555',
  contact: '0994717374',
  photo: '',
  nameBIB: '',
};
