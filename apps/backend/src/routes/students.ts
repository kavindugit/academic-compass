import { Router } from 'express';
import { Student, Timetable } from '@pathwaylk/shared';

const router = Router();

router.get('/:id/profile', (req, res) => {
  const student: Student = {
    id: req.params.id,
    firstName: 'John',
    lastName: 'Doe',
    nic: '123456789V',
    city: 'Colombo',
    studentContactNo: '0712345678',
    parentContactNo: '0712345679',
    email: 'john@example.com',
    stream: 'Science (Maths)',
    photoUrl: 'https://i.pravatar.cc/150?u=john'
  };
  res.json(student);
});

router.get('/:id/timetable', (req, res) => {
  const timetable: Timetable = {
    studentId: req.params.id,
    slots: [
      { day: 'Monday', time: '08:00 AM', subjectId: 'Combined Maths' },
      { day: 'Monday', time: '10:30 AM', subjectId: 'Physics' },
      { day: 'Tuesday', time: '08:00 AM', subjectId: 'Chemistry' },
      { day: 'Wednesday', time: '02:00 PM', subjectId: 'Motivation Session' },
    ]
  };
  res.json(timetable);
});

export default router;
