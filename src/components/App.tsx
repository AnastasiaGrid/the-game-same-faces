import styles from './App.module.scss'
import {Button, MenuItem, Modal, Select} from "@mui/material";
import {celebrities, GameOverModalText, START_TEXT} from "./constants.ts";
import {useState} from "react";
import {CoupleOfCelebritiesType} from "./types.ts";
import {ChooseCelebritiesBlock} from "./ChooseCelebritiesBlock/ChooseCelebritiesBlock.tsx";
import {CelebrityItem} from "./CelebrityItem/CelebrityItem.tsx";
import {GameBlock} from "./GameBlock/GameBlock.tsx";


const {
    TITLE,
    BUTTON_SELECT_CELEBRITY,
    TITLE_RULES,
    RULES_TEXT,
    USER_SELECT_TEXT,
    BUTTON_SELECT_LEVEL,
    BUTTON_START_TEXT
} = START_TEXT

function App() {
    const [selectCelebritiesOpen, setSelectCelebritiesOpen] = useState<boolean>(false)
    const [selectedCoupleOfCelebrities, setCoupleOfCelebrities] = useState<CoupleOfCelebritiesType | null>(null)
    const [gameLevel, setGameLevel] = useState<number>(1)
    const [isGameStart, setGameStart] = useState(false)
    const [isGameOverModalOpen, setGameOverModalOpen] = useState(false)
    const handleSelectCelebrities = (celeb: CoupleOfCelebritiesType) => {
        setCoupleOfCelebrities(celeb)
        setSelectCelebritiesOpen(false)
    }

    const handleStartGame = () => {
        setGameStart(true)
        if (selectedCoupleOfCelebrities === null) setCoupleOfCelebrities(celebrities[0])
    }

    const handleCelebrityCLick = (targetCelebrity: string) => {
        if (targetCelebrity === selectedCoupleOfCelebrities?.nameOfTargetCelebrity) {
            setGameStart(false)
            setGameOverModalOpen(true)
        }
    }

    const handleGameOverClose = () => {
        setGameOverModalOpen(false)
        setGameLevel(1)
        setGameStart(false)
        setCoupleOfCelebrities(null)
    }

    return (
        <>
            <div className={styles.game_area}>
                {isGameStart ? <GameBlock selectedCoupleOfCelebrities={selectedCoupleOfCelebrities || celebrities[0]}
                                          gameLevel={gameLevel} handleCelebrityCLick={handleCelebrityCLick}/> : (
                    <>
                        <h1 className={styles.title}>{TITLE}</h1>
                        {selectCelebritiesOpen ?
                            <ChooseCelebritiesBlock handleSelectCelebrities={handleSelectCelebrities}
                                                    celebrities={celebrities}/> : (<>
                                <h2>{TITLE_RULES}</h2>
                                <p>{RULES_TEXT}</p>
                                <Button onClick={() => {
                                    setSelectCelebritiesOpen(true)
                                }}>{BUTTON_SELECT_CELEBRITY}</Button>
                            </>)}
                        {selectedCoupleOfCelebrities && !selectCelebritiesOpen && (
                            <>
                                <h2>{USER_SELECT_TEXT}</h2>
                                <CelebrityItem pathName={selectedCoupleOfCelebrities.pathOfTargetCelebrity}
                                               altText={selectedCoupleOfCelebrities.nameOfTargetCelebrity}
                                               className={styles.image}/>
                                <CelebrityItem pathName={selectedCoupleOfCelebrities.pathOfSomeAnotherCelebrity}
                                               altText={selectedCoupleOfCelebrities.nameOfSomeAnotherCelebrity}
                                               className={styles.image}/>
                                <Select variant={"filled"} label='gameLevel' id='gamelevel' value={gameLevel}
                                        onChange={(e) => setGameLevel(Number(e?.target?.value))}>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </>
                        )}
                        <Button onClick={handleStartGame}>{BUTTON_START_TEXT}</Button>
                    </>
                )
                }
            </div>
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
