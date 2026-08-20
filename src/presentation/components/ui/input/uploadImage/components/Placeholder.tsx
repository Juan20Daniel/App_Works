import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
    show?: boolean;
}

export const Placeholder = ({show=true}:Props) => {
    if(!show) return;
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
            <Text style={styles.message}>
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
        textAlign: 'center',
        fontSize: isTablet ? 20 : 15
    }
});