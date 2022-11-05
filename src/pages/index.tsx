import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getAllPosts } from "@src/api";
import { PostMeta } from "@src/api";
import BlogPosts from "@src/components/blogposts";
import Navbar from "@src/components/navbar";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Maik's Blog</title>
          <meta name="description" content="Blog of Maik (malorama)" />
        </Head>
        <Navbar />
        <div className="container">
          <BlogPosts posts={posts} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
