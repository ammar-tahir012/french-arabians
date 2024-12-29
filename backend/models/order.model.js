import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		// Reference to the user placing the order
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		// List of items in the order
		items: [
			{
				id: { 
					type: mongoose.Schema.Types.ObjectId, 
					ref: "Product", 
					required: true 
				},
				quantity: { 
					type: Number, 
					required: true, 
					default: 1 
				},
			},
		],
		// Total price of the order
		totalPrice: { 
			type: Number, 
			required: true 
		},
		// Delivery address
		address: { 
			type: String, 
			required: true 
		},
		// Payment method (e.g., "COD")
		paymentMethod: { 
			type: String, 
			default: "COD" 
		},
		// Order status (e.g., Pending, Confirmed, Shipped, Delivered)
		status: { 
			type: String, 
			default: "Pending", 
			enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
		},
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt fields
	}
);

export default mongoose.model("Order", orderSchema);
