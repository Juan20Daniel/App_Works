import { StyleSheet, Text, View } from 'react-native';
import { BoxAlert } from '../boxAlert/BoxAlert';
import { BtnAlert } from '../btnAlert/BtnAlert';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { useAlertMessageStore } from '@/presentation/store';

export const AlertMessage = () => {
    const { visible, title, message, closeAlertMessage } = useAlertMessageStore();
    return (
        <BoxAlert visible={visible}>
            <View style={styles.boxInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.boxBtn}>
                <BtnAlert 
                    value='Ok'
                    action={closeAlertMessage}
                />  
            </View>    
       </BoxAlert>
    );
}

const styles = StyleSheet.create({
    boxInfo: {
        marginBottom: 30,
        gap: 5,
    },
    title: {
        fontSize: 25,
        fontFamily: globalStyles.fontMonserratSemiBold,
        color: globalColors.black
    },
    message: {
        fontSize: 17,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.gray
    },
    boxBtn: {
        flexDirection:'row', 
        justifyContent: 'flex-end'
    }
});