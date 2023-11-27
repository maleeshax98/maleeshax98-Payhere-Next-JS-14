import md5 from "md5";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { merchant_id, order_id, payhere_amount, payhere_currency } =
    await req.json();

  const mSec = process.env.ms; // Merchernt Secret use .env

  const hashText =
    merchant_id +
    order_id +
    payhere_amount.toFixed(2) +
    payhere_currency +
    md5(mSec).toLocaleUpperCase();

  const hash = md5(hashText).toLocaleUpperCase();

  return NextResponse.json({ hash }, { status: 200 });
}
