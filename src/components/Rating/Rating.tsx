import { AiFillStar } from "react-icons/ai";

import styles from "./styles.module.scss";

interface IRatingProps {
  score: string| number;
}

export function Rating({ score }: IRatingProps) {
  return (
    <div className={styles.rating}>
      <AiFillStar className={styles.ratingIcon} />
      <span>{score}/10 TMDB</span>
    </div>
  );
}
