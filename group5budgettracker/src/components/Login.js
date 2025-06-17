import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Divider,
  Stack,
} from '@mui/material';

import { useAuth } from '../context/AuthContext';

import { FcGoogle } from "react-icons/fc";

export default function Login() {

  const { login } = useAuth();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const res = await fetch(
      `http://localhost:3001/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    );
    const data = await res.json();

    console.log('Login data:', data);

    if (data.length > 0) {
      login(data[0]);
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    alert('Login failed');
  }
};

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    alert('Google login clicked');
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
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name='email'
            label="Email"
            type="email"
            required
            fullWidth
            autoComplete="email"
          />

          <TextField
            name='password'
            label="Password"
            type="password"
            required
            fullWidth
            autoComplete="current-password"
          />

          <Box display="flex" justifyContent="flex-end">
            <Link href="#" underline="hover" variant="body2">
              Forgot password?
            </Link>
          </Box>

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Stack>
      </form>

      <Divider sx={{ my: 3 }}>OR</Divider>


<Button startIcon={<FcGoogle />}>Sign in with Google</Button>
    </Box>
  );
}
