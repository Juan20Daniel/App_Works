import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

export const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.title, fontSize: isTablet ? 15 : 12}}>BRAND NAME</Text>
            <Text
                style={{
                    maxWidth: 400,
                    fontSize: isTablet ? 12 : 8
                }}
                numberOfLines={isTablet ? 3 : 2}
            >
                The name a company gives to one of its products, so that people can easily recognize 
                it: popular/famous/well-known brand name It is one of the most famous brand names in world banking.
            </Text>
            <Text style={{color: globalColors.gray, fontSize: isTablet ? 12 : 8}}>
                Publicado hace 2 horas
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
});