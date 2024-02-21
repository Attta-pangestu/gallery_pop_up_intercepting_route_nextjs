import { NextResponse } from "next/server";
import { imgUrls } from "@/utils/data";
const GET = async (request) => {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  const data = imgUrls[id];
  if (!data) {
    return NextResponse.json({ status: 404, message: "not found" });
  }
  return NextResponse.json({ status: 200, message: "success", data });
};

export { GET };
