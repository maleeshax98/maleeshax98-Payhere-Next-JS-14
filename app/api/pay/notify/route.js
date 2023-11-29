import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(req) {

  try {
    const data = await req.formData();

    const order_id = data.get("order_id");
    const payhere_amount = data.get("payhere_amount");
    const payhere_currency = data.get("payhere_currency");
    const status_code = data.get("status_code");
    const md5sig = data.get("md5sig");
    const merchant_id = data.get("merchant_id");

    const mSec = process.env.MS; // Merchernt Secret use .env

    const hashText =
      merchant_id +
      order_id +
      payhere_amount +
      payhere_currency +
      status_code +
      md5(mSec).toLocaleUpperCase();

    const local_md5sig = md5(hashText).toLocaleUpperCase();

    if (local_md5sig === md5sig && status_code == 2) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Somthing went wrong" }, { status: 500 });
  }
}
