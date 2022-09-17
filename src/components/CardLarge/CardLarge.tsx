import { Link } from "react-router-dom";

import { Rating } from "../Rating/Rating";
import styles from "./styles.module.scss";

const IMG_URL = import.meta.env.VITE_IMG_URL;
interface ICardLargeProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: string | number;
}

export function CardLarge({ id, imageUrl, rating, title }: ICardLargeProps) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.cardLarge}>
        <img
          src={`${IMG_URL}${imageUrl}`}
          className={styles.cardImg}
          alt={title}
        />
        <h3 className={styles.cardTitle}>{title}</h3>
        <Rating score={rating} />
      </div>
    </Link>
  );
}
