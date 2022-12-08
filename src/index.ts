import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const bodyParser = require('body-parser');
const Product = require('./models/product');

dotenv.config();

const DB_URL = process.env.DB_URL || '';
const DB_NAME = process.env.DB_NAME || '';
const port = process.env.PORT || 5000;


(async () => {
  await mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to database.');
  });

  const app: Express = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  app.post('/name/:name/category/:category', (req, res) => {

    const productName = req.params.name;
    const productCategory = req.params.category;

    const product = new Product({ name: productName, category: productCategory })

    product.save((err: any) => {
      if (err) return console.error(err);
      console.log('Product saved to collection.');
    });

    res.send('Product saved to collection.');
  })

  app.listen(port, () => {
    console.log(`⚡️Server is running in the port: ${port}`);
  });
})();
