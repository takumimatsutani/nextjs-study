import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Link as MuiLink, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/userReducer';
import { useRouter } from 'next/router';

const Header = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/');
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            掲示板
          </Typography>
          {token ? (
            <Button color="inherit" onClick={handleLogout}>ログアウト</Button>
          ) : (
            <>
              <MuiLink href="/login" color="inherit" underline="none">ログイン</MuiLink>
              <MuiLink href="/register" color="inherit" underline="none" sx={{ marginLeft: 2 }}>新規登録</MuiLink>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
