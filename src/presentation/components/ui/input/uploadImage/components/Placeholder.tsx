import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

export const Placeholder = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/presentation/assets/publicationForm/uploadPublicationImg.png')}
                style={{
                    objectFit: 'contain', 
                    width: isTablet ? 300 : 250, 
                    height: isTablet ? 200 : 150
                }}
            />
            <Text style={{...styles.message, fontSize: isTablet ? 20 : 15}}>
                Presiona para añadir alguna imagen a la publicación.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.lightGray,
        borderRadius: 40,
        gap: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.gray,
        maxWidth: 300,
        textAlign: 'center'
    }
});