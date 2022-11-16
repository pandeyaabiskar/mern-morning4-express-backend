const ProductModel = require("../models/ProductModel");

const returnAllProducts = async (req, res) => {
  // const { category } = req.query;
  // if (category) {
  //   const filteredProducts = productData.filter((product) => {
  //     return product.category === category;
  //   });
  //   if (filteredProducts.length !== 0) {
  //     res.json(filteredProducts);
  //   } else {
  //     res.send("Sorry no product in the category");
  //   }
  // } else {
  //   res.json(productData);
  // }
  try {
    const productData = await ProductModel.find();
    res.json(productData);
  } catch (e) {
    res.send("Error occured");
  }
};

const returnSingleProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const productData = await ProductModel.findById(productID);
    res.json(productData);
  } catch (e) {
    res.send("Error occured");
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.json(product)
  } catch (e) {
    console.log(e)
    res.send("Error Occured")
  }
};

const updateProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(productID, req.body, {new:true})
    res.json(product)
  } catch (e) {
    res.send("Error Occured")
  }
};

const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await ProductModel.findByIdAndDelete(productID)
    res.json(product)
  } catch (e) {
    res.send("Error Occured")
  }
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
