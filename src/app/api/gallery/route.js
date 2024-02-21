import { imgUrls } from "@/utils/data";
import { NextResponse } from "next/server";

const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const data = imgUrls[id];
    return NextResponse.json({ status: 200, message: "success", data });
  } else {
    const data = imgUrls;
    return NextResponse.json({ status: 200, message: "success", data });
  }
};

export { GET };
