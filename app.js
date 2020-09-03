const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/database'),
      cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;

// Connect to Database
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  err? console.log(err) : console.log('Connected to DB: ' + config.database);
});

// Set server host and port
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

const productRoutes = require('./routes/products');

// Body Parser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.use('/products', productRoutes);

app.get('*', (req, res) => {
  res.render('./dist/index.html');
});

// Start Server
app.listen(port, host, () => {
  console.log('Server listening on port ' + port + '...');
});