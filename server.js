import express from 'express';
import login from './routes/login.js';
import getAllProducts from './routes/gatAllProducts.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/login', login);
app.use('/products', getAllProducts);

app.listen(port, () => {
  console.log('server run...');
});
