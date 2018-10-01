const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/database'),
      cors = require('cors'),
      app = express();

mongoose.Promise = global.Promise;

mongoose.connect(config.database, {useNewUrlParser: true}, (err) => {
  err? console.log(err) : console.log('Connected to DB: ' + config.database);
});

const port = (process.env.PORT || 3000);
const productRoutes = require('./routes/products');

app.use(bodyParser.json());

app.use(cors());

app.use('/products', productRoutes);

app.get('*', (req, res) => {
  res.render('./dist/index.html');
});

app.listen(port, () => {
  console.log('Server listening on port ' + port + '...');
});