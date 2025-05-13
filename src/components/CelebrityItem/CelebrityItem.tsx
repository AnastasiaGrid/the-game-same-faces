import styles from './CelebrityItem.module.scss';
import clsx from "clsx";
import {getRandomElemOfArray} from "../../utils/utils.ts";

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

export const CelebrityItem = ({
                                  pathName,
                                  onClick,
                                  offsetPath,
                                  altText,
                                  className,
                                  animationDuration, width
                              }: CelebrityItemProps) => {
    const path = `src/assets/images/${pathName}.png`;
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
