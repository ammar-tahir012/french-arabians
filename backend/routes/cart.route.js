import express from "express";
import {
	addToCart,
	getCartProducts,
	removeAllFromCart,
	updateQuantity,
	checkout, // Import the new checkout function
} from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, getCartProducts);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);

// New route for checkout
router.post("/checkout", protectRoute, checkout);

export default router;
