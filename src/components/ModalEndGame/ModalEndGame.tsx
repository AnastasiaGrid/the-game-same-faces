import styles from "./ModalEndGame.module.scss";
import {GameButton} from "../GameButton/GameButton.tsx";
import {GAME_OVER} from "./constants.ts";
import {ModalEndGameProps} from "./types.ts";

const {
    TITLE_GAME_OVER,
    GAME_OVER_TEXT,
    BUTTON_CHANGE_CELEBRITY,
    BUTTON_REPEAT,
    TITLE_WIN_GAME,
    CONGRATULATIONS
} = GAME_OVER

export const ModalEndGame = ({isWinGame, handleGameOverClose, handleReStartGame}: ModalEndGameProps) => {
    return (
        <div className={styles.modal}>
            {isWinGame ? <>
                    <h2 className={styles.title}>{TITLE_WIN_GAME}</h2>
                    <p className={styles.description}>{CONGRATULATIONS}</p>
                </>
                :
                <>
                    <h2 className={styles.title}>{TITLE_GAME_OVER}</h2>
                    <p className={styles.description}>{GAME_OVER_TEXT}</p>
                </>}
            <div className={styles.buttons_modal}>
                <GameButton handleStartGame={handleGameOverClose}
                            buttonText={BUTTON_CHANGE_CELEBRITY}
                            classNameBack={styles.button_game_over_back}
                            classNameFront={styles.button_game_over_front}/>
                <GameButton
                    handleStartGame={handleReStartGame} buttonText={BUTTON_REPEAT}
                    classNameBack={styles.button_game_over_back}
                    classNameFront={styles.button_game_over_front}/>

            </div>
        </div>
    )
}