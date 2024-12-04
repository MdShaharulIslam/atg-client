import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setMessage("");

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded.");
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create payment intent on the server
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 10000, // Amount in cents (e.g., 100.00 USD)
          email, // Pass the user's email for receipt
        }),
      });

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error("Failed to get payment intent client secret.");
      }

      // Confirm the card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email,
          },
        },
      });

      if (error) {
        setMessage(`Payment failed: ${error.message}`);
      } else if (paymentIntent?.status === "succeeded") {
        setMessage("Payment successful! Thank you for your order.");
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4">Complete Your Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Card Element */}
        <div>
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
            Card Details
          </label>
          <div id="card-element" className="p-4 border rounded-lg">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#fa755a" },
                },
              }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>

      {/* Message */}
      {message && (
        <div className="mt-4 text-center">
          <p className="text-gray-800">{message}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
