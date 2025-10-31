const express = require('express');

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to our home page');
});

const products = [
  {
    id: 1,
    label: 'Product 1',
  },
  {
    id: 2,
    label: 'Product 2',
  },
  {
    id: 3,
    label: 'Product 3',
  },
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET a specific product
app.get('/products/:id', (req, res) => {
  const productID = parseInt(req.params.id);
  const getSingleProduct = products.find((product) => product.id === productID);
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res
      .status(404)
      .send('Product is not found! Please try with a different ID');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
