import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    console.log("YOU GHER");
    const body = await req.json();
    console.log(body);
    const posts = await prisma.post.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
    const posts = await prisma.post.delete({
      where: {
        id: body.id,
      },
    });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};
