import careyMulliganImg from "../../assets/images/carey-mulligan.png";
import michelleWilliamsImg from "../../assets/images/michelle-williams.png";
import javierBardemImg from "../../assets/images/javier-bardem.png";
import jeffreyDeanMorganImg from "../../assets/images/jeffrey-dean-morgan.png";
import nataliePortmanImg from "../../assets/images/natalie-portman.png";
import keiraKnightleyImg from "../../assets/images/keira-knightley.png";
import rupertGrintImg from "../../assets/images/rupert-grint.png";
import edSheeranImg from "../../assets/images/ed-sheeran.png";

export type CelebrityItemProps = {
    pathName: string;
    onClick?: (targetCelebrity: string) => void;
    offsetPath?: string;
    altText: string;
    className?: string;
    animationDuration?: string;
    width?: number
}

export const paths: Record<string, string> = {
    careyMulligan: careyMulliganImg,
    michelleWilliams: michelleWilliamsImg,
    javierBardem: javierBardemImg,
    jeffreyDeanMorgan: jeffreyDeanMorganImg,
    nataliePortman: nataliePortmanImg,
    keiraKnightley: keiraKnightleyImg,
    rupertGrint: rupertGrintImg,
    edSheeran: edSheeranImg,
}