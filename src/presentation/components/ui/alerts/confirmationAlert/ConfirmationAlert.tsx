import { StyleSheet, Text, View } from 'react-native';
import { BoxAlert } from '../boxAlert/BoxAlert';
import { BtnAlert } from '../btnAlert/BtnAlert';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { AlertState } from '@/presentation/types/alerts';


interface Props {
    alertState: AlertState;
    textBtnConfirm?: string;
    textBtnCancel?: string;
    cancelAction: () => void;
    confirmAction: () => void;
}

export const ConfirmationAlert = ({
    alertState, 
    textBtnConfirm, 
    textBtnCancel,
    cancelAction, 
    confirmAction
}:Props) => {
    const { visible, title, message } = alertState;
    return (
        <BoxAlert visible={visible}>
            <View style={styles.boxInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.boxBtn}>
                <BtnAlert 
                    value={textBtnCancel??'Cancelar'}
                    btnColor='white'
                    action={() => cancelAction()}
                />  
                <BtnAlert 
                    value={textBtnConfirm??'Confirmar'}
                    action={() => confirmAction()}
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
        gap: 20,
        flexDirection:'row', 
        justifyContent: 'flex-end'
    }
});