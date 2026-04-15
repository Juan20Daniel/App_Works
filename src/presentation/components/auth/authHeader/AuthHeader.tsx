import { StyleSheet, Text, View } from "react-native";
import { BtnClose } from "../../ui";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/presentation/navigators/StackNavigator";
import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { isTablet } from "@/presentation/helpers/isTablet";

interface Props {
    navigation: StackNavigationProp<RootStackParamList>;
    subTitle:string;
}

export const AuthHeader = ({navigation, subTitle}:Props) => {
    return (
        <View style={styles.content}>
            <BtnClose backTo={() => navigation.replace('Home', {animationType:'fade'})} top={20} />
            <View style={{width:'100%', maxWidth: 500}}>
                <Text style={styles.title}>
                    Bienvenido a Nuestra App
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
        padding:isTablet ? 30:10
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        fontSize: isTablet?40:35, 
        width:isTablet?400:300
    },
    subTitle: {
        fontSize: 16,
        fontFamily: globalStyles.fontMonserratMedium,
        width:isTablet ? 250 : 230
    }
});