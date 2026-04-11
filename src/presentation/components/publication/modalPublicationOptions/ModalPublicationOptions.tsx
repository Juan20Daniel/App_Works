import { BoxModalBottom } from '../../shared/boxModalBottom';
import { BasicModalOption } from '../../shared';
import { useVisibleModalPublicOpStore } from '@/presentation/store';

export const ModalPublicationOptions = () => {
    const { visible, close } = useVisibleModalPublicOpStore(); 
    return (
        <BoxModalBottom
            title='Opriones'
            visible={visible}
            closeModal={close}
        >
            <BasicModalOption 
                iconName='Save' 
                text='Guardar esta oferta' 
            />
            <BasicModalOption 
                iconName='Visibility_off' 
                text='Ocultar esta oferta' 
            />
            <BasicModalOption 
                iconName='Block' 
                text='No mostrar ofertas como esta' 
            />
            <BasicModalOption 
                iconName='Share' 
                text='Compartir'
            />
        </BoxModalBottom>
    );
}