import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { passcode } = await req.json();
  const correct = process.env.PORTFOLIO_PASSCODE;

  if (!correct) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  if (passcode === correct) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
