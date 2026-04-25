import { Image, StyleSheet, Text, View } from "react-native";
import { calcDimension } from "@/presentation/helpers/calcDimension";
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
        height: calcDimension({small:200, medium: isTablet ? 350 : 250, large: isTablet ? 450 : 300}),
        alignItems: 'center',
    },
    image: {
        width: calcDimension({small:170, medium:isTablet ? 300 : 180, large:isTablet ? 400 : 210}),
        height: calcDimension({small:170, medium:isTablet ? 300 : 180, large:isTablet ? 400 : 210}),
        objectFit: 'contain',
       
    },
    message: {
        width: 250,
        textAlign: 'center',
        fontSize: calcDimension({small: 12, medium: 14, large: 16}),
        color: globalColors.darkGray
    }
});