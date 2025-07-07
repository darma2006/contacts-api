require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { connectToServer } = require('./db/conn');
const contactsRouter = require('./routes/contacts');

app.use(express.json());
app.use('/contacts', contactsRouter);

connectToServer().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Failed to connect to database. Server not started.');
  console.error(err);
});
