import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
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
    <AppBar position="static">
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
            <Link href="/login" legacyBehavior>
              <Button color="inherit" component="a">ログイン</Button>
            </Link>
            <Link href="/register" legacyBehavior>
              <Button color="inherit" component="a">新規登録</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
