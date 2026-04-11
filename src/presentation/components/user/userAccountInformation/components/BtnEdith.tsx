import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

export const BtnEdith = () => {
    return (
        <Pressable style={({pressed}) => [
            styles.btnEdit,
            {
                opacity:pressed ? 0.3 : 1,
                paddingHorizontal:isTablet ? 20 : 15, 
                paddingVertical:isTablet ? 10 :5,
                borderRadius:isTablet ? 20 : 10, 
            }
        ]}>
            <Text style={{fontSize:isTablet ? 15 : 10}}>Editar</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    btnEdit: {
        backgroundColor:globalColors.lightGray,
        borderRadius:10, 
        marginLeft:5 
    }
});