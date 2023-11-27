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
      merchant_id: process.env.mid, // Replace your Merchant ID
      return_url: "http://localhost/", // Important
      cancel_url: "http://localhost/", // Important
      notify_url: "http://localhost/api/pay/notify",
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
