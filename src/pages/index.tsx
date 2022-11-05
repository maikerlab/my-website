import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getAllPosts } from "@src/api";
import { PostMeta } from "@src/api";
import BlogPosts from "@src/components/blogposts";
import Header from "@src/components/header";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Maik&apos;s Blog</title>
        <meta name="description" content="Blog of Maik (malorama)" />
      </Head>
      <BlogPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
