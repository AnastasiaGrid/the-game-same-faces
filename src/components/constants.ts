import {CoupleOfCelebritiesType} from "./types.ts";

export const START_TEXT = {
    TITLE: '"ПОХОЖ, НО НЕ ТОТ"',
    TITLE_RULES: 'Выбери знаменитость',
    RULES_TEXT: 'Это игра на внимательность, где перед тобой будут мелькать два известных человека, похожих друг на друга. \nТвоя задача — найти одно уникальное лицо среди множества одинаковых и нажать на него, прежде чем закончится время!',
    TITLE_SELECT_LEVEL: 'Выбери уровень',
    BUTTON_START_TEXT: 'НАЧИНАЕМ ИГРУ',
} as const;


export const celebrities: CoupleOfCelebritiesType[] = [
    {
        nameOfTargetCelebrity: 'Эд Ширан',
        pathOfTargetCelebrity: 'edSheeran',
        nameOfSomeAnotherCelebrity: 'Руперт Гринт',
        pathOfSomeAnotherCelebrity: 'rupertGrint',
        id: 1,
    },
    {
        nameOfTargetCelebrity: 'Кира Найтли',
        pathOfTargetCelebrity: 'keiraKnightley',
        nameOfSomeAnotherCelebrity: 'Натали Портман',
        pathOfSomeAnotherCelebrity: 'nataliePortman',
        id: 2,
    },
    {
        nameOfTargetCelebrity: 'Джеффри Морган',
        pathOfTargetCelebrity: 'jeffreyDeanMorgan',
        nameOfSomeAnotherCelebrity: 'Хавьер Бардем',
        pathOfSomeAnotherCelebrity: 'javierBardem',
        id: 3,
    },
    {
        nameOfTargetCelebrity: 'Кэри Маллиган',
        pathOfTargetCelebrity: 'careyMulligan',
        nameOfSomeAnotherCelebrity: 'Мишель Уильямс',
        pathOfSomeAnotherCelebrity: 'michelleWilliams',
        id: 4,
    },
]
