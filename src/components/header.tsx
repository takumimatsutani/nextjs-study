import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            掲示板
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">ホーム</Button>
          </Link>
          <Link href="/posts/new" passHref>
            <Button color="inherit">新しい投稿</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
