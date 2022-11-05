import React from "react";
import type { PostMeta } from "@src/api";
import styles from "@styles/BlogPosts.module.css";
import Link from "next/link";
// https://react-icons.github.io/react-icons/icons?name=io5
import { IoCalendarOutline, IoPricetags } from "react-icons/io5";

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
            <div className={styles.meta}>
              <div className={styles.metaitem}>
                <IoCalendarOutline />
                <p className={styles.date}>
                  {new Date(post.date).toDateString()}
                </p>
              </div>
              <div className={styles.metaitem}>
                <IoPricetags />
                <p className={styles.tags}>
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </p>
              </div>
            </div>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
