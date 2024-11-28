import { NextRequest, NextResponse } from "next/server";
import Post from '../../type'

// Fetch all posts
export async function GET(req: NextRequest) {
    try {
        const res = await fetch('https://dummyjson.com/posts');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        const posts: Post[] = data.posts;
        // Return the posts in the response
        return NextResponse.json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
