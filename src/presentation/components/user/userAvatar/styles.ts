import { isTablet } from "@/presentation/helpers/isTablet";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginRight: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width:isTablet ? 90 : 70, 
        height:isTablet ? 90 : 70
    },
    img: {
        borderRadius: 35,
        width:'100%', 
        height:'100%',
        objectFit: 'cover'
    },
    text: {
        color: 'white',
        fontSize:isTablet ? 50 : 35
    }
});