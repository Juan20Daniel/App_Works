import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { useCreatePublication } from '@/presentation/context/CreatePublicationContext';
import { Switch } from '../../ui/switch/Switch';

export const PublishOnCompletionToggle = () => {
    const { publishPublication, setPublishPublication } = useCreatePublication();
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Publicar la vacante al terminar
            </Text>
            <Pressable onPress={() => setPublishPublication(!publishPublication)}>
                <Switch state={publishPublication} />
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