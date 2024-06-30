import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export default function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // ユーザーの認証（例: データベースと照合）
  if (email === 'test@example.com' && password === 'password') {
    // 認証成功、JWTトークンを発行
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
