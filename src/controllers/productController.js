import Product from "../models/productModel";
import Cart from "../models/cartModel";
import User from "../models/userModel";
import mongoose from "mongoose";

// Ajouter un parfum
const addProduct = async (req, res) => {
  const { name, ml, price, description, gender, image } = req.body;
  try {
    const newProduct = new Product({
      name,
      ml,
      price,
      description,
      gender,
      image,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un parfum
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.json({ message: "Produit supprimé avec succès", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mise à jour d'un produit
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, ml, price } = req.body;
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    existingProduct.name = name;
    existingProduct.ml = ml;
    existingProduct.price = price;

    const updatedProduct = await existingProduct.save();

    res.json({ message: "Produit mis à jour avec succès", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Récupere un seul parfum
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récuperer tous les parfums
const allProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { id: productId, userId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let cart = await Cart.findOne({ user: userId, active: true });

    if (!cart) {
      cart = new Cart({ items: [], user: userId });
    }

    const existingItem = cart.items.find((item) =>
      item.product.equals(productId)
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();

    res.json({ cart, message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProductsFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cart = await Cart.findOne({ user: user._id, active: true }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.json(cart.items.map((item) => item.product));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  addProduct,
  allProducts,
  deleteProduct,
  updateProduct,
  getProductById,
  addToCart,
  getAllProductsFromCart,
};
