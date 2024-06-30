import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/register', { email, password });
      if (response.status === 201) {
        router.push('/login'); // 成功した場合、ログインページにリダイレクト
      }
    } catch (error) {
      setError('Failed to create account');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        新規アカウント作成
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          作成
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
