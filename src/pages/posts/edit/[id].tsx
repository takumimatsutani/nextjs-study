import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, TextField, Button } from '@mui/material';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {  // 型を指定
    event.preventDefault();
    await axios.post('/api/posts', { title, content });
    router.push('/');
  };

  return (
    <Container>
      <h1>新しい投稿</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          multiline
        />
        <Button type="submit" variant="contained" color="primary">投稿</Button>
      </form>
    </Container>
  );
};

export default NewPost;
