import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";

import { getTrailerByMovieId, ITrailer } from "../../services/api";

import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import styles from "./styles.module.scss";
import { Loader } from "../Loader";

export function PlayButton() {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<ITrailer[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      getTrailerByMovieId(movieId).then(({ results }) => {
        setTrailer(
          results.filter((trailer) => trailer.type === "Trailer").slice(0, 1)
        );
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {trailer[0] && (
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId={trailer[0].key}
              onClose={() => setOpen(false)}
            />
          )}
          <div className={styles.playButton} onClick={() => setOpen(true)}>
            <img src="/images/play-button.png" alt="Play" />
            <p>Play Trailer</p>
          </div>
        </>
      )}
    </>
  );
}
