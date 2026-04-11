import { StyleSheet, Text, View } from 'react-native';
import { BoxAlert } from '../boxAlert/BoxAlert';
import { BtnAlert } from '../btnAlert/BtnAlert';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

interface AlertState {
    visible: boolean;
    title: string;
    message: string;
}

interface Props {
    alertState: AlertState;
    closeAlert: () => void;
}

export const AlertMessage = ({alertState, closeAlert}:Props) => {
    const { visible, title, message } = alertState;
    return (
        <BoxAlert visible={visible}>
            <View style={styles.boxInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.boxBtn}>
                <BtnAlert 
                    value='Ok'
                    action={() => closeAlert()}
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