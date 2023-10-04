import connectDB from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import WorkItem from "@/app/models/epicSchema"
import mongoose from "mongoose";

export async function POST(req : NextRequest) {
  const { name, id, description, storyPoints, workItemStatus, children, linked} 
        = await req.json();

  try {
    await connectDB();
    await WorkItem.create({ name, id, description, storyPoints, workItemStatus, children, linked });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}