import React from "react";
import styles from "@styles/Navbar.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.brand}>
        <Link href="/">Maik Lorenz</Link>
      </h2>
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
