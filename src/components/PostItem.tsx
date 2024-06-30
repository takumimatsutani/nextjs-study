import React from 'react';
import { ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { Post } from '../types';
import styles from './PostItem.module.css';

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => (
  <Link href={`/posts/${post.id}`} passHref>
    <ListItem component="a" className={styles.listItem}>
      <Typography variant="body1">{post.title}</Typography>
    </ListItem>
  </Link>
);

export default PostItem;
