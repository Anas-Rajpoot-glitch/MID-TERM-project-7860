import { Router } from "express";
import MenuItem from "../models/MenuItem.js";

const router = Router();

/**
 * GET /menu
 * Returns all menu items
 */
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ category: 1, name: 1 }).lean();
    return res.json({ ok: true, count: items.length, items });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/**
 * GET /menu/random
 * Returns one random item where inStock = true
 */
router.get("/random", async (req, res) => {
  try {
    const [item] = await MenuItem.aggregate([
      { $match: { inStock: true } },
      { $sample: { size: 1 } }
    ]);
    if (!item) return res.status(404).json({ ok: false, error: "No in-stock items" });
    return res.json({ ok: true, item });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
