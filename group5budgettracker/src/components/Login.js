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
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
