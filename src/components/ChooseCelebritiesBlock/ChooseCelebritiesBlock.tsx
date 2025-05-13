import {CHOOSE_PERSON_TEXT} from "./constants.ts";
import {ChoosePersonBlockProps} from "./types.ts";
import styles from './ChooseCelebritiesBlock.module.scss'
import {CoupleOfCelebritiesType} from "../types.ts";
import {CelebrityItem} from "../CelebrityItem/CelebrityItem.tsx";

const {TITLE} = CHOOSE_PERSON_TEXT

export const ChooseCelebritiesBlock = ({handleSelectCelebrities, celebrities}: ChoosePersonBlockProps) => {
    return (
        <>
            <h2>{TITLE}</h2>
            <ul className={styles.list}>
                {celebrities.map((celeb: CoupleOfCelebritiesType) => {
                    return <li className={styles.list} key={celeb.id}
                               onClick={() => handleSelectCelebrities(celeb)}>
                        <h3>{celeb.nameOfTargetCelebrity} и {celeb.nameOfSomeAnotherCelebrity}</h3>
                        <CelebrityItem pathName={celeb.pathOfTargetCelebrity} altText={celeb.nameOfTargetCelebrity}
                                       className={styles.image}/>
                        <CelebrityItem pathName={celeb.pathOfSomeAnotherCelebrity}
                                       altText={celeb.nameOfSomeAnotherCelebrity} className={styles.image}/>
                    </li>
                })}
            </ul>
        </>
    )
}