import styles from './GameTablo.module.scss'
import Circle from '../../../assets/icons/circle.svg?react'
import {useEffect, useState} from "react";
import clsx from "clsx";
import {GameButton} from "../../GameButton/GameButton.tsx";


export interface GameTabloProps {
    onGameOver: (isOver: boolean) => void;
    onStopGame: () => void;
}

export const GAME_TABLO_TEXT = {
    BUTTON_STOP_GAME: 'СТОП ИГРА',
    BUTTON_MORE_TIME: 'ЕЩЕ ВРЕМЯ'
}

export const GameTablo = ({onGameOver, onStopGame}: GameTabloProps) => {
    const [timer, setTimer] = useState<number>(10)
    const [isTimerAnimationStart, setTimerAnimationStart] = useState<boolean>(false)
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        if (timer === 0) {
            clearInterval(timerInterval)
            setTimer(0)
            onGameOver(true)
        }
        return () => clearInterval(timerInterval)

    }, [timer]);
    useEffect(() => {
        setTimerAnimationStart(true)
    }, []);

    const handle = () => {
        setTimeout(() => {
            setTimerAnimationStart(true)
        })
        setTimerAnimationStart(false)
        setTimer(10)
    }
    return (
        <div className={styles.game_status}>
            <div className={styles.timer}>
                <Circle className={clsx(styles.timer_circle, {[styles.timer_animation]: isTimerAnimationStart})}/>
                <p className={styles.timer_number}>{timer}</p>
            </div>
            <div className={styles.buttons}>
                {/*<button className={clsx(styles.button, styles.button_stop)}*/}
                {/*        onClick={onStopGame}>{GAME_TABLO_TEXT.BUTTON_STOP_GAME}</button>*/}
                {/*<button className={clsx(styles.button, styles.button_more)}*/}
                {/*        onClick={handle}>{GAME_TABLO_TEXT.BUTTON_MORE_TIME}</button>*/}
                <GameButton buttonText={GAME_TABLO_TEXT.BUTTON_STOP_GAME} handleStartGame={onStopGame}
                            classNameFront={styles.button_front} classNameBack={styles.button_back}/>
                <GameButton buttonText={GAME_TABLO_TEXT.BUTTON_MORE_TIME} handleStartGame={handle}
                            classNameFront={styles.button_front} classNameBack={styles.button_back}/>
            </div>
        </div>
    )
}