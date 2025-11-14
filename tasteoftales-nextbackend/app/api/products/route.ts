import { NextRequest, NextResponse } from 'next/server';

// In-memory products array for demo purposes
let products = [
  { id: 1, name: 'Coffee A', price: 100 },
  { id: 2, name: 'Coffee B', price: 120 },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = { id: Date.now(), ...body };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const index = products.findIndex(p => p.id === body.id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  products[index] = body;
  return NextResponse.json(products[index]);
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  products = products.filter(p => p.id !== body.id);
  return NextResponse.json({ success: true });
}
