import { IconType } from "presentation/types/icons";
import * as icons from "./components";

interface Props {
    name: IconType;
    color?: string;
    size?: number;
}

export const Icon = ({ name='Question', color='black', size=24, ...svgProps }: Props) => {
    const IconComponent = icons[name];
    return (
        <IconComponent 
            color={color}
            width={size}
            height={size} 
            {...svgProps}
        />        
    );
}