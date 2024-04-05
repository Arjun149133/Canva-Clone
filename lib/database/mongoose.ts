import mongoose, { Mongoose } from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const conectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGO_URL) {
    throw new Error(
      "Please define the MONGO_URL environment variable inside .env.local"
    );
  }

  cached.promise = mongoose.connect(MONGO_URL, {
    dbName: "canva",
    bufferCommands: false,
  });

  cached.conn = await cached.promise;

  return cached.conn;
};
