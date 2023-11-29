"use client";
import Image from "next/image";
import { generateHash } from "./_libs/generateHash";

export default function Home() {
  const hanldePaymentInPage = async () => {
    const order_id = "order_898";
    const payhere_amount = 3000.0;
    const payhere_currency = "LKR";

    const hash = await generateHash(order_id, payhere_amount, payhere_currency);
    alert(hash);
    var payment = {
      sandbox: true,
      merchant_id: process.env.NEXT_PUBLIC_MID, // Replace your Merchant ID
      return_url: "http://localhost/", // Important
      cancel_url: "http://localhost/", // Important
      notify_url:
        "https://b194-2402-4000-2201-3c0-b1f1-acd1-63dd-b981.ngrok-free.app/api/pay/notify", //not working with localhost you can test with ngrok
      order_id: order_id,
      items: "Door bell wireles",
      amount: payhere_amount,
      currency: payhere_currency,
      hash: hash,
      first_name: "Maleesha",
      last_name: "Nayanashan",
      email: "maleeshathegreat@gmail.com",
      phone: "0778365545",
      address: "No.1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
      delivery_address: "No. 46, Galle road, Kalutara South",
      delivery_city: "Kalutara",
      delivery_country: "Sri Lanka",
      custom_1: "",
      custom_2: "",
    };

    payhere.startPayment(payment);

    payhere.onCompleted = function onCompleted(orderId, all) {
      console.log("Payment completed. OrderID:" + orderId);
      // Note: validate the payment and show success or failure page to the customer
    };

    // Payment window closed
    payhere.onDismissed = function onDismissed() {
      // Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
    };

    // Error occurred
    payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:" + error);
    };
  };
  return (
    <div>
      <button
        className="p-2 bg-blue-600 text-white font-semibold"
        onClick={() => {
          hanldePaymentInPage();
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
