import styles from "./GameBlock.module.scss";
import {CoupleOfPersons} from "./types.ts";
import {useEffect, useRef, useState} from "react";

const AllPersons: CoupleOfPersons[] = [{
    targetPerson: 'ed-sheeran',
    someAnotherPerson: 'rupert-grint',
    // id: '1'
},
    {
        targetPerson: 'keira-knightley',
        someAnotherPerson: 'natalie-portman',
    }]
type randomImagePositionType = {
    width: number,
    height: number,
}

const initialRandomImagePosition = {
    width: 0,
    height: 0,
}

type dataForRender = {
    name: string,
    top: number,
    left: number,
    width: number,
    height: number,
}
const ANIMMATION_INTERVAL_SEC: number = 3

const getRandomValueByRange = (min: number, max: number) => Math.random() * (max - min) + min

export const GameBlock = () => {
    // const [randomImagePosition, setRandomImagePosition] = useState<randomImagePositionType>(initialRandomImagePosition)
    const gameArea = document.querySelector('#game_area')
    const gameZoneHeight = useRef(gameArea?.clientHeight || 0)
    const gameZoneWidth = useRef(gameArea?.clientWidth || 0)
    const [personDataForRender, setPersonDataForRender] = useState<dataForRender[]>(Array.from({length: 50}).map((_, index): dataForRender => {
        return {
            name: index === 0 ? AllPersons[0].targetPerson : AllPersons[0].someAnotherPerson,
            top: getRandomValueByRange(100, 600),
            left: getRandomValueByRange(100, 600),
            width: getRandomValueByRange(10, gameZoneWidth.current - 2 - 100),
            height: getRandomValueByRange(10, gameZoneHeight.current - 100),
        }
    }))

    useEffect(() => {
        const render = () => {
            setPersonDataForRender((prev: dataForRender[]): dataForRender[] => {
                return prev.map((item) => {
                    item.width = getRandomValueByRange(10, gameZoneWidth.current - 2 - 100)
                    item.height = getRandomValueByRange(10, gameZoneHeight.current - 100)
                    return item
                })
            })
        }

        render()
        setInterval(() => {
            console.log('RENDER')
            render()

        }, ANIMMATION_INTERVAL_SEC * 1000)
    }, [])

    return (
        <div className={styles.game_area} id='game_area'>
            {personDataForRender.map((person, index) => <img
                src={`src/assets/images/${person.name}.png`}
                key={index}
                className={styles.image}
                style={{
                    top: person.top, left: person.left,
                    transform: `translate(${person.width}px,${person.height}px)`,
                    transition: `transform ${ANIMMATION_INTERVAL_SEC}s linear`
                }} alt='alt'
            />)}
        </div>
    )
}