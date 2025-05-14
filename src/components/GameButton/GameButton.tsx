import styles from "./GameButton.module.scss";
import clsx from "clsx";

export interface GameButtonProps {
    handleStartGame: () => void;
    buttonText: string;
    classNameBack?: string;
    classNameFront?: string;
}

export const START_GAME_TEXT = {
    BUTTON_START_TEXT: 'НАЧИНАЕМ ИГРУ',
}

export const GameButton = ({handleStartGame, buttonText, classNameBack, classNameFront}: GameButtonProps) => {
    return <button type='button' onClick={handleStartGame}
                   className={clsx(styles.button_start, classNameBack)}>
                            <span className={clsx(styles.button_start_span, classNameFront)}>
                                <p className={styles.button_text}>
                                    {buttonText}
                                </p>
                            </span>
    </button>
}