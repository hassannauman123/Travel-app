// app/api/PostCamp/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
// import CampModel from '@/models/CampModel';
import CampModel from '@/app/models/CampModel';

// Handle the POST request to create a new camp
export async function POST(req: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the camp data from the request body
    const body = await req.json();
    const { pic, title, description, rate, myName } = body;

    // Create a new camp document using the CampModel
    const newCamp = new CampModel({
      pic,
      title,
      description,
      rate,
      myName,
    });

    // Save the camp to the database
    await newCamp.save();

    // Return a success response
    return NextResponse.json({ message: 'Camp created successfully!', camp: newCamp }, { status: 201 });
  } catch (error) {
    console.error('Error posting camp:', error);
    return NextResponse.json({ error: 'Failed to post camp' }, { status: 500 });
  }
}
