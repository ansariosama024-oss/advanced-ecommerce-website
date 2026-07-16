import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const cart = await Cart.create({
      product: productId,
      quantity,
    });

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("product");

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;

    console.log("ID:", req.params.id);

    const cart = await Cart.findByIdAndUpdate(
      req.params.id.trim(),
      { quantity },
      { new: true }
    ).populate("product");

    if (!cart) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Cart item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};