import React from "react";
import styles from "@styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>Maik Lorenz</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="#">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="#">About</Link>
        </li>
      </ul>
    </nav>
  );
}
