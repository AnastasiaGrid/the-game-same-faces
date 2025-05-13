import styles from "./GameBlock.module.scss";
import {offsetPathForRender} from "./constants.ts";
import {CoupleOfCelebritiesType} from "../types.ts";
import {CelebrityItem} from "../CelebrityItem/CelebrityItem.tsx";
import {useEffect, useState} from "react";
import {getRandomElemOfArray} from "../../utils/utils.ts";

export type GameBlockProps = {
    selectedCoupleOfCelebrities: CoupleOfCelebritiesType;
    gameLevel: string;
    handleCelebrityCLick?: (targetCelebrity: string) => void;
}

export const GameBlock = ({selectedCoupleOfCelebrities, gameLevel, handleCelebrityCLick}: GameBlockProps) => {
    const [animationDuration, setAnimationDuration] = useState('0');
    const [numberCelebrities, setAmountCelebrities] = useState(10);
    const [widthOfImage, setWidthOfImage] = useState(100);

    const offsetPathForTargetCelebrity = getRandomElemOfArray(offsetPathForRender)
    const newOffsetPathForRender = offsetPathForRender.filter((item) => item !== offsetPathForTargetCelebrity)


    useEffect(() => {
        switch (gameLevel) {
            case 'lightest-level':
                setAnimationDuration('10')
                setAmountCelebrities(10)
                setWidthOfImage(150)
                break
            case 'light-level':
                setAnimationDuration('9')
                setAmountCelebrities(20)
                setWidthOfImage(130)
                break
            case 'medium-level':
                setAnimationDuration('8')
                setAmountCelebrities(30)
                setWidthOfImage(120)
                break
            case 'hard-level':
                setAnimationDuration('7')
                setAmountCelebrities(40)
                setWidthOfImage(100)

        }
    }, [gameLevel]);

    return (
        <>
            <div className={styles.game_status}>

            </div>
            <div>
                <CelebrityItem onClick={handleCelebrityCLick}
                               pathName={selectedCoupleOfCelebrities.pathOfTargetCelebrity}
                               altText={selectedCoupleOfCelebrities.nameOfTargetCelebrity}
                               offsetPath={offsetPathForTargetCelebrity}
                               className={styles.image} animationDuration={animationDuration} width={widthOfImage}/>
                {Array.from({length: numberCelebrities}).map((_, index) =>
                    <CelebrityItem onClick={handleCelebrityCLick}
                                   pathName={selectedCoupleOfCelebrities.pathOfSomeAnotherCelebrity}
                                   altText={selectedCoupleOfCelebrities.nameOfSomeAnotherCelebrity}
                                   offsetPath={newOffsetPathForRender[index]}
                                   key={index} className={styles.image} animationDuration={animationDuration}
                                   width={widthOfImage}/>
                )}
            </div>
        </>
    )
}