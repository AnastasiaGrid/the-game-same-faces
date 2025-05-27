import {getRandomElemOfArray, getZIndex} from "../../utils/utils.ts";
import {CelebrityItemProps, paths} from "./types.ts";
import {animationDirection} from "./constants.ts";


export const CelebrityItem = ({
                                  pathName,
                                  onClick,
                                  offsetPath,
                                  altText,
                                  className,
                                  animationDuration, width
                              }: CelebrityItemProps) => {
    const path: string = paths[pathName];
    const offsetPathStyle = `path('${offsetPath}')`

    return (
        <img src={path} className={className} onClick={(e) => onClick?.(e?.currentTarget.alt)}
             style={{
                 offsetPath: offsetPathStyle,
                 animationDuration: `${animationDuration}s`,
                 zIndex: getZIndex(),
                 animationDirection: getRandomElemOfArray(animationDirection),
                 width: `${width}px`,
             }} alt={altText}/>
    )
}
