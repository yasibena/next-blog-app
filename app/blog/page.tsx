import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import PostList from '@/components/postLists/PostList'
import Post from '../type'

const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch('http://localhost:3000/api/blog', { next: { revalidate: 3600 } })
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    const data = await res.json()
    return data;
  } catch (error) {
    console.log('Error fetching posts', error);
    return []
  }
}

export default async function blog() {
  const posts: Post[] = await getPosts()
  const session = await getServerSession()
  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}
