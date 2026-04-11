import { Modal, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { ModalHeader } from './components/Header';

interface Props {
    title: string;
    visible: boolean;
    children: React.ReactNode;
    closeModal?: () => void;
}

export const BoxModalBottom = ({title, visible, children, closeModal}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <Modal visible={visible} transparent animationType='slide'>
            <Pressable
                onPress={() => {
                    closeModal && closeModal();
                }}
                style={styles.container}
            >
                <Pressable style={{
                    ...styles.content, 
                    width:isTable ? width - 140 : width-20, 
                    marginHorizontal:isTable ? 70 : 10
                }}>
                    <ModalHeader
                        title={title}
                        actionBtnClose={() => closeModal && closeModal()}
                    />
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    content: {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 30,
        borderRadius: 30,
        backgroundColor: globalColors.white,
    }
});