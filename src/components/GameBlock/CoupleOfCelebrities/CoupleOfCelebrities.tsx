import styles from './CoupleOfCelebrities.scss'

export interface PersonForSelectProps {
    person: string,
    onClick: () => void,
    offsetPath: string,
}

export const CoupleOfCelebrities = ({person, onClick, offsetPath}: PersonForSelectProps) => {
    const path = `src/assets/images/${person}.png`;
    const offsetPathStyle = `path('${offsetPath}')`
    return (
        <img src={path} alt={'person'} className={styles.image} onClick={onClick}
             style={{offsetPath: offsetPathStyle}}/>
    )
}
