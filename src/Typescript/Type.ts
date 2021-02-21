// Main Initialstate
export interface initMarathonState {
  currentStep: number;
  Personalinfo: Personalinfo;
  ApplicantBG: ApplicationBG;
  EmergencyContact: EmergencyContact;
  Medicalinfo: Medicalinfo;
  Souvenir: Souvenir;
  [index: string]: any;
}

/**
 * Sub initialstate
 */
export interface Personalinfo {
  title: string;
  firstname: string;
  lastname: string;
  birth: string;
  email: string;
  idcard: string;
  address: string;
  contact: string;
  photo: string;
  nameBIB: string;
  [index: string]: any;
}

export interface ApplicationBG {
  previousRun: string;
  timeExpect: string;
}

export interface EmergencyContact {
  contact1: {
    nameSurname: string;
    relationship: string;
    phone: string;
  };
  contact2: {
    nameSurname: string;
    relationship: string;
    phone: string;
  };
}

interface MedicalSub {
  status: 'YES' | 'NO' | '';
  ifYes: string;
}
export interface Medicalinfo {
  bloodtype: 'A' | 'B' | 'O' | 'AB' | '';
  medicalAllergy: MedicalSub;
  chronicHealth: MedicalSub;
  surgery: MedicalSub;
  pregnant: MedicalSub;
  personalMed: MedicalSub;
  injured: MedicalSub;
  exerciseFreq: string;
  easilytired: MedicalSub;
}

export interface Souvenir {
  Tshirt: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | '';
}

/**
|--------------------------------------------------
| useReducer(Applicant) ActionType
|--------------------------------------------------
*/

export type ActionType =
  | { type: 'updatePersonalinfoTest'; payload: Personalinfo }
  | { type: 'currentstep'; payload: number }
  | { type: 'stepback'; payload: number }
  | { type: 'updatePersonalinfo'; payload: Personalinfo }
  | { type: 'savePersonalinfo'; payload: Personalinfo };

/**
 |--------------------------------------------------
 | Save Draft RegExp
 |--------------------------------------------------
 */

// Return Type of Check Draft
export interface RegCheckObj {
  status: boolean;
  errMsg: string[];
}

interface RegExpPersonalinfo {
  title: RegExp;
  firstname: RegExp;
  lastname: RegExp;
  birth: RegExp;
  email: RegExp;
  idcard: RegExp;
  address: RegExp;
  contact: RegExp;
  photo: RegExp;
  nameBIB: RegExp;
}
export const RegExpPersonalinfo: RegExpPersonalinfo = {
  title: /[a-zA-Z]/,
  firstname: /[a-zA-Z]/,
  lastname: /[a-zA-Z]/,
  birth: /[0-9]/,
  email: /[a-zA-Z]/,
  idcard: /^[0-9]*$/,
  address: /^[0-9a-z\s.]+$/i,
  contact: /^[0-9]*$/,
  photo: /[a-zA-Z]/,
  nameBIB: /[a-zA-Z]/,
};
