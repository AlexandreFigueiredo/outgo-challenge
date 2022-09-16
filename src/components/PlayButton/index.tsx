import styles from "./styles.module.scss";

interface PlayButtonProps {
  trailerUrl?: string;
}

export function PlayButton({ trailerUrl }: PlayButtonProps) {
  return (
    <div className={styles.playButton}>
      <img src="/images/play-button.png" alt="Play" />
      <p>Play Trailer {trailerUrl}</p>
    </div>
  );
}
