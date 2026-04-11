import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { Icon } from "@/presentation/components/ui";

interface Props {
    action: () => void;
}

export const BtnLocationSelecter = ({action}:Props) => {
    const width = useWindowDimensions().width;
    return (
        <View style={{...styles.container, width:width}}>
            <Pressable 
                onPressOut={() => action()}
                style={({pressed}) => {
                    return [
                    styles.boxBtn,
                    {backgroundColor:pressed ? globalColors.softGray : globalColors.lightGray,}
                ]}}
            >
                <Text style={styles.btnText}>Selecciona una opción</Text>
                <Icon name="KeyboardArrowDown" size={30} />
            </Pressable>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -25,
        left: 0,
        alignItems: 'center',
    },
    boxBtn: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        zIndex: 1,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    btnText: {
        fontFamily: globalStyles.fontMonserratMedium,
    }
})