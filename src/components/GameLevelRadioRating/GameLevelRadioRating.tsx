import HappySmileIcon
    from '../../assets/icons/sentiment_very_satisfied_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react'
import StressedSmileIcon from '../../assets/icons/sentiment_stressed_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react'
import BadSmileIcon from '../../assets/icons/mood_bad_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react'
import SkullSmileIcon from '../../assets/icons/skull_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react'
import styles from './GameLevelRadioRating.module.scss'
import clsx from "clsx";


interface GameLevelRadioRatingProps {
    onSelectLevelClick: (id: string) => void;
    gameLevel: string | null;
}

export const GameLevelRadioRating = ({onSelectLevelClick, gameLevel}: GameLevelRadioRatingProps) => {
    return <div className={styles.icons}>
        <HappySmileIcon id='lightest-level'
                        className={clsx(styles.icon, {[styles.selected_level]: gameLevel === 'lightest-level'})}
                        onClick={(e) => onSelectLevelClick(e?.currentTarget.id)}/>
        <BadSmileIcon id='light-level'
                      className={clsx(styles.icon, {[styles.selected_level]: gameLevel === 'light-level'})}
                      onClick={(e) => onSelectLevelClick(e?.currentTarget.id)}/>
        <StressedSmileIcon id='medium-level'
                           className={clsx(styles.icon, {[styles.selected_level]: gameLevel === 'medium-level'})}
                           onClick={(e) => onSelectLevelClick(e?.currentTarget.id)}/>
        <SkullSmileIcon id='hard-level'
                        className={clsx(styles.icon, {[styles.selected_level]: gameLevel === 'hard-level'})}
                        onClick={(e) => onSelectLevelClick(e?.currentTarget.id)}/>
    </div>
}