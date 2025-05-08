import {CoupleOfPersons} from "../../types.ts";

export interface PersonForSelectProps {
    persons: CoupleOfPersons,
    onClick: () => void,
}