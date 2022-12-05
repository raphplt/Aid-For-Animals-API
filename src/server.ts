// Importing external variables and functions
import routerCategory from './routes/categories.route';
import routerOrder from './routes/orders.route';
import routerProduct from './routes/products.route';
import routerUser from './routes/users.route';
import routerAuth from './routes/auth.route';
import routerRegister from './routes/register.route';

const cors = require('cors');

const express = require('express');

// App instantiation
const app = express();
const port = 3000;

// Routage
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST'],
}));

app.use('/user', routerUser);

app.use('/auth', routerAuth);

app.use('/register', routerRegister);

app.use('/order', routerOrder);

app.use('/product', routerProduct);

app.use('/category', routerCategory);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// App exportation
export default app;
