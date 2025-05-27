import {CoupleOfCelebritiesType} from "../types.ts";

export interface ChoosePersonBlockProps {
    handleSelectCelebrities: (celeb: CoupleOfCelebritiesType) => void;
    celebrities: CoupleOfCelebritiesType[];
    selectedCoupleOfCelebrities: CoupleOfCelebritiesType | null;
}