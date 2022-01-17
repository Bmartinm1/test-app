import { MongoClient } from 'mongodb';

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const {title, image, address, description } = data;

    const client = await MongoClient.connect('mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority');
  }
}

export default handler;
