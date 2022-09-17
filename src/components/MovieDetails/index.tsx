import { useState } from "react";
import { RiBookmarkFill,RiBookmarkLine } from "react-icons/ri";

import { ITag } from "../../services/interfaces";
import { Cast } from "../Cast";
import { Rating } from "../Rating";
import styles from "./styles.module.scss";

interface IMovieDetailsProps {
  movieId?: string;
  title: string;
  rating: string | number;
  tags: ITag[];
  duration: number;
  description: string;
  language: string;
}

export function MovieDetails({
  movieId,
  title,
  rating,
  tags,
  duration,
  description,
  language,
}: IMovieDetailsProps) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleIsSaved = () => {
    setIsSaved((current) => !current);
  };

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieHeader}>
        <div className={styles.movieTitleWrapper}>
          <h3 className={styles.movieTitle}>{title}</h3>
          <button className={styles.movieSave} onClick={toggleIsSaved}>
            {isSaved ? (
              <RiBookmarkFill size={20} />
            ) : (
              <RiBookmarkLine size={20} />
            )}
          </button>
        </div>
        <Rating score={(Math.round(Number(rating) * 100) / 100).toFixed(2)} />
        <div className={styles.movieTags}>
          {tags && tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
        </div>
        <div className={styles.movieInformation}>
          <div className={styles.informationWrapper}>
            <h4 className={styles.informationTitle}>Length</h4>
            <p className={styles.informationContent}>{`${Math.floor(
              duration / 60
            )}h ${duration % 60}min`}</p>
          </div>
          <div className={styles.informationWrapper}>
            <h4 className={styles.informationTitle}>Language</h4>
            {language && (
              <p className={styles.informationContent}>
                {language.toUpperCase()}
              </p>
            )}
          </div>
          <div className={styles.informationWrapper}>
            <h4 className={styles.informationTitle}>Rating</h4>
            <p className={styles.informationContent}>
              {(Math.round(Number(rating) * 100) / 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.movieDescription}>
        <h4 className={styles.descriptionTitle}>Description</h4>
        <p className={styles.descriptionContent}>{description}</p>
      </div>
      <div className={styles.movieCast}>
        <h4 className={styles.castTitle}>Cast</h4>
        <div className={styles.castList}>
          <Cast movieId={movieId} />
        </div>
      </div>
    </div>
  );
}
