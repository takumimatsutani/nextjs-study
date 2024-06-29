import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id as string;

  if (req.method === 'GET') {
    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else if (req.method === 'PUT') {
    const { title, content } = req.body;
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { title, content },
    });
    res.json(post);
  } else if (req.method === 'DELETE') {
    await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json({ status: 'Post deleted' });
  }
}
