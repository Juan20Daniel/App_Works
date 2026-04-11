import { Pressable, Text, View } from 'react-native';
import { Icon } from '@/presentation/components/ui';

export const BtnLocation = () => {
    return (
     <View style={{
            paddingHorizontal: 10, 
            height: 35, 
            marginRight: 10,
            marginTop: 10,
            alignItems: 'center', 
            borderRadius: 30,
            backgroundColor: 'white',
            flexDirection: 'row',
            gap:15, 
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <Text>Colima</Text>
            <Pressable>
                <Icon name="Close" />
            </Pressable>
        </View>
    )
}
