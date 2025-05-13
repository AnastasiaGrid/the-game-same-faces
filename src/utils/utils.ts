export const getRandomElemOfArray = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]
}