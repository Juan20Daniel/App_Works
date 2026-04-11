import { Modal, StyleSheet, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
    visible: boolean;
    children: React.ReactNode;
}

export const BoxAlert = ({visible, children}:Props) => {
    return (
        <Modal visible={visible} transparent animationType='fade'>
            <View style={styles.container}>
                <View style={{...styles.content, padding:isTablet ? 30 : 20}}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    content: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: globalColors.white,
        borderRadius: 20,
    }
});