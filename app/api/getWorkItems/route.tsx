import connectDB from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import WorkItem from "@/app/models/epicSchema"
import mongoose from "mongoose";

export async function GET(req : any, res : NextRequest) {

  try {
    await connectDB();

    const allWorkItems = await WorkItem.find();

    console.log(allWorkItems);

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
      workItems: allWorkItems
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