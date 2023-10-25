import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const data = req.body;
      const collectionName = 'formal'; // Use the desired collection name
      const collection = db.collection(collectionName);

      // If the collection doesn't exist, create it before inserting data
      if (!(await collectionExists(db, collectionName))) {
        await db.createCollection(collectionName);
      }

      const result = await collection.insertOne(data);
      console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);
      res.status(201).json({ message: 'Form data added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to save form data' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' });
  }
}

// Function to check if collection exists
async function collectionExists(db, collectionName) {
  const collections = await db.listCollections().toArray();
  return collections.some((collection) => collection.name === collectionName);
}
