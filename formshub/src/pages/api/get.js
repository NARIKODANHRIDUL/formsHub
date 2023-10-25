import { connectToDatabase } from '@/lib/mongodb';
import Form from '@/model/Form';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();
      const formData = await Form.find({});
      res.status(200).json(formData);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch form data' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' });
  }
}
