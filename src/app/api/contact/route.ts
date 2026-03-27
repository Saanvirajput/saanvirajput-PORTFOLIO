import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const contact = await Contact.create(data);
    return NextResponse.json(contact, { status: 201 });
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 400 });
  }
}
