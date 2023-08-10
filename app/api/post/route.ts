import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {

    try {

        const body = await req.json();
        const posts = await prisma.post.create({
            data: body,
        })

        return new NextResponse(
            JSON.stringify(posts),
            {status: 201}
        )
    }

    catch (error){
        return new NextResponse(
            JSON.stringify({message: "something went wrong"}),
            {status: 500}
        )

    }
}