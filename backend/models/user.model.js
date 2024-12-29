import mongoose from "mongoose";
import bcrypt from"bcryptjs"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
        },
        carItems: [
            {
                quantity: {
                    type: Number,
                    default: 1,
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
    },
    {
        timestamps: true, // Place this in the schema options
    }
);


//Hashing By Using Bcrypt
userSchema.pre("save", async function (next) {
    // Use "this" to reference the current document
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (error) {
        next(error);
    }
});
// check if password enter is correct and compare plain with hashed
userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password)
}
const User = mongoose.model("User", userSchema);
export default User;
