import { Dimensions, PixelRatio } from "react-native";

interface Params {
    low: number;
    medium?: number;
    high?:number;
}

const { width, height } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const widthPx = Math.round(width * pixelRatio);
const heightPx = Math.round(height * pixelRatio);

export const calcResolutionDevice = ({low, medium, high}:Params):number => {

    if(!medium && !high) return low;

    const totalResolution = widthPx + heightPx;

    if(totalResolution <= 2420) return low;
    if(totalResolution <= 3580) return medium!;
    return high??medium??low;
}