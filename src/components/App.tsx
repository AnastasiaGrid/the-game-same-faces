import styles from './App.module.scss'
import {Modal} from "@mui/material";
import {useState} from "react";
import {StartModal} from "./StartModal/StartModal.tsx";
import {GameBlock} from "./GameBlock/GameBlock.tsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [gameStart, setGameStart] = useState(false)
    const handleStartGame = () => {
        setIsModalOpen(false);
        setGameStart(true)
    }
    return (
        <>
            <Modal open={isModalOpen} className={styles.modal} onClose={handleStartGame}>
                <StartModal onClick={handleStartGame}/>
            </Modal>
            {gameStart && <GameBlock/>}

        </>
    )
}

export default App
