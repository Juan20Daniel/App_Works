import { StyleSheet, View } from 'react-native';
import { TruncatedText } from '@/presentation/components/ui/truncatedText/TruncatedText';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { publicationStyles } from '../styles';

export const Description = () => {
    return (
        <View style={styles.container}>
            <TruncatedText
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consequat consequat consequat consequat ddd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consequat consequat consequat consequat ddd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
                numberofLines={4}
                minNumOfCharactersInPhones={270}
                maxNumOfCharactersInTablets={350}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        ...publicationStyles.paddingHorizontal
    },
    value: {
        fontSize: calcDimension({small: 10, medium: 12, large: 14}),
    }
})