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
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function Register() {

const theme = useTheme();
const isDark = theme.palette.mode === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Check if user already exists
      const checkRes = await fetch(`/users?email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        alert('A user with this email already exists.');
        return;
      }

      // Register new user
const res = await fetch('/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, password }),
});

      if (res.ok) {
        const newUser = await res.json();
        login(newUser);

        navigate("/dashboard");
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
      mt={10}
      p={4}
      boxShadow={3}
      borderRadius={2}
      sx={{ backgroundColor: isDark ? '#121212' : 'white' }}
      className={`rounded-2xl shadow-lg mb-32 ${isDark ? 'text-white' : 'text-black'}`} 
    >
      <Typography
        variant="h4"
        component="h1"
        mb={3}
        textAlign="center"
        className={isDark ? 'text-white font-bold' : 'text-primary-700 font-bold'}
      >
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            required
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#003566',
              '&:hover': { backgroundColor: '#001D3D' },
            }}
          >
            Register
          </Button>

          <Divider>OR</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<FcGoogle />}
            onClick={handleGoogleRegister}
            sx={{
              borderColor: '#FFD60A',
              color: '#000814',
              '&:hover': {
                borderColor: '#FFC300',
                backgroundColor: '#fffbe6',
              },
            }}
          >
            Register with Google
          </Button>
        </Stack>
      </form>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Already have an account?{' '}
          <Link href="#" underline="hover" className="text-primary-500">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>

  );
}
