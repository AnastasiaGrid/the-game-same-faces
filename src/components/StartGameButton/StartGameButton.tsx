import styles from "./StartGameButton.module.scss";

export interface StartGameButtonProps {
    handleStartGame: () => void;
}

export const START_GAME_TEXT = {
    BUTTON_START_TEXT: 'НАЧИНАЕМ ИГРУ',
}

export const StartGameButton = ({handleStartGame}: StartGameButtonProps) => {
    return <button type='button' onClick={handleStartGame}
                   className={styles.button_start}>
                            <span className={styles.button_start_span}>
                                <p className={styles.button_text}>
                                    {START_GAME_TEXT.BUTTON_START_TEXT}
                                </p>
                            </span>
    </button>
}