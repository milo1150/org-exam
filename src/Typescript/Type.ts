import Personalinfo from '../components/marathon/Personalinfo';

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
 * ACTION TYPE
 */

export type ActionType =
  | { type: 'updatePersonalinfoTest'; payload: Personalinfo }
  | { type: 'currentstep'; payload: number }
  | { type: 'updatePersonalinfo'; payload: Personalinfo };

/**
 * Save Draft RegExp
 */
export interface RegExpPersonalinfo {
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
// export type DraftData =
//   | Personalinfo
//   | ApplicationBG
//   | EmergencyContact
//   | Medicalinfo
//   | Souvenir;

// export type DraftType =
//   | 'Personalinfo'
//   | 'ApplicationBG'
//   | 'EmergencyContact'
//   | 'Medicalinfo'
//   | 'Souvenir';
