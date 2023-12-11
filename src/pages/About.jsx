import PageNav from "../component/PageNav";
import styles from "./Product.module.css";

export default function About() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise Application is a single page application that keeps track
            of your adventure and places you have been too.
          </p>
        </div>
      </section>
    </main>
  );
}
