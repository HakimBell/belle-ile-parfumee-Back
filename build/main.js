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
/*! exports provided: addProduct, allProducts, deleteProduct, updateProduct, getProductById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProducts", function() { return allProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductById", function() { return getProductById; });
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/productModel */ "./src/models/productModel.js");

// Ajouter un parfum
const addProduct = async (req, res) => {
  const {
    name,
    ml,
    price
  } = req.body;
  try {
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name,
      ml,
      price
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
app.listen(port, () => console.log(`[SERVER] is running on http://localhost:${port}`));

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
  }
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Product", productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Product);

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
productRouter.put("/:id/update-product", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["updateProduct"]);
productRouter.get("/:id", _controllers_productController__WEBPACK_IMPORTED_MODULE_1__["getProductById"]);
/* harmony default export */ __webpack_exports__["default"] = (productRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hakim/dev/belle-ile-parfumee-Back/src/index.js */"./src/index.js");


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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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