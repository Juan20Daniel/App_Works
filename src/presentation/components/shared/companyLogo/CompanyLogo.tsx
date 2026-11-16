import { Logo } from "@/domain/entities";
import { PALETTE } from "@/presentation/constants/monogram";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
    logo: Logo;
}

export const CompanyLogo = ({logo}:Props) => {
    
    if(logo.url) {
        return (
            <Image
                style={styles.logo}
                source={{uri:logo.url}}
                resizeMode="cover"
            />
        );
    }
    const colors = PALETTE[logo.fallback.colorIndex];
    
    return (
        <View  style={{...styles.avatar, backgroundColor:colors.bg}}>
            <Text style={{...styles.textAvatar, color:colors.text}}>{logo.fallback.initials}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: calcDimension({small:100, medium: 120, large:150}),
        height: calcDimension({small:60, medium: 80, large:110}),
        borderRadius: calcDimension({small:5, medium: 20, large:15}),
    },
    avatar: {
        width: calcDimension({small:100, medium: 120, large:150}),
        height: calcDimension({small:60, medium: 80, large:110}),
        borderRadius: calcDimension({small:5, medium: 20, large:15}),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAvatar: {
        fontSize: 35,
        fontWeight:'bold'
    }
});