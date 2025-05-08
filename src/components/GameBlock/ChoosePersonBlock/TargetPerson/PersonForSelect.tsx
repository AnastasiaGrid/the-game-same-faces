import {PersonForSelectProps} from "./types.ts";
import styles from './PersonForSelect.module.scss'

export const PersonForSelect = ({persons, onClick}: PersonForSelectProps) => {
    const pathTarget = `src/assets/images/${persons.targetPerson}.png`;
    const pathSomeAnother = `src/assets/images/${persons.someAnotherPerson}.png`;
    return (
        <>
            <img src={pathTarget} alt={'Target person'} className={styles.image} onClick={onClick}/>
            <img src={pathSomeAnother} alt={'Target person'} className={styles.image} onClick={onClick}/>
        </>
    )
}
