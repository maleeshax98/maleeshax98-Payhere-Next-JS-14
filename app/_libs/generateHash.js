import axios from "axios";

export async function generateHash(order_id, payhere_amount, payhere_currency) {
  const getHash = await axios.post("http://localhost/api/pay/hash", {
    merchant_id: process.env.mid,
    order_id,
    payhere_amount,
    payhere_currency
  });

  const hashCode = getHash.data.hash;

  return hashCode;
}
