require('dotenv').config(); // Load environment variables
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Environment variable for key_id
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Environment variable for key_secret
});

// Route to create an order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ error: "Invalid amount. Please provide a valid number." });
  }

  const options = {
    amount: amount * 100, // Convert to smallest currency unit (paise for INR)
    currency: "INR",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({ id: order.id, currency: order.currency, amount: order.amount });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order. Please try again." });
  }
});

// Server setup
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
