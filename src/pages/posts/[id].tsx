import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import { Post } from '../../types';
import styles from './[id].module.css';

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get<Post>(`/api/posts/${id}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      try {
        await axios.delete(`/api/posts/${id}`);
        router.push('/');
      } catch (error) {
        console.error('Failed to delete the post:', error);
      }
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Container className="container">
      {post && (
        <>
          <Typography variant="h4" gutterBottom className={styles.title}>{post.title}</Typography>
          <Typography variant="body1" gutterBottom>{post.content}</Typography>
          <Link href={`/posts/edit/${post.id}`} passHref>
            <Button variant="contained" color="primary" className={styles.button}>編集</Button>
          </Link>
          <Button variant="contained" color="secondary" onClick={handleBack} className={styles.button}>戻る</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>削除</Button>
        </>
      )}
    </Container>
  );
};

export default PostPage;
