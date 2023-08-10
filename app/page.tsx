

import { PostType } from '@/types/types';
import Image from 'next/image'

interface Props {
  post: PostType[];
}

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/get`, {
    method: "GET",
    cache: "no-store"
  })

  if (!res.ok){
    console.log(res);
  }
  return res.json()
}


export default async function Home() {


  const data:PostType[] = await getPosts();
  console.log(data)

  return (
    <div>
      {data.map((post) => (
        <h1>
          {post.title}
          {post.content}
          {post.published}
        </h1>
      ))}
    </div>
  )
}
