import styles from "./styles.module.scss";

interface RatingProps {
  score: string;
}

export function Rating(props: RatingProps) {
  return (
    <div className={styles.rating}>
      <img
        className={styles.ratingIcon}
        src="/images/icon-star.png"
        alt="Estrela"
      />
      <span>{props.score}/10 TMDB</span>
    </div>
  );
}
