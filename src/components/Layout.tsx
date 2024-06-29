import { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
