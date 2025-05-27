import {ChoosePersonBlockProps} from "./types.ts";
import styles from './ChooseCelebritiesBlock.module.scss'
import {CoupleOfCelebritiesType} from "../types.ts";
import {CelebrityItem} from "../CelebrityItem/CelebrityItem.tsx";
import clsx from "clsx";
import raysImg from '../../assets/images/rays.png?inline'

export const ChooseCelebritiesBlock = ({
                                           handleSelectCelebrities,
                                           celebrities,
                                           selectedCoupleOfCelebrities
                                       }: ChoosePersonBlockProps) => {
    return (
        <>
            <ul className={styles.list}>
                {celebrities.map((celeb: CoupleOfCelebritiesType) => {
                    return <li className={styles.list_item} key={celeb.id}
                               onClick={() => handleSelectCelebrities(celeb)}>
                        <img src={raysImg} alt={'ddd'}
                             className={clsx(styles.select_celebrity,
                                 {
                                     [styles.active]: celeb === selectedCoupleOfCelebrities
                                 })}/>
                        <div className={styles.list_block}>
                            <div className={clsx(styles.img_front)}>
                                <CelebrityItem pathName={celeb.pathOfTargetCelebrity}
                                               altText={celeb.nameOfTargetCelebrity}
                                               className={styles.image}/>
                                <h3 className={styles.name_celebrity}>{celeb.nameOfTargetCelebrity}</h3>
                            </div>
                            <div className={styles.img_back}>
                                <CelebrityItem pathName={celeb.pathOfSomeAnotherCelebrity}
                                               altText={celeb.nameOfSomeAnotherCelebrity} className={styles.image}/>
                                <h3 className={styles.name_celebrity}>{celeb.nameOfSomeAnotherCelebrity}</h3>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}