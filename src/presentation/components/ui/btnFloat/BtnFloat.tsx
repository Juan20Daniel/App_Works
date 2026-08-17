import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { Icon } from "../icon/Icon";
import { IconType } from "@/presentation/types/ui/icons";

interface Props {
    iconName?: IconType;
    value?: string;
    customStyle?: StyleProp<ViewStyle>;
    action?: () => void;
}

export const BtnFloat = ({iconName='Question', value, customStyle, action}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {   
                    backgroundColor:pressed ? globalColors.cornfsmallerBlue : globalColors.azureBlue,
                    paddingRight:value ? 20 : 10,
                },
                customStyle,
            ]} 
            onPress={() => {
                if(action) action()
            }}
        >
            <Icon name={iconName} />
            {value && <Text style={styles.value}>{value}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        left: 10,
        top: 40,
        padding: 10,
        borderRadius: 50,
        zIndex: 3,
        ...globalStyles.shadow
    },
    value: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.white
    }
});