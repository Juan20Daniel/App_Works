import { StyleSheet, Text, View } from 'react-native';
import { ActiveAlert } from './components/ActiveAlert';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

export const StatusResult = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxAling}>
                <View style={styles.boxStatus}>
                    <Text style={{...styles.text, fontSize:isTablet ? 20 : 14}}>
                        Se encontraron <Text style={{color:globalColors.black}}>30</Text> Resultados
                    </Text>
                </View>
            </View>
            <ActiveAlert />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    boxAling: {
        flexDirection: 'row', 
        alignItems:'center',
        borderBottomWidth:1, 
        borderBottomColor: globalColors.lightGray, 
        backgroundColor: globalColors.white, 
        gap: 30, 
    },
    boxStatus: {
        paddingLeft: 10, 
        height: 40,
        justifyContent:'center'
    },
    text: {
        fontFamily: globalStyles.fontMonserratMedium, 
        color:globalColors.gray
    }
});