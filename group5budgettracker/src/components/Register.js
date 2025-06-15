import React, { useState } from 'react';
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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // TODO: registration logic
    alert('Registered successfully!');
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
          />

          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            autoComplete="email"
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
