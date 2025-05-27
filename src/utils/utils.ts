export const getRandomElemOfArray = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const getZIndex = () => {
    return Math.floor(Math.random() * 21)
}
