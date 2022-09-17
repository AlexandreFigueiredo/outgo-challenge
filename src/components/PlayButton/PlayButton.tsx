import styles from "./styles.module.scss";

export function PlayButton() {
  return (
    <div className={styles.playButton}>
      <img src="/images/play-button.png" alt="Play" />
      <p>Play Trailer</p>
    </div>
  );
}