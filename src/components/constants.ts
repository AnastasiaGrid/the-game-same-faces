import {CoupleOfCelebritiesType} from "./types.ts";

export const START_TEXT = {
    TITLE: 'Игра "Смотри не перепутай"',
    TITLE_RULES: 'Как играть',
    RULES_TEXT: 'Игра очень проста. После выбора пары знаменитостей они начнут хаотично двигаться, и твоя задача найти и нажать на портрет одного. ',
    BUTTON_SELECT_CELEBRITY: 'ВЫБРАТЬ ПЕРСОНАЖА',
    USER_SELECT_TEXT: 'Вы выбрали',
    BUTTON_SELECT_LEVEL: 'Выберите уровень',
    BUTTON_START_TEXT: 'Начинаем игру'
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
        nameOfTargetCelebrity: 'Джеффри Дин Морган',
        pathOfTargetCelebrity: 'jeffrey-dean-morgan',
        nameOfSomeAnotherCelebrity: 'Хавьер Бардем',
        pathOfSomeAnotherCelebrity: 'javier-bardem',
        id: 3,
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
    TITLE: 'Поздравляем! Вы выиграли!',
    BUTTON_RESTART_TEXT: 'Сыграть еще'
}