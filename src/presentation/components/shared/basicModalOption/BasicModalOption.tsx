import { Pressable, StyleSheet, Text } from "react-native";
import { globalColors } from "@/presentation/globalStyles/global.styles";
import { Icon } from "../../ui/icon/Icon";
import { IconType } from "@/presentation/types/ui/icons";


interface Props {
    iconName:IconType;
    text:string;
}

export const BasicModalOption = ({ iconName, text }:Props) => {
    return (
        <Pressable 
            onPress={() => {}}
            style={({pressed}) => [
                styles.container,
                {backgroundColor: pressed ? globalColors.lightGray : globalColors.white}
            ]}
        >
            <Icon name={iconName} />
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: globalColors.lightGray,
        gap: 20,
        marginTop: 5,
        height: 50,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 14
    }
});