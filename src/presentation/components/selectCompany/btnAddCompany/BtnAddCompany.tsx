import { Pressable, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles'
import { styles } from './styles';
import { ScrollEdgeFade } from '../../shared';

export const BtnAddCompany = () => {
    return (
        <View style={styles.container}>
            <ScrollEdgeFade />
            <Pressable 
                style={({pressed}) => [{
                    ...styles.btn,
                    opacity:pressed ? 0.5 : 1,
                }]}
            >
                <Text style={{
                    color:globalColors.white,
                    fontFamily: globalStyles.fontMonserratMedium
                }}>
                    AGREGAR EMPRESA
                </Text>
            </Pressable>
        </View>
    )
}
