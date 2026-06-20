import { Router } from 'express';

const router = Router();

// Mock users DB
const users: any[] = [];

router.post('/register', (req, res) => {
  const { firstName, lastName, nic, email, city, studentContactNo, parentContactNo, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = { 
    id: Date.now().toString(), 
    firstName, 
    lastName, 
    nic,
    email, 
    city,
    studentContactNo,
    parentContactNo,
    password 
  };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', userId: user.id, token: 'mock-jwt-token' });
});

export default router;
