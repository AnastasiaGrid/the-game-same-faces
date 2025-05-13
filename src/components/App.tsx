import styles from './App.module.scss'
import {Button, Modal} from "@mui/material";
import {celebrities, GameOverModalText, START_TEXT} from "./constants.ts";
import {useState} from "react";
import {CoupleOfCelebritiesType} from "./types.ts";
import {ChooseCelebritiesBlock} from "./ChooseCelebritiesBlock/ChooseCelebritiesBlock.tsx";
import {GameBlock} from "./GameBlock/GameBlock.tsx";
import {GameLevelRadioRating} from "./GameLevelRadioRating/GameLevelRadioRating.tsx";


const {
    TITLE,
    TITLE_RULES,
    RULES_TEXT,
    RULES_TEXT_TASK,
    BUTTON_START_TEXT,
    TITLE_SELECT_LEVEL
} = START_TEXT

function App() {
    // const [selectCelebritiesOpen, setSelectCelebritiesOpen] = useState<boolean>(false)
    const [selectedCoupleOfCelebrities, setCoupleOfCelebrities] = useState<CoupleOfCelebritiesType | null>(null)
    const [gameLevel, setGameLevel] = useState<string | null>(null)
    const [isGameStart, setGameStart] = useState(false)
    const [isGameOverModalOpen, setGameOverModalOpen] = useState(false)

    const handleSelectCelebrities = (celeb: CoupleOfCelebritiesType) => {
        setCoupleOfCelebrities(celeb)
        // setSelectCelebritiesOpen(false)
    }

    const handleStartGame = () => {
        setGameStart(true)
        setGameLevel('lightest-level')
        if (selectedCoupleOfCelebrities === null) setCoupleOfCelebrities(celebrities[0])
    }

    const handleCelebrityClick = (targetCelebrity: string) => {
        if (targetCelebrity === selectedCoupleOfCelebrities?.nameOfTargetCelebrity) {
            setGameStart(false)
            setGameOverModalOpen(true)
        }
    }

    const handleGameOverClose = () => {
        setGameOverModalOpen(false)
        setGameLevel('lightest-level')
        setGameStart(false)
        setCoupleOfCelebrities(null)
    }

    const handleSelectLevelClick = (id: string) => {
        setGameLevel(id)
    }
    return (
        <>
            {isGameStart && <GameBlock selectedCoupleOfCelebrities={selectedCoupleOfCelebrities || celebrities[0]}
                                       gameLevel={gameLevel} handleCelebrityCLick={handleCelebrityClick}/>}

            {!isGameStart && <div className={styles.game_area}>
                <>
                    <h1 className={styles.title}>{TITLE}</h1>
                    <div className={styles.descriptions_block}>
                        <p className={styles.description}>{RULES_TEXT}</p>
                        <p className={styles.description}>{RULES_TEXT_TASK}</p>
                    </div>
                    <h2 className={styles.subtitle}>{TITLE_RULES}</h2>
                    <ChooseCelebritiesBlock handleSelectCelebrities={handleSelectCelebrities}
                                            celebrities={celebrities}
                                            selectedCoupleOfCelebrities={selectedCoupleOfCelebrities}
                    />
                    <h2 className={styles.subtitle}>{TITLE_SELECT_LEVEL}</h2>
                    <GameLevelRadioRating onSelectLevelClick={handleSelectLevelClick} gameLevel={gameLevel}/>
                    {/*<Button variant='contained' onClick={handleStartGame}*/}
                    {/*        className={styles.button_start}>{BUTTON_START_TEXT}</Button>*/}
                    <button type='button' onClick={handleStartGame}
                            className={styles.button_start}>
                            <span className={styles.button_start_span}>
                                <p className={styles.button_text}>
                                    {BUTTON_START_TEXT}
                                </p>
                            </span>
                    </button>
                </>
            </div>}
            {isGameOverModalOpen &&
                <Modal open={isGameOverModalOpen} onClose={handleGameOverClose}>
                    <div className={styles.modal}>
                        <h2>{GameOverModalText.TITLE}</h2>
                        <Button onClick={handleGameOverClose}>{GameOverModalText.BUTTON_RESTART_TEXT}</Button>
                    </div>
                </Modal>}
        </>
    )
}

export default App
