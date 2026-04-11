import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { calcResolutionDevice } from '@/presentation/helpers/calcResolutionDevice';
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
                    source={require('../../../../../assets/publications/logoIndustry.png')}
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
        ...publicationStyles.paddingHorizontal,
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
    boxTitle: {
        width: isTablet ? widthWindow - 200: widthWindow - 180,
        gap: 5
    },
    title: {
        fontSize: calcResolutionDevice({low: 16, medium: 18, high: 21}),
        fontFamily: globalStyles.fontMonserratMedium
    }
});