import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.scss";

interface RatingProps {
  score: number | string;
}

export function Rating(props: RatingProps) {
  return (
    <div className={styles.rating}>
      <AiFillStar className={styles.ratingIcon} />
      <span>{props.score}/10 TMDB</span>
    </div>
  );
}
