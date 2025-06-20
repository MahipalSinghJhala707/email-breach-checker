const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/breach_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('MongoDB connected'));

// Mongoose schema
const Breach = mongoose.model('Breach', new mongoose.Schema({
  email: String,
}));

// API endpoint to check email
app.post('/check', async (req, res) => {
  const { email } = req.body;
  try {
    const result = await Breach.findOne({ email });
    if (result) {
      res.json({ message: '⚠️ Your email was found in a breach.' });
    } else {
      res.json({ message: '✅ Your email is safe.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

