const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API Running');
});

// use environment port or 5000
const PORT = process.env.PORT || 5000;

// start server listening on PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});