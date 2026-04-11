import { Image, StyleSheet, Text, View } from "react-native";
import { calcResolutionDevice } from "@/presentation/helpers/calcResolutionDevice";
import { globalColors } from "@/presentation/globalStyles/global.styles";
import { isTablet } from "@/presentation/helpers/isTablet";

export const NotResults = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../../../../assets/notData.png')}
                style={styles.image}
            />
            <Text style={styles.message}>No hay resultados que coincidan con tu busqueda.</Text>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height:calcResolutionDevice({low:200, medium: isTablet ? 350 : 250, high: isTablet ? 450 : 300}),
        alignItems: 'center',
    },
    image: {
        width: calcResolutionDevice({low:170, medium:isTablet ? 300 : 180, high:isTablet ? 400 : 210}),
        height: calcResolutionDevice({low:170, medium:isTablet ? 300 : 180, high:isTablet ? 400 : 210}),
        objectFit: 'contain',
       
    },
    message: {
        width: 250,
        textAlign: 'center',
        fontSize: calcResolutionDevice({low: 12, medium: 14, high: 16}),
        color: globalColors.darkGray
    }
});