require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/productController.js":
/*!**********************************************!*\
  !*** ./src/controllers/productController.js ***!
  \**********************************************/
/*! exports provided: addProduct, allProducts, deleteProduct, updateProduct, getProductById, addToCart, getAllProductsFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProducts", function() { return allProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductById", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProductsFromCart", function() { return getAllProductsFromCart; });
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/productModel */ "./src/models/productModel.js");
/* harmony import */ var _models_cartModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cartModel */ "./src/models/cartModel.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);





// Ajouter un parfum
const addProduct = async (req, res) => {
  const {
    name,
    ml,
    price,
    description,
    gender,
    image
  } = req.body;
  try {
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name,
      ml,
      price,
      description,
      gender,
      image
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Supprimer un parfum
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Produit non trouvé"
      });
    }
    res.json({
      message: "Produit supprimé avec succès",
      deletedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Mise à jour d'un produit
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      name,
      ml,
      price
    } = req.body;
    const existingProduct = await _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById(productId);
    if (!existingProduct) {
      return res.status(404).json({
        message: "Produit non trouvé"
      });
    }
    existingProduct.name = name;
    existingProduct.ml = ml;
    existingProduct.price = price;
    const updatedProduct = await existingProduct.save();
    res.json({
      message: "Produit mis à jour avec succès",
      updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
// Récupere un seul parfum
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "Produit non trouvé"
      });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Récuperer tous les parfums
const allProducts = async (req, res) => {
  try {
    const allProducts = await _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
    res.json(allProducts);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};
const addToCart = async (req, res) => {
  try {
    const {
      id: productId,
      userId
    } = req.params;
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById(productId);
    if (!product) {
      return res.status(404).json({
        error: "Product not found"
      });
    }
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].findById(userId);
    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }
    let cart = await _models_cartModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      user: userId,
      active: true
    });
    if (!cart) {
      cart = new _models_cartModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
        items: [],
        user: userId
      });
    }
    const existingItem = cart.items.find(item => item.product.equals(productId));
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.items.push({
        product: productId,
        quantity: 1
      });
    }
    await cart.save();
    res.json({
      cart,
      message: "Product added successfully"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
const getAllProductsFromCart = async (req, res) => {
  try {
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].findById(req.params.userId);
    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }
    const cart = await _models_cartModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      user: user._id,
      active: true
    }).populate("items.product");
    if (!cart) {
      return res.status(404).json({
        error: "Cart not found"
      });
    }
    res.json(cart.items.map(item => item.product));
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


/***/ }),

/***/ "./src/controllers/userController.js":
/*!*******************************************!*\
  !*** ./src/controllers/userController.js ***!
  \*******************************************/
/*! exports provided: createUser, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/auth */ "./src/middlewares/auth.js");


const createUser = async (req, res) => {
  try {
    const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber
    });
    newUser.password = await newUser.crypto(req.body.password);
    await newUser.save();
    const token = Object(_middlewares_auth__WEBPACK_IMPORTED_MODULE_1__["generateAuthToken"])({
      email: newUser.email
    });
    console.log(token);
    res.json({
      newUser,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating user"
    });
  }
};
const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
      email
    }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }
    const verify = await user.verifPass(req.body.password, user.password);
    if (!verify) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }
    const token = Object(_middlewares_auth__WEBPACK_IMPORTED_MODULE_1__["generateAuthToken"])(user);
    res.json({
      user,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_productRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/productRoute */ "./src/routes/productRoute.js");
/* harmony import */ var _routes_userRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/userRoute */ "./src/routes/userRoute.js");
/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/auth */ "./src/middlewares/auth.js");


dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.PORT;





main().catch(err => console.log(err));
async function main() {
  await mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(process.env.MONGO_URI);
  console.log(`[📚 DATABASE ] MongoDB est connecté !!`);
}
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: false
}));
app.get("/", (req, res) => res.send("Bienvenue"));
app.use("/products", _routes_productRoute__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use("/auth", _routes_userRoute__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.listen(port, () => console.log(`[SERVER] is running on http://localhost:${port}`));

/***/ }),

/***/ "./src/middlewares/auth.js":
/*!*********************************!*\
  !*** ./src/middlewares/auth.js ***!
  \*********************************/
/*! exports provided: auth, generateAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAuthToken", function() { return generateAuthToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);


const auth = (req, res, next) => {
  // Récupérer le token JWT de l'en-tête Authorization
  const tokenHeader = req.headers.authorization;
  const token = tokenHeader.split(" ")[1];

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).json({
      message: "Accès non autorisé. Token manquant."
    });
  }
  try {
    // Vérifier la validité du token
    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.JWT_SECRET); // Remplacez par votre clé secrète réelle
    req.user = decoded.user; // Ajouter les données utilisateur décryptées à l'objet req
    next(); // Passer au middleware suivant
  } catch (error) {
    // En cas d'erreur de vérification du token
    res.status(401).json({
      message: "Token invalide."
    });
  }
};
const generateAuthToken = user => {
  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({
    user
  }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
  return token;
};


/***/ }),

/***/ "./src/models/cartModel.js":
/*!*********************************!*\
  !*** ./src/models/cartModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const cartItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  product: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    default: 1
  }
});
const cartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  items: [cartItemSchema],
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: "User",
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});
const Cart = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("Cart", cartSchema);
/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/models/productModel.js":
/*!************************************!*\
  !*** ./src/models/productModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ml: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  gender: {
    type: String,
    enum: ["Masculin", "Féminin", "Mixte"],
    required: true
  }
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Product", productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: [6, "Must be at least 6 characters"]
  },
  address: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    min: [1000, "Zip Code is too short"],
    max: 99999
    // required: true,
  },
  phoneNumber: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  userCart: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: "Cart"
  }
});
userSchema.methods.crypto = async password => {
  const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10);
  const hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, salt);
  return hash;
};
userSchema.methods.verifPass = async (password, elderPassword) => {
  const result = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, elderPassword);
  return result;
};
const User = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("User", userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/routes/productRoute.js":
/*!************************************!*\
  !*** ./src/routes/productRoute.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_productController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/productController */ "./src/controllers/productController.js");


const productRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
productRouter.post("/add-product", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["addProduct"]);
productRouter.get("/all", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["allProducts"]);
productRouter.delete("/:id/delete-product", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"]);
productRouter.post("/:id/addToCart/:userId", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["addToCart"]);
productRouter.put("/:id/update-product", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["updateProduct"]);
productRouter.get("/:id", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["getProductById"]);
productRouter.get("/:userId/cart", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["getAllProductsFromCart"]);
/* harmony default export */ __webpack_exports__["default"] = (productRouter);

/***/ }),

/***/ "./src/routes/userRoute.js":
/*!*********************************!*\
  !*** ./src/routes/userRoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userController */ "./src/controllers/userController.js");


const authRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
authRouter.post("/register", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["createUser"]);
authRouter.post("/login", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["login"]);
/* harmony default export */ __webpack_exports__["default"] = (authRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hakim/dev/belle-ile-parfumee-Back/src/index.js */"./src/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map