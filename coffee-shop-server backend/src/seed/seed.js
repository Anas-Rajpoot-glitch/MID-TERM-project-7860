import dotenv from "dotenv";
import mongoose from "mongoose";
import MenuItem from "../models/MenuItem.js";

dotenv.config();

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME });

    // Clear existing data (optional, safe for repeated seeds in testing)
    await MenuItem.deleteMany({});

    // At least 6 items total
    // - ≥3 in "Hot Drinks"
    // - ≥1 in "Cold Drinks"
    // - ≥1 in "Pastries"
    // - ≥1 item with inStock=false
    const items = [
      { name: "Espresso",    category: "Hot Drinks",  price: 800.50, inStock: true },
      { name: "Cappuccino",  category: "Hot Drinks",  price: 550.50, inStock: true },
      { name: "Latte",       category: "Hot Drinks",  price: 900.00, inStock: true },
      { name: "Iced Coffee", category: "Cold Drinks", price: 800.00, inStock: true },
      { name: "Croissant",   category: "Pastries",    price: 700.50, inStock: true },
      { name: "Muffin",      category: "Pastries",    price: 400.00, inStock: false } // out of stock
    ];

    await MenuItem.insertMany(items);
    console.log("Seed complete:", await MenuItem.countDocuments(), "items inserted.");

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

run();
