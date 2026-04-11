import { StyleSheet, Text, View } from 'react-native';
import { Item } from './Item';
import { ItemList } from '@/presentation/types/input-list-manager';

interface Props {
    title: string;
    list: ItemList[];
    removeItem: (id:number) => void;
    editItem: (item:ItemList) => void;
}

export const ListItems = ({list, title, removeItem, editItem}:Props) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            {list.map(item => (
                <Item 
                    key={item.id} 
                    item={item} 
                    removeItem={removeItem}
                    editItem={editItem}
                />
            ))}
            <View style={styles.place} />
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 17,
        paddingHorizontal:10,
        marginBottom: 10,
        fontWeight:'bold'
    },
    place: {
        width:'100%', 
        height: 10
    }
});