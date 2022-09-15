import Slider from 'react-slick'
import { CardLarge } from '../CardLarge'

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function NowShowing() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2
    };

    return (
        <div className={styles.nowShowingContainer}>
            <h2 className={styles.nowShowingTitle}>Now Showing</h2>

            <Slider {...settings}>
                <CardLarge imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge imageUrl='' title='Spiderman' rating='8.0' />
                <CardLarge imageUrl='' title='Spiderman' rating='8.0' />
            </Slider>
        </div>
    )
}