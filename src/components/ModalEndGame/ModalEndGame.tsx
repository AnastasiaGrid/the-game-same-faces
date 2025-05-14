import styles from "./ModalEndGame.module.scss";
import {GameOverModalText} from "../constants.ts";
import {GameButton} from "../GameButton/GameButton.tsx";

interface ModalEndGameProps {
    isWinGame: boolean;
    handleGameOverClose: () => void;
    handleReStartGame: () => void;
}

export const START_TEXT = {
    BUTTON_CHANGE_CELEBRITY: 'ПОМЕНЯТЬ УСЛОВИЯ',
    BUTTON_REPEAT: 'НАЧАТЬ ЗАНОВО',
    TITLE_GAME_OVER: 'УПС!',
    GAME_OVER_TEXT: 'На этот раз не получилось, но ты точно справишься в следующий раз! \n\nХочешь попробовать снова?'
} as const;

const {TITLE_GAME_OVER, GAME_OVER_TEXT, BUTTON_CHANGE_CELEBRITY, BUTTON_REPEAT} = START_TEXT

export const ModalEndGame = ({isWinGame, handleGameOverClose, handleReStartGame}: ModalEndGameProps) => {
    return (
        <div className={styles.modal}>
            {isWinGame ? <>
                    <h2 className={styles.title}>{GameOverModalText.TITLE}</h2>
                    <p className={styles.description}>{GameOverModalText.CONGRATULATIONS}</p>
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