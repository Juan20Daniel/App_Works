import { Dimensions } from "react-native";

interface Params {
    small: number;
    medium?: number;
    large?: number;
    extraLarge?: number;
}
//Para sacar el tamaño de la pantalla
const { width } = Dimensions.get('window');
// const pixelRatio = PixelRatio.get();
console.log(width);
export const calcDimension = ({small, medium, large, extraLarge}:Params):number => {
    if(!medium && !large) return small;

    if(width <= 370) return small;

    if(width <= 420) return medium??small;

    if(width <= 500) return large??medium??small;
    
    return extraLarge??large??medium??small;
}