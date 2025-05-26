import styles from "./GameBlock.module.scss";
import {initialLevelParameters, LEVEL_PARAMETERS, offsetPathForRender} from "./constants.ts";
import {CelebrityItem} from "../CelebrityItem/CelebrityItem.tsx";
import {useEffect, useState} from "react";
import {getRandomElemOfArray} from "../../utils/utils.ts";
import {GameTablo} from "./GameTablo/GameTablo.tsx";
import {GameBlockProps, levelParameters} from "./types.ts";

const {LIGHTEST_LEVEL, LIGHT_LEVEL, MEDIUM_LEVEL, HARD_LEVEL} = LEVEL_PARAMETERS

export const GameBlock = ({
                              selectedCoupleOfCelebrities,
                              gameLevel,
                              handleCelebrityCLick,
                              onGameOver, onStopGame
                          }: GameBlockProps) => {
    const [levelParameters, setLevelParameters] = useState<levelParameters>(initialLevelParameters);

    const offsetPathForTargetCelebrity = getRandomElemOfArray(offsetPathForRender)
    const newOffsetPathForRender = offsetPathForRender.filter((item) => item !== offsetPathForTargetCelebrity)

    useEffect(() => {
        switch (gameLevel) {
            case 'lightest-level':
                setLevelParameters(LIGHTEST_LEVEL)
                break
            case 'light-level':
                setLevelParameters(LIGHT_LEVEL)
                break
            case 'medium-level':
                setLevelParameters(MEDIUM_LEVEL)
                break
            case 'hard-level':
                setLevelParameters(HARD_LEVEL)
                break
        }
    }, [gameLevel]);

    return (
        <div className={styles.game_area}>
            <GameTablo onGameOver={onGameOver} onStopGame={onStopGame}/>
            <div className={styles.game_zone}>
                <CelebrityItem onClick={handleCelebrityCLick}
                               pathName={selectedCoupleOfCelebrities.pathOfTargetCelebrity}
                               altText={selectedCoupleOfCelebrities.nameOfTargetCelebrity}
                               offsetPath={offsetPathForTargetCelebrity}
                               className={styles.image} animationDuration={levelParameters.DURATION_ANIMATION}
                               width={levelParameters.WIDTH_OF_IMAGES}/>
                {Array.from({length: levelParameters.AMOUNT_CELEBRITIES}).map((_, index) =>
                    <CelebrityItem onClick={handleCelebrityCLick}
                                   pathName={selectedCoupleOfCelebrities.pathOfSomeAnotherCelebrity}
                                   altText={selectedCoupleOfCelebrities.nameOfSomeAnotherCelebrity}
                                   offsetPath={newOffsetPathForRender[index]}
                                   key={index} className={styles.image}
                                   animationDuration={levelParameters.DURATION_ANIMATION}
                                   width={levelParameters.WIDTH_OF_IMAGES}/>
                )}
            </div>
        </div>
    )
}