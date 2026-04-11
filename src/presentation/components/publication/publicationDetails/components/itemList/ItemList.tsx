import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnEdith } from '../BtnEdith';
import { Item } from './Item';

interface Props {
    title: string;
    list:string[];
    typeUser: 'user'|'owner';
}

export const ItemList = ({title, list, typeUser}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <View style={{
            ...styles.container, 
            marginRight: isTable ? 20 : globalStyles.marginHorizontal
        }}>
            <Text style={styles.title}>{title}</Text>
            {list.map((item, index) => (
                <Item key={index} value={item} />
            ))}
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
    boxValue: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 5,
        marginBottom: 5
    },
    point: {
        width:5, 
        height: 5, 
        marginTop:6, 
        borderRadius: 5, 
        backgroundColor:globalColors.black
    },
    value: {
        marginTop: 8,
        fontSize:14,
        maxWidth: 500,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});