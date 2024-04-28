import productModel from "../Models/productModel.js";

export const getAllProducts = async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findById({ _id: id });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { title, description, price, old_price, category, brand, image } =
    req.body;
  if (
    !title ||
    !description ||
    !price ||
    !old_price ||
    !category ||
    !image ||
    !brand
  ) {
    return res.json({ error: "Fill all fields" });
  }
  const newProduct = await productModel.create({
    title,
    description,
    price,
    old_price,
    category,
    brand,
    image,
  });
  await newProduct.save();
  res.json({ success: "Product created" });
};

export const updateProductsById = () => {};

export const deleteProductsById = () => {};
