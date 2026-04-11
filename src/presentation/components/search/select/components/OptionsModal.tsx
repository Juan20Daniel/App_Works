import { Modal } from 'react-native';
import { HeaderApp } from '@/presentation/components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    visible:boolean;
    subTitle: string;
    children: React.ReactNode;
    close: () => void;
}

export const OptionsModal = ({visible, subTitle, children, close}:Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <HeaderApp
                actionBtnClose={close}
                subText={subTitle}
                paddingTop={top+20}
            />
            {children}
        </Modal>
    );
}