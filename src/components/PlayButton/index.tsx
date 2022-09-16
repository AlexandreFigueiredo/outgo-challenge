import ModalVideo from "react-modal-video";
import { useState } from "react";

import styles from "./styles.module.scss";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

interface PlayButtonProps {
  trailerUrl: string;
}

export function PlayButton({ trailerUrl }: PlayButtonProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={trailerUrl}
        onClose={() => setOpen(false)}
      />
      <div className={styles.playButton} onClick={() => setOpen(true)}>
        <img src="/images/play-button.png" alt="Play" />
        <p>Play Trailer</p>
      </div>
    </>
  );
}
