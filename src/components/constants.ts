import {CoupleOfCelebritiesType} from "./types.ts";

export const START_TEXT = {
    TITLE: '"ПОХОЖ, НО НЕ ТОТ"',
    TITLE_RULES: 'Выбери знаменитость',
    RULES_TEXT: 'Это игра на внимательность, где перед тобой будут мелькать два известных человека, похожих друг на друга. \nТвоя задача — найти одно уникальное лицо среди множества одинаковых и нажать на него, прежде чем закончится время!',
    BUTTON_SELECT_CELEBRITY: 'ВЫБРАТЬ ПЕРСОНАЖА',
    USER_SELECT_TEXT: 'Вы выбрали',
    TITLE_SELECT_LEVEL: 'Выбери уровень',
    BUTTON_START_TEXT: 'НАЧИНАЕМ ИГРУ',
    BUTTON_CHANGE_CELEBRITY: 'ПОМЕНЯТЬ УСЛОВИЯ',
    BUTTON_REPEAT: 'НАЧАТЬ ЗАНОВО',
    TITLE_GAME_OVER: 'УПС!',
    GAME_OVER_TEXT: 'На этот раз не получилось, но ты точно справишься в следующий раз! \n\nХочешь попробовать снова?'
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
// {
//     nameOfTargetCelebrity: 'Марго Робби',
//     pathOfTargetCelebrity: 'margot-robbie',
//     nameOfSomeAnotherCelebrity: 'Эмма Маккей',
//     pathOfSomeAnotherCelebrity: 'emma-mackey',
//     id: 2,
// }]

export const GameOverModalText = {
    TITLE: 'Браво!',
    CONGRATULATIONS: 'Финал за тобой — игра побеждена! \nПопробуешь пройти ещё быстрее?',
    BUTTON_RESTART_TEXT: 'Сыграть еще'
}