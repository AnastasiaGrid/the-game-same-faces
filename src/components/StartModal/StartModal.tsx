import styles from './StartModal.module.scss'
import {START_MODAL_TEXT} from "./constants.ts";
import {Button} from "@mui/material";
import {StartModalProps} from "./types.ts";
import {useState} from "react";
import {ChoosePersonBlock} from "../GameBlock/ChoosePersonBlock/ChoosePersonBlock.tsx";

const {TITLE, BUTTON_YES} = START_MODAL_TEXT;

export const StartModal = ({onClick}: StartModalProps) => {
    const [isChoosenPersons, setIsChoosenPersons] = useState(false)

    return (
        isChoosenPersons ? <ChoosePersonBlock handleSelectPerson={onClick}/> :
            (<>
                <h1 className={styles.title}>{TITLE}</h1>
                <Button onClick={() => setIsChoosenPersons(true)}>{BUTTON_YES}</Button>
            </>)
    )
}