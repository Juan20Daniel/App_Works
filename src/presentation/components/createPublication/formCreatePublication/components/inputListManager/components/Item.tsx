import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ItemList } from '@/presentation/types/input-list-manager';
import { Icon } from '@/presentation/components/ui/icon/Icon';

interface Props {
    item: ItemList;
    removeItem: (id:number) => void;
    editItem: (item:ItemList) => void;
}

export const Item = ({item, removeItem, editItem}:Props) => {
    return (
        <View key={item.id} style={styles.container}>
            <View style={{marginTop:6}}>
                <Icon name="Question" size={20} color={'#000'} />
            </View>
            <Text style={{fontSize: 17}}>{item.value}</Text>
            <View style={styles.boxBtns}>
                <Pressable
                    onPress={() => editItem(item)}
                    style={({pressed}) => [
                        {opacity:pressed? 0.4 : 1}
                    ]}
                >
                    <Icon name="Question" size={20} color={'#000'} />
                </Pressable>
                <Pressable
                    onPress={() => removeItem(item.id)}
                    style={({pressed}) => [
                        {opacity:pressed? 0.4 : 1}
                    ]}
                >
                    <Icon name="Question" size={20} color={'#000'} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 80, 
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    boxBtns: {
        position: 'absolute',
        right: 10,
        top: 1,
        flexDirection: 'row',
        gap: 5
    }
});