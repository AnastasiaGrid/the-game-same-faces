import {CHOOSE_PERSON_TEXT} from "./constants.ts";
import styles from "./ChoosePersonBlock.module.scss";
import {CoupleOfPersons} from "../types.ts";
import {ChoosePersonBlockProps} from "./types.ts";

const {TITLE} = CHOOSE_PERSON_TEXT

const AllPersons: CoupleOfPersons[] = [{
    targetPerson: 'ed-sheeran',
    someAnotherPerson: 'rupert-grint',
    // id: '1'
},
    {
        targetPerson: 'keira-knightley',
        someAnotherPerson: 'natalie-portman',
    }]

export const ChoosePersonBlock = ({handleSelectPerson}: ChoosePersonBlockProps) => {
    return (
        <>
            <h2>{TITLE}</h2>
            <ul className={styles.list}>
                {AllPersons.map((personGroup, index) => (
                    <li key={index}>
                        <>
                            <img src={`src/assets/images/${personGroup.targetPerson}.png`} alt={'Target person'}
                                 className={styles.image} onClick={handleSelectPerson}/>
                            <img src={`src/assets/images/${personGroup.someAnotherPerson}.png`} alt={'Target person'}
                                 className={styles.image} onClick={handleSelectPerson}/>
                        </>
                    </li>
                ))}

            </ul>
        </>
    )
}