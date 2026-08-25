import { StyleSheet } from "react-native";
import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: calcDimension({
            small: 10, 
            medium: 10, 
            large: 30
        })
    },
    titleContent: {
        width:'100%',
        maxWidth: 500
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        fontSize: calcDimension({
            small: 25, 
            medium: 35, 
            large: 40
        }), 
        width: calcDimension({
            small: 200, 
            medium: 250, 
            large: 300
        })
    },
    subTitle: {
        fontSize: calcDimension({
            small: 12,
            medium: 14,
            large: 16
        }),
        fontFamily: globalStyles.fontMonserratMedium,
        width: calcDimension({
            small: 180, 
            medium: 220, 
            large: 270
        })
    },
    boxBtnExit: {
        position: 'absolute',
        right: 0,
        top: calcDimension({
            small: 10, 
            medium: 10, 
            large: 30
        })
    }
});