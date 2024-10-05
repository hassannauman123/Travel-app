//travel-app/app/api/ViewAllCamps.ts

// import dbConnect from "@/utils/dbConnect";
// import CampModel from "@/app/models/CampModel";
// import { NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await dbConnect(); //connect to db

//     if (req.method === 'GET') {
//         try {
//             const camps = await CampModel.find({}); //find all camps
//             res.status(200).json(camps); //return all camps
//         } catch (error) {
//             console.error("Error loading camps", error);
//             res.status(500).json({ error: "Failed to load camps" }); // Handle errors
//         }
//     }
// }

// app/api/ViewAllCamps/route.ts
import dbConnect from '@/utils/dbConnect';
import CampModel from '@/app/models/CampModel';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();
        const camps = await CampModel.find({});
        return NextResponse.json(camps, { status: 200 });
    } catch (error) {
        console.error('Error loading camps:', error);
        return NextResponse.json({ error: 'Failed to load camps' }, { status: 500 });
    }
}
