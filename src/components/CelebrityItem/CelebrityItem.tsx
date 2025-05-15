import styles from './CelebrityItem.module.scss';
import clsx from "clsx";
import {getRandomElemOfArray} from "../../utils/utils.ts";
import careyMulliganImg from '../../assets/images/carey-mulligan.png'
import michelleWilliamsImg from '../../assets/images/michelle-williams.png'
import javierBardemImg from '../../assets/images/javier-bardem.png'
import jeffreyDeanMorganImg from '../../assets/images/jeffrey-dean-morgan.png'
import nataliePortmanImg from '../../assets/images/natalie-portman.png'
import keiraKnightleyImg from '../../assets/images/keira-knightley.png'
import rupertGrintImg from '../../assets/images/rupert-grint.png'
import edSheeranImg from '../../assets/images/ed-sheeran.png'


type CelebrityItemProps = {
    pathName: string;
    onClick?: (targetCelebrity: string) => void;
    offsetPath?: string;
    altText: string;
    className?: string;
    animationDuration?: string;
    width?: number
}

const animationDirection = ['normal', 'reverse', 'alternate', 'alternate-reverse']

const getZIndex = () => {
    return Math.floor(Math.random() * 21)
}

const paths: Record<string, string> = {
    careyMulligan: careyMulliganImg,
    michelleWilliams: michelleWilliamsImg,
    javierBardem: javierBardemImg,
    jeffreyDeanMorgan: jeffreyDeanMorganImg,
    nataliePortman: nataliePortmanImg,
    keiraKnightley: keiraKnightleyImg,
    rupertGrint: rupertGrintImg,
    edSheeran: edSheeranImg,

}

export const CelebrityItem = ({
                                  pathName,
                                  onClick,
                                  offsetPath,
                                  altText,
                                  className,
                                  animationDuration, width
                              }: CelebrityItemProps) => {
    // const spath = `src/assets/images/${pathName}.png`;
    const path: string = paths[pathName];
    const offsetPathStyle = `path('${offsetPath}')`

    return (
        <img src={path} className={clsx(styles.image, className)} onClick={(e) => onClick?.(e?.currentTarget.alt)}
             style={{
                 offsetPath: offsetPathStyle,
                 animationDuration: `${animationDuration}s`,
                 zIndex: getZIndex(),
                 animationDirection: getRandomElemOfArray(animationDirection),
                 width: `${width}px`,
             }} alt={altText}/>
    )
}
