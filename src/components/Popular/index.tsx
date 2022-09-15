import { CardSmall } from '../CardSmall'
import styles from './styles.module.scss'

export function Popular() {
    return (
        <div className={styles.popularContainer}>
            <h2 className={styles.popularTitle}>Popular</h2>

            <div className={styles.popularList}>
                <CardSmall 
                    title='Venom'
                    duration='24m'
                    rating='9.1'
                    imageUrl=''
                    tags={['oi', 'teste']}
                />
                <CardSmall 
                    title='Venom'
                    duration='24m'
                    rating='9.1'
                    imageUrl=''
                    tags={['oi', 'teste']}
                />
            </div>
        </div>
    )
}