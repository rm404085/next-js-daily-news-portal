// File: src/app/news/[id]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */


import { NewsItem } from "@/types/news";
import Image from "next/image";

// ISR: page revalidates every 60 seconds
export const revalidate = 60;
export const dynamicParams = true;

// SSG: generate static params for first 5 posts
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts: NewsItem[] = await fetch(
    "https://news-api-next-js-three.vercel.app/api/news"
  ).then((res) => res.json());

  return posts.slice(0, 5).map((post) => ({
    id: String(post._id),
  }));
}
// @typescript-eslint/no-explicit-any
// ✅ Page Component
export default async function NewsDetailsPage({ params }: any) {
  const id: string = params.id;

  let post: NewsItem | null = null;

  try {
    const res = await fetch(
      `https://news-api-next-js-three.vercel.app/api/news/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch news");

    post = await res.json();
  } catch (error) {
    console.error(error);
    return (
      <section className="py-12 text-center">
        <p className="text-red-500 text-lg">Failed to load news article.</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-12 text-center">
        <p className="text-gray-500 text-lg">News article not found.</p>
      </section>
    );
  }

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        {post?.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-md object-cover"
          />
        )}

        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4">{post?.title}</h2>

          <div className="flex justify-between items-center text-sm mb-4">
            <p>{new Date(post?.published_at).toLocaleDateString()}</p>
            <p>
              Source: <span>{post?.source}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          {post?.categories?.map((category: string) => (
            <span
              key={category}
              className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>

        <p className="mb-2">{post?.snippet}</p>
        <p className="mb-4">{post?.description}</p>
      </article>
    </section>
  );
}
