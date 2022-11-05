import React from "react";
import type { PostMeta } from "@src/api";
import styles from "@styles/BlogPosts.module.css";
import Link from "next/link";

export default function BlogPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h2 className={styles.heading}>Blog Posts</h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <div className={styles.title}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
            <p className={styles.date}>{new Date(post.date).toDateString()}</p>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <p className={styles.tags}>
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
