import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc'; 

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Check if user already exists
      const checkRes = await fetch(`http://localhost:3001/users?email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        alert('A user with this email already exists.');
        return;
      }

      // Register new user
      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const newUser = await res.json();
        login(newUser);

        alert('Registered successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        alert('Something went wrong while registering.');
      }
    } catch (err) {
      console.error(err);
      alert('Registration failed due to a server error.');
    }
  };

  // TODO: can the user really register with Google?
  const handleGoogleRegister = () => {
    alert('Register with Google clicked!');
  };

  return (
    <Box
      maxWidth={400}
      mx="auto"
      mt={8}
      p={4}
      boxShadow={3}
      borderRadius={2}
    >
      <Typography variant="h4" component="h1" mb={3} textAlign="center">
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            required
            fullWidth
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            type="password"
            required
            fullWidth
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>

          {/* Divider with text */}
          <Divider>OR</Divider>

          {/* Google Register Button */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FcGoogle />}
            onClick={handleGoogleRegister}
          >
            Register with Google
          </Button>
        </Stack>
      </form>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Already have an account?{' '}
          <Link href="#" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
