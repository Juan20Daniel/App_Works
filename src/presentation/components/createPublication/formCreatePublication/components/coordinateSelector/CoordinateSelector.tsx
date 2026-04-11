import { useEffect, useState } from 'react';
import { ModalMap } from './components/ModalMap';
import { Coords } from '@/presentation/types/google-map';
import { BtnSelect } from '../BtnSelect';
import { BoxBtnSelect } from '../BoxBtnSelect';
import { InputStatus } from '@/presentation/types/input';

interface Props {
    value: string;
    name: string;
    isRequired?: boolean;
    statusError?: InputStatus;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
    handleChange:(field:string, value:string) => void;
}

export const CoordinateSelector = ({ 
    value, 
    name, 
    isRequired=false, 
    statusError,
    errorFieldEmpty,
    errorFieldInvalid,
    handleChange 
}:Props) => {
    const [ coords, setCoords ] = useState<Coords>({latitude:0, longitude:0});
    const [ visible, setVisible ] = useState(false);
    useEffect(() => {
        const lat = coords.latitude.toString();
        const log = coords.longitude.toString();
        const newCoors = `${lat === '0' ? '' : lat} - ${log === '0' ? '' : lat}`
        handleChange(name, lat === '0' ? ''  : newCoors);
    },[coords]);
    return (
        <>
            <BoxBtnSelect 
                label='Ubicación de la empresa' 
                width='100%' 
                showTextRequire 
                isRequired={isRequired}
                statusError={statusError}
                errorFieldEmpty={errorFieldEmpty}
                errorFieldInvalid={errorFieldInvalid}
            >
                <BtnSelect
                    name='btnSelect'
                    placeholder='Seleccionar ubicación en google maps'
                    isFocus={false}
                    value={value}
                    pressable
                    statusError={statusError}
                    onPress={() => setVisible(true)}
                />
            </BoxBtnSelect>
            <ModalMap
                visible={visible}
                markerCoords={coords}
                setMarkerCoords={setCoords}
                closeModal={() => setVisible(false)}
            />
        </>
    );
}