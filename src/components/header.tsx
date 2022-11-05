import React from "react";
import styles from "@styles/Header.module.css";
import Link from "next/link";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.brand}>
        <Link href="/">Maik Lorenz</Link>
      </h2>
      <div className={styles.social}>
        <Link href="https://github.com/maikerlab">
          <IoLogoGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/">
          <IoLogoLinkedin style={{ color: "#0e76a8" }} />
        </Link>
        <Link href="https://twitter.com/malorama">
          <IoLogoTwitter style={{ color: "#1DA1F2" }} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
