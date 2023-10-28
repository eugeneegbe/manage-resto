const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000 || process.env.PORT;
const userRouter = require('./routes/user');
const productsRouter = require('./routes/product');

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/user', userRouter);
app.use('/server/services/products', productsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});