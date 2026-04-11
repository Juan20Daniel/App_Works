import { Image, StyleSheet } from 'react-native';
import { isTablet } from '@/presentation/helpers/isTablet';

export const ImgCompany = () => {
    return (
        <Image
            source={require('../../../../../assets/publications/logo2.jpg')}
            style={{
                ...styles.imgCompany,
                width: isTablet ? 170 : 110,
                height: isTablet ? 140 : 80
            }}
        />
    );
}
const styles = StyleSheet.create({
    imgCompany: {
        objectFit: 'cover', 
        borderRadius: 15
    }
});