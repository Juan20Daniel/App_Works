import { StyleSheet, View } from 'react-native';
import { Schedule, Status } from './components';
import { publicationStyles } from '../../styles';

export const Footer = () => {
    return (
        <View style={styles.container}>
            <Schedule />
            <Status />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        ...publicationStyles.paddingHorizontal,
    }
})