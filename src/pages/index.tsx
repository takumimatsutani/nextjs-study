import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Post } from '../types';
import styles from './index.module.css';  // CSSモジュールをインポート

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container className={styles.container}>
      <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
        掲示板
      </Typography>
      <List>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} passHref key={post.id}>
            <ListItem 
              component="a" 
              className={styles.listItem}
            >
              <Typography variant="body1">{post.title}</Typography>
            </ListItem>
          </Link>
        ))}
      </List>
      <Link href="/posts/new">
        <Button variant="contained" color="primary">新しい投稿</Button>
      </Link>
    </Container>
  );
};

export default Home;
