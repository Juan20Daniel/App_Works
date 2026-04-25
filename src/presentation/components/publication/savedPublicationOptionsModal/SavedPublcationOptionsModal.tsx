import { BoxModalBottom } from '../../shared/boxModalBottom/BoxModalBottom';
import { BasicModalOption } from '../../shared/basicModalOption/BasicModalOption';

interface Props {
    visible: boolean;
    closeModal:() => void;
}

export const SavedPublicationOptionsModal = ({visible, closeModal}:Props) => {
    return (
        <BoxModalBottom title='Opciones' visible={visible} closeModal={closeModal}>
            <BasicModalOption iconName='Question' text='Remover oferta' />
        </BoxModalBottom>
    );
}