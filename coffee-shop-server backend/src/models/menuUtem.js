import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Hot Drinks", "Cold Drinks", "Pastries"], // helps keep categories clean
    },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true } // default = true (as required)
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", MenuItemSchema, "menu_items");
// collection name explicitly set to 'menu_items'
