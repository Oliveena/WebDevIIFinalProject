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
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
  const res = await fetch(
  `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

    const data = await res.json();

    console.log('Login data:', data);

    if (data.length > 0) {
      login(data[0]);
      navigate("/dashboard");
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
      mt={10}
      p={4}
      boxShadow={3}
      borderRadius={2}
      sx={{ backgroundColor: 'white' }}
      className="rounded-2xl shadow-lg mb-32"
    >
      <Typography
        variant="h4"
        component="h1"
        mb={3}
        textAlign="center"
        className="text-primary-700 font-bold"
      >
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
          />

          <TextField
            name='password'
            label="Password"
            type="password"
            required
            fullWidth
          />

          <Box display="flex" justifyContent="flex-end">
            <Link href="#" underline="hover" variant="body2" className="text-primary-500">
              Forgot password?
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#003566',
              '&:hover': { backgroundColor: '#001D3D' },
            }}
          >
            Login
          </Button>
        </Stack>
      </form>

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<FcGoogle />}
        onClick={handleGoogleLogin}
        sx={{
          borderColor: '#FFD60A',
          color: '#000814',
          '&:hover': {
            borderColor: '#FFC300',
            backgroundColor: '#fffbe6',
          },
        }}
      >
        Sign in with Google
      </Button>
    </Box>

  );
}
