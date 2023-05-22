const Product = require("../model/Product");


// Add New product
const product_create = async (req, res) => {
  console.log(req.body);
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Get All products
const product_all = async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
};;

// Get single product
const product_Single = async (req, res, next)=>{
  try {
      const product = await Product.findById(req.params.productId);
      res.json(product);
      console.log(product);
      res.send(product);
  } catch (error) {
  res.json({ message: error });
  }
};


module.exports = {
    product_create,
    product_all,
  }