import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { Switch } from '../../ui/switch/Switch';

interface Props {
    value: boolean;
    toggle: () => void;
}

export const PublishOnCompletionToggle = ({value, toggle}:Props) => { 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Publicar la vacante al terminar
            </Text>
            <Pressable onPress={toggle}>
                <Switch state={value} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 15, 
        fontFamily:globalStyles.fontMonserratMedium
    }
});