import { useState } from 'react';
import { usePublicationSettings } from '@/presentation/context/PublicationSettingsContext';
import { OfferAction } from './OfferAction';
import { Switch } from '../../ui/switch/Switch';

import { BoxModalBottom } from '../../shared/boxModalBottom/BoxModalBottom';
import { Icon } from '../../ui/icon/Icon';

export const ModalPublicationSettings = () => {
    const [switchState, setSwitchState] = useState(false);
    const { showSettings, toggleSettings } = usePublicationSettings();

    return (    
        <BoxModalBottom title='Configuración' visible={showSettings!} closeModal={toggleSettings}>
            <OfferAction 
                title='Estado de la publicación' 
                label={switchState ? 'En línea' : 'Fuera de línea' }
                action={() => setSwitchState(!switchState)}
            >
                <Switch state={switchState} />
            </OfferAction>
            <OfferAction 
                title='Acciones' 
                label='Eliminar publicación'
                action={() => {}}
            >
                <Icon name="Question" />
            </OfferAction>
        </BoxModalBottom>
    );
}