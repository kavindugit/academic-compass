export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  nic: string;
  email: string;
  city: string;
  studentContactNo: string;
  parentContactNo: string;
  photoUrl?: string;
  stream?: string;
}

export interface Subject {
  id: string;
  name: string;
}

export interface TimeSlot {
  day: string;
  time: string;
  subjectId: string;
}

export interface Timetable {
  studentId: string;
  slots: TimeSlot[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}
