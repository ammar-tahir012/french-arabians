import Product from "../models/product.model.js";
import Order from "../models/order.model.js";

export const getCartProducts = async (req, res) => {
	try {
		const products = await Product.find({ _id: { $in: req.user.cartItems.map((item) => item.id) } });

		// Add quantity for each product
		const cartItems = products.map((product) => {
			const item = req.user.cartItems.find((cartItem) => cartItem.id === product._id.toString());
			return { ...product.toJSON(), quantity: item.quantity };
		});

		res.json(cartItems);
	} catch (error) {
		console.error("Error in getCartProducts controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = req.user;

        // Ensure cartItems is initialized
        if (!user.cartItems) {
            user.cartItems = [];
        }

        const existingItem = user.cartItems.find((item) => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            user.cartItems.push({ id: productId, quantity: 1 });
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.error("Error in addToCart controller:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const removeAllFromCart = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;

		if (!productId) {
			user.cartItems = [];
		} else {
			user.cartItems = user.cartItems.filter((item) => item.id !== productId);
		}

		await user.save();
		res.json(user.cartItems);
	} catch (error) {
		console.error("Error in removeAllFromCart controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const updateQuantity = async (req, res) => {
	try {
		const { id: productId } = req.params;
		const { quantity } = req.body;
		const user = req.user;

		const existingItem = user.cartItems.find((item) => item.id === productId);

		if (existingItem) {
			if (quantity === 0) {
				user.cartItems = user.cartItems.filter((item) => item.id !== productId);
			} else {
				existingItem.quantity = quantity;
			}
			await user.save();
			res.json(user.cartItems);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (error) {
		console.error("Error in updateQuantity controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const checkout = async (req, res) => {
	try {
		const { address } = req.body;
		const user = req.user;

		if (!user.cartItems.length) {
			return res.status(400).json({ message: "Cart is empty" });
		}

		const products = await Product.find({ _id: { $in: user.cartItems.map((item) => item.id) } });

		const totalPrice = products.reduce((total, product) => {
			const item = user.cartItems.find((cartItem) => cartItem.id === product._id.toString());
			return total + product.price * item.quantity;
		}, 0);

		const order = new Order({
			user: user._id,
			items: user.cartItems,
			totalPrice,
			address,
			paymentMethod: "COD",
			status: "Pending",
		});
		await order.save();

		user.cartItems = [];
		await user.save();

		res.status(200).json({
			message: "Order placed successfully with Cash on Delivery",
			order: { items: products, totalPrice, address, paymentMethod: "COD" },
		});
	} catch (error) {
		console.error("Error in checkout controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
