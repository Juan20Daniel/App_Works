import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { TruncatedText } from '@/presentation/components/ui/truncatedText/TruncatedText';
import { isTablet } from '@/presentation/helpers/isTablet';
import { publicationStyles } from '../styles';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
const { width:widthWindow } = Dimensions.get('window');

interface Props {
    companyName: string;
    description: string;
}
export const Header = ({companyName, description}:Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <Image 
                    source={require('../../../../assets/publications/logoIndustry.png')}
                    style={styles.img}
                />
            </View>
            <View style={styles.boxTitle}>
                <Text
                    style={styles.title}
                >
                    {companyName}
                </Text> 
                <TruncatedText 
                    value={description}
                    smallSize={10}
                    mediumSize={12}
                    numberofLines={2}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        ...publicationStyles.rowCenter
    },
    boxImage: {
        width: 120, 
        height: 80,
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    //el ancho de la pantalla - el ancho de la imagen - 40 de padding - 100 de padding del padre - 20 de gap
    boxTitle: {
        width: isTablet ? 500 - 180 : widthWindow - 120 - 40 - 20,
        // backgroundColor: 'red',
        gap: 5
    },
    title: {
        fontSize: calcDimension({small: 16, medium: 18, large: 21}),
        fontFamily: globalStyles.fontMonserratMedium
    }
});