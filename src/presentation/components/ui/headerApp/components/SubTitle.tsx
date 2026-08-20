import { Text } from "react-native";
import { Icon } from "../../icon";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

interface Props {
    text?: string;
}
export const SubTitle = ({text}:Props) => {
    if(!text) return null;
    return (
        <>
            <Icon
                name="Circle" 
                size={6} 
                color={globalColors.darkGray} 
            />
            <Text style={{
                fontSize: calcDimension({small:12, medium: 16, large: 20}), 
                color:globalColors.darkGray,
                fontFamily: globalStyles.fontMonserratSemiBold,
            }}>
                {text}
            </Text>
        </>
    );
}
