import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Button, Container, Typography, Link, Box } from '@mui/material';
import { Post } from '../types';
import PostItem from '../components/PostItem';
import { useThemeContext } from '../ThemeProviderWrapper';
import styles from './index.module.css';  // CSSモジュールをインポート

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { toggleTheme } = useThemeContext();

  useEffect(() => {
    axios.get<Post[]>('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default', // テーマの背景色を適用
        color: 'text.primary',
        padding: 2,
      }}
    >
      <Container className={styles.container}>
        <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
          掲示板
        </Typography>
        <Button variant="contained" color="primary" onClick={toggleTheme} style={{ marginBottom: '16px' }}>
          テーマを切り替える
        </Button>
        <List>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </List>
        <Link href="/posts/new">
          <Button variant="contained" color="primary">新しい投稿</Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Home;
