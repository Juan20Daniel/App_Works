import { StyleSheet, Text, View } from "react-native";
import { BtnClose } from "../../ui";
import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { calcDimension } from "@/presentation/helpers/calcDimension";

interface Props {
    subTitle:string;
    actionBtnBack?: () => void;
}

export const AuthHeader = ({subTitle, actionBtnBack}:Props) => {
    return (
        <View style={styles.content}>
            <BtnClose 
                backTo={() => actionBtnBack && actionBtnBack()} 
                top={20}
            />
            <View style={{width:'100%', maxWidth: 500}}>
                <Text style={styles.title}>
                    Bienvenido a App Works
                </Text>
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent:'center', 
        height:'100%',
    },
    content: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        padding:calcDimension({small: 10, medium:10, large:30})
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        fontSize: calcDimension({small: 25, medium:35, large:40}), 
        width: calcDimension({small: 200, medium:250, large:300})
    },
    subTitle: {
        fontSize: calcDimension({small: 12, medium:14, large:16}),
        fontFamily: globalStyles.fontMonserratMedium,
        width:calcDimension({small: 180, medium:220, large:270})
    }
});