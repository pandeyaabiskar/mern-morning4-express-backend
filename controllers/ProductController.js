const returnAllProducts = (req, res) => {
  const { category } = req.query;
  if (category) {
    const filteredProducts = productData.filter((product) => {
      return product.category === category;
    });
    if (filteredProducts.length !== 0) {
      res.json(filteredProducts);
    } else {
      res.send("Sorry no product in the category");
    }
  } else {
    res.json(productData);
  }
};

const returnSingleProduct = (req, res) => {
  const { productID } = req.params;
  if (productID <= productData.length) {
    res.json(productData[productID - 1]);
  } else {
    res.send("Index doesn't exist");
  }
};

const createProduct = (req, res) => {
  console.log(req.body);
  res.send("POST");
};

const updateProduct = (req, res) => {
  res.send("PATCH");
};

const deleteProduct = (req, res) => {
  res.send("DELETE");
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
