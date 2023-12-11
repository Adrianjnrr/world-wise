import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy copyright {new Date().getFullYear()} by Worldwise.ALYTAUS KOLEGIJA
      </p>
    </div>
  );
}

export default Footer;
