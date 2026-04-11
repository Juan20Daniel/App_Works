import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnEdith } from './BtnEdith';

interface Props {
    title: string;
    text: string;
    typeUser: 'user'|'owner';
}

export const ItemDetail = ({title, text, typeUser}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <View style={{...styles.container, marginRight: isTable ? 20 : globalStyles.marginHorizontal}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{text}</Text>
            {typeUser === 'owner' && <BtnEdith />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    value: {
        marginTop: 8,
        fontSize:14,
        maxWidth: 500,
        fontFamily: globalStyles.fontMonserratMedium, 
    }
});