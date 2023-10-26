const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const categoriesRoutes = require('./routes/categories');
const featuredItemsRoutes = require('./routes/featuredItems');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', categoriesRoutes);
app.use('/api/featured-items', featuredItemsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
