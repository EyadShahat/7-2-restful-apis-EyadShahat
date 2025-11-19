/**
 * db.js — Mongo connection helper
 * -------------------------------------------
 * TASK DB-1:
 *   - Export connectDB() that connects Mongoose using MONGO_URL
 *   - Log success; throw on failure
 */

import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connected"); // ⚠️ use this exact string (grader expects this)
  } catch (err) {
    console.error("Connection error:", err.message); // ⚠️ exact phrasing
    throw err;
  }
}
