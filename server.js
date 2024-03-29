const express = require('express');
const connectDB = require('./config/db')

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// use environment port or 5000
const PORT = process.env.PORT || 5000;

// start server listening on PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});