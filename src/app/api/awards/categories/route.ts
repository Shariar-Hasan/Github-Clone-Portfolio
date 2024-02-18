import { NextResponse } from "next/server";
import { connectToDb } from "../../db";
import { Award } from "../model";

export const GET = async (): Promise<NextResponse> => {
  try {
    await connectToDb();
    const categories = await Award.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          count: 1,
        },
      },
    ]);
    return NextResponse.json({ data: categories, success: true });
  } catch (error: any) {
    return NextResponse.json({ data: error.message, success: true });
  }
};
