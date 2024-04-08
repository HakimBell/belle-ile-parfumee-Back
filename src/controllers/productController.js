import Product from "../models/productModel";
// Ajouter un parfum
const addProduct = async (req, res) => {
  const { name, ml, price } = req.body;
  try {
    const newProduct = new Product({
      name,
      ml,
      price,
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

export {
  addProduct,
  allProducts,
  deleteProduct,
  updateProduct,
  getProductById,
};
