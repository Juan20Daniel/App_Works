import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    value:string;
    btnColor?: 'white'|'black';
    action: () => void;
}

export const BtnAlert = ({value, btnColor='black', action}:Props) => {
    return (
        <Pressable 
            onPress={() => action()}
            style={({pressed}) => [
                styles.container,
                {
                    backgroundColor: btnColor,
                    opacity: pressed ? 0.5 : 1
                }
            ]} 
        >
            <Text style={{...styles.value, color: btnColor === 'black' ? 'white' : 'black'}}>
                {value}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 4,
        borderRadius: 15,
        ...globalStyles.shadow
    },
    value: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
    }
})