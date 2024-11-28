
import { NextRequest, NextResponse } from "next/server";

//fetch post with id
export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = params
    try {
        const res = await fetch(`https://dummyjson.com/posts/${slug}`)
        const posts = await res.json()
        return NextResponse.json(posts)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch data")

    }

}