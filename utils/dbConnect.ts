import { Console } from "console";
import mongoose from "mongoose";


//process is a global object in Node.js that provides information about, and control over, the current Node.js process.
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI!!! : ", MONGO_URI);

if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

type ConnectionObject = {
    isConnected?: number  //? means optional
}

const connection: ConnectionObject = {}


async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '') //tell mongoose to connect our db or '' if not found

        connection.isConnected = db.connections[0].readyState;
        console.log("Connection established");

    } catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
}

export default dbConnect;