import styles from "./styles.module.scss";

export function Loader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayInner}>
        <div className={styles.overlayContent}>
          <span className={styles.spinner}></span>
        </div>
      </div>
    </div>
  );
}
