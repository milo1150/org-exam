export interface initMarathonState {
  currentStep: number;
  Personalinfo: Personalinfo;
  ApplicantBG: ApplicationBG;
  EmergencyContact: EmergencyContact;
  Medicalinfo: Medicalinfo;
  Souvenir: Souvenir;
}

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
