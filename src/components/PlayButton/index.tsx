import styles from './styles.module.scss'

interface PlayButtonProps {
    trailerUrl?: string;
}

export function PlayButton(props: PlayButtonProps) {
    return (
        <div className={styles.playButton}>
            <img src="/images/play-button.png" alt="Play" />
            <p>Play Trailer {props.trailerUrl}</p>
        </div>
    )
}