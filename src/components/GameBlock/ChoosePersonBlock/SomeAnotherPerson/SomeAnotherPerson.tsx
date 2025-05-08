import {SomeAnotherPersonProps} from "./types.ts";
import styles from "./SomeAnotherPerson.module.scss";

export const SomeAnotherPerson = ({name, onClick}: SomeAnotherPersonProps) => {
    const path = `src/assets/images/${name}.png`;
    return (
        <img src={path} alt={'Target person'} className={styles.image} onClick={onClick}/>
    )
}