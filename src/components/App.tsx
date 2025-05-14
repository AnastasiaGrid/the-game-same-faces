import styles from './App.module.scss'
import {Modal} from "@mui/material";
import {celebrities, START_TEXT} from "./constants.ts";
import {useState} from "react";
import {CoupleOfCelebritiesType} from "./types.ts";
import {ChooseCelebritiesBlock} from "./ChooseCelebritiesBlock/ChooseCelebritiesBlock.tsx";
import {GameBlock} from "./GameBlock/GameBlock.tsx";
import {GameLevelRadioRating} from "./GameLevelRadioRating/GameLevelRadioRating.tsx";
import {GameButton} from "./GameButton/GameButton.tsx";
import {ModalEndGame} from "./ModalEndGame/ModalEndGame.tsx";


const {
    TITLE,
    TITLE_RULES,
    RULES_TEXT,
    BUTTON_START_TEXT,
    TITLE_SELECT_LEVEL,
} = START_TEXT

function App() {
    // const [selectCelebritiesOpen, setSelectCelebritiesOpen] = useState<boolean>(false)
    const [selectedCoupleOfCelebrities, setCoupleOfCelebrities] = useState<CoupleOfCelebritiesType | null>(null)
    const [gameLevel, setGameLevel] = useState<string | null>(null)
    const [isGameStart, setGameStart] = useState(false)
    const [isGameOverModalOpen, setGameOverModalOpen] = useState(false)
    const [isWinGame, setWinGame] = useState(false)

    const handleSelectCelebrities = (celeb: CoupleOfCelebritiesType) => {
        setCoupleOfCelebrities(celeb)
        // setSelectCelebritiesOpen(false)
    }

    const handleStartGame = () => {
        setGameStart(true)
        if (gameLevel === null) {
            setGameLevel('lightest-level')
        }
        if (selectedCoupleOfCelebrities === null) setCoupleOfCelebrities(celebrities[0])
    }

    const handleCelebrityClick = (targetCelebrity: string) => {
        if (targetCelebrity === selectedCoupleOfCelebrities?.nameOfTargetCelebrity) {
            setGameStart(false)
            setGameOverModalOpen(true)
        }
        setWinGame(true)
    }

    const handleGameOverClose = () => {
        setGameOverModalOpen(false)
        setGameLevel('lightest-level')
        setGameStart(false)
        setCoupleOfCelebrities(null)
        setWinGame(false)
    }

    const handleSelectLevelClick = (id: string) => {
        setGameLevel(id)
    }

    const handleGameOverByTimer = () => {
        setGameOverModalOpen(true)
        setGameStart(false)
        setWinGame(false)
    }

    const handleReStartGame = () => {
        setGameOverModalOpen(false)
        setGameStart(true)
        setWinGame(false)
    }

    const handeStopGame = () => {
        setGameOverModalOpen(true)
        setGameStart(false)
        setWinGame(false)
    }
    return (
        <>
            {isGameStart && <GameBlock selectedCoupleOfCelebrities={selectedCoupleOfCelebrities || celebrities[0]}
                                       gameLevel={gameLevel} handleCelebrityCLick={handleCelebrityClick}
                                       onGameOver={handleGameOverByTimer} onStopGame={handeStopGame}/>}

            {!isGameStart && <div className={styles.open_window}>
                <>
                    <h1 className={styles.title}>{TITLE}</h1>
                    <div className={styles.descriptions_block}>
                        <p className={styles.description}>{RULES_TEXT}</p>
                    </div>
                    <h2 className={styles.subtitle}>{TITLE_RULES}</h2>
                    <ChooseCelebritiesBlock handleSelectCelebrities={handleSelectCelebrities}
                                            celebrities={celebrities}
                                            selectedCoupleOfCelebrities={selectedCoupleOfCelebrities}
                    />
                    <h2 className={styles.subtitle}>{TITLE_SELECT_LEVEL}</h2>
                    <GameLevelRadioRating onSelectLevelClick={handleSelectLevelClick} gameLevel={gameLevel}/>
                    <GameButton handleStartGame={handleStartGame} buttonText={BUTTON_START_TEXT}/>
                </>
            </div>}
            {isGameOverModalOpen &&
                <Modal open={isGameOverModalOpen} onClose={handleGameOverClose}>
                    <ModalEndGame handleGameOverClose={handleGameOverClose} handleReStartGame={handleReStartGame}
                                  isWinGame={isWinGame}/>
                </Modal>}
        </>
    )
}

export default App
