import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import SinglePost from '@/components/singlePost/SinglePost'

interface Params {
  slug: string;
}


const getPost = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data;
  } catch (error) {
    console.log('Error fetching posts', error);
    return
  }
}

export default async function SinglePostPage({ params }: { params: Params }) {
  const { slug } = params;
  
  const post = await getPost(slug)
  const session = await getServerSession()
  if (!session) {
    redirect("/")
  }

  return (
    <div className='flex flex-col'>
      <SinglePost post={post} />
    </div>
  )
}
