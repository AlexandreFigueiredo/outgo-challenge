import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getGenresAndRuntimeByMovieId,
  IMG_URL,
  ITag,
} from "../../services/api";
import { Loader } from "../Loader";
import { Rating } from "../Rating";
import styles from "./styles.module.scss";

interface CardSmallProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: number | string;
}

export function CardSmall({ id, imageUrl, rating, title }: CardSmallProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<ITag[]>([]);
  const [runtime, setRuntime] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    getGenresAndRuntimeByMovieId(id.toString()).then(({ genres, runtime }) => {
      setTags(genres);
      setRuntime(runtime);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Link to={`/movie/${id}`}>
          <div className={styles.cardSmall}>
            <img src={`${IMG_URL}${imageUrl}`} className={styles.cardImg} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <Rating score={rating.toString()} />
              <div className={styles.cardTags}>
                {tags.map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </div>
              <div className={styles.cardDuration}>
                <img
                  className={styles.cardDurationIcon}
                  src="/images/icon-duration.png"
                  alt="Duração"
                />
                <span>{`${Math.floor(runtime / 60)}h ${runtime % 60}min`}</span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
