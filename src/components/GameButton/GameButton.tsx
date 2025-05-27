import styles from "./GameButton.module.scss";
import clsx from "clsx";
import {GameButtonProps} from "./types.ts";

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