"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Post from '../../app/type'

interface PostListProps {
    posts: Post[]
}

export default function PostList({ posts }: PostListProps) {

    return (
        <div className='w-auto my-20 lg:mx-[10rem] mx-[5rem]'>
            <div className='flex place-items-center my-4 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <h1 className='text-[1.5rem] font-bold border-b-emerald-600 border-b-[5px] '>Blog Posts</h1>

            </div>
            <div>
                <ul className=' grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        posts?.map(post =>
                            <div className='m-3 bg-[#ffffffe3] text-slate-950 p-3 rounded flex '>
                                <li key={post?.id} className=' gap-3'>
                                    <div className="font-bold text-[1.3rem] after:text-[white]">
                                        <h2>{post?.title.substring(0,30)}</h2>
                                        <hr className="border-t-4 border-dashed border-emerald-600 my-4" />
                                    </div>
                                    <div>
                                        <p>{post?.body.substring(0, 100)}...</p>
                                    </div>
                                    <div className='flex gap-1 my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                        </svg>
                                        {post?.views} 
                                    </div>
                                    <div className='flex gap-1 my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="size-6">
                                            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                        </svg>

                                        {post?.reactions?.likes} 
                                    </div>
                                    <div className='my-2 bg-emerald-600 text-white w-[7rem] flex rounded p-2  font-semibold'>
                                        <Link href={`/blog/${post.id}`} className=''>
                                            Read More...
                                        </Link>
                                    </div>

                                </li>
                            </div>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
