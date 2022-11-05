import React from "react";
import Image from "next/image";
import styles from "@styles/Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.textbox}>
          <h2 className="heading-secondary">Hello, I am Maik!</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            veritatis fuga sint animi magni amet harum, voluptates mollitia esse
            optio est delectus aut in reprehenderit quas natus ut qui ab sunt.
            Eveniet temporibus incidunt quasi quisquam soluta harum voluptates
            pariatur repellat molestiae, perferendis deserunt laudantium qui
            voluptatibus sit. Ducimus, ea.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/maik.jpg"
            width={404}
            height={378}
            alt="Image of Maik"
          />
        </div>
      </div>
    </section>
  );
}
