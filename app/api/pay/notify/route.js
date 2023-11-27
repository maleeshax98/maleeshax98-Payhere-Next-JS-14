import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      merchant_id,
      order_id,
      payhere_amount,
      payhere_currency,
      status_code,
      md5sig,
    } = await req.json();

    const mSec = process.env.ms;  // Merchernt Secret use .env

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
