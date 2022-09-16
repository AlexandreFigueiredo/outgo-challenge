import { Link } from "react-router-dom";
import { Rating } from "../Rating";
import { IMG_URL } from "../../services/api";
import styles from "./styles.module.scss";

interface CardLargeProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: string;
}

export function CardLarge(props: CardLargeProps) {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className={styles.cardLarge}>
        <img src={`${IMG_URL}${props.imageUrl}`} className={styles.cardImg} />
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <Rating score={props.rating} />
      </div>
    </Link>
  );
}
