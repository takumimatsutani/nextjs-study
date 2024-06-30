import React from 'react';
import { Container } from '@mui/material';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md" style={{ marginTop: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
