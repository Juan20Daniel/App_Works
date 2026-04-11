import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Icon } from '@/presentation/components/ui/icon/Icon';


interface Props {
    name: string;
    icon: string;
}

export const ItemApp = ({name, icon}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {borderColor: pressed ? globalColors.softGray : globalColors.white}
            ]}
        >
            <Icon name="Question" />
            <Text style={styles.name}>{name}</Text>
        </Pressable>      
    );
}

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical:10,
        gap: 10,
        marginTop:10,
        borderRadius: 10,
        borderWidth: 1,

    },
    name: {
        fontSize: 10
    }
});