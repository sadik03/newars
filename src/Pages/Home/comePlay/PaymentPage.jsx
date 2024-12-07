import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Parse initial rate from state (convert from string if necessary)
  const initialRate = typeof state.rate === 'string' ? parseFloat(state.rate.replace(/[^0-9.-]+/g, "")) : state.rate;
  const [totalAmount, setTotalAmount] = useState(initialRate);

  // Define additional feature costs
  const additionalCosts = {
    "Personal Coach": 50,
    "Clothes": 20,
    "Food": 30,
  };

  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Update totalAmount when initial rate changes
  useEffect(() => {
    setTotalAmount(initialRate);
    console.log("Initial rate:", initialRate);
  }, [initialRate]);

  // Handle feature selection and update total amount
  const handleFeatureChange = (event) => {
    const feature = event.target.value;
    const featureCost = additionalCosts[feature] || 0;

    if (event.target.checked) {
      setTotalAmount((prevTotal) => {
        const newTotal = prevTotal + featureCost;
        console.log(`Adding feature: ${feature}, cost: ${featureCost}, new total: ${newTotal}`);
        return newTotal;
      });
    } else {
      setTotalAmount((prevTotal) => {
        const newTotal = prevTotal - featureCost;
        console.log(`Removing feature: ${feature}, cost: ${featureCost}, new total: ${newTotal}`);
        return newTotal;
      });
    }
  };

  // Handle Razorpay payment process
  const handlePayment = async () => {
    console.log("Payment button clicked");

    // Fetch order details from server
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount,  // Send total amount to backend
      }),
    });

    const orderData = await res.json();
    console.log("Order data:", orderData);

    // Set up Razorpay options
    const options = {
      key: "rzp_test_yabisLhA1gyGDj", // Replace with your Razorpay test key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "MD SADIK",
      description: "Event Registration",
      order_id: orderData.id, // Razorpay Order ID
      handler: function (response) {
        // Handle payment success
        alert("Payment Successful");
        navigate("/confirmation");
      },
      prefill: {
        name: state.userName,
        email: state.email,
        contact: state.phoneNumber,
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    
    if (paymentObject) {
      paymentObject.open();
      console.log("Razorpay opened successfully");
    } else {
      console.log("Razorpay instance failed to create");
    }
  };

  return (
    <>
      <ProgressBar />
      <motion.div
        className="payment-page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Payment for {state.name}</h1>
        <p>Base Rate: ₹{initialRate}</p>
        <div className="additional-options">
          <h2>Select Additional Options:</h2>
          {Object.keys(additionalCosts).map((feature) => (
            <label key={feature}>
              <input
                type="checkbox"
                value={feature}
                onChange={handleFeatureChange}
              />
              {feature} (+₹{additionalCosts[feature]})
            </label>
          ))}
        </div>
        <div className="total-amount">
          <h2>Total Amount: ₹{totalAmount}</h2>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </motion.div>
    </>
  );
};

export default PaymentPage;
