import {CoupleOfCelebritiesType} from "./types.ts";

export const START_TEXT = {
    TITLE: '"ПОХОЖ, НО НЕ ТОТ"',
    TITLE_RULES: 'Выбери персонажа',
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
        pathOfTargetCelebrity: 'ed-sheeran',
        nameOfSomeAnotherCelebrity: 'Руперт Гринт',
        pathOfSomeAnotherCelebrity: 'rupert-grint',
        id: 1,
    },
    {
        nameOfTargetCelebrity: 'Кира Найтли',
        pathOfTargetCelebrity: 'keira-knightley',
        nameOfSomeAnotherCelebrity: 'Натали Портман',
        pathOfSomeAnotherCelebrity: 'natalie-portman',
        id: 2,
    },
    {
        nameOfTargetCelebrity: 'Джеффри Морган',
        pathOfTargetCelebrity: 'jeffrey-dean-morgan',
        nameOfSomeAnotherCelebrity: 'Хавьер Бардем',
        pathOfSomeAnotherCelebrity: 'javier-bardem',
        id: 3,
    },
    {
        nameOfTargetCelebrity: 'Кэри Маллиган',
        pathOfTargetCelebrity: 'carey-mulligan',
        nameOfSomeAnotherCelebrity: 'Мишель Уильямс',
        pathOfSomeAnotherCelebrity: 'michelle-williams',
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