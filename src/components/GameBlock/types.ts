import {CoupleOfCelebritiesType} from "../types.ts";

export type GameBlockProps = {
    selectedCoupleOfCelebrities: CoupleOfCelebritiesType;
    gameLevel: string | null;
    handleCelebrityCLick?: (targetCelebrity: string) => void;
    onGameOver: (isOver: boolean) => void;
    onStopGame: () => void;
}

export type levelParameters = {
    DURATION_ANIMATION: string,
    AMOUNT_CELEBRITIES: number,
    WIDTH_OF_IMAGES: number,
}