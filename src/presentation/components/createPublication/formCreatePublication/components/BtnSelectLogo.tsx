import { useState } from 'react';
import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { AlertMessage } from '@/presentation/components/ui/alerts/alertMessage/AlertMessage';
import { BoxBtnSelect } from './BoxBtnSelect';
import { BtnSelect } from './BtnSelect';

interface Props {
    name: string;
    value: string;
    isRequired?: boolean;
    onChange: (field: string, value: string) => void;
}
export const BtnSelectLogo = ({ name, value, isRequired=false, onChange}: Props) => {
    const [alertMessage, setAlertMessage] = useState({ visible: false, title: '', message: '' });
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary();
            if (result.url) {
                onChange(name, result.name);
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            setAlertMessage({ visible: true, title: 'Error al cargar la imagen', message: errorMessage });
        }
    }
    return (
        <>
            <BoxBtnSelect label='Logo de la empresa' showTextRequire isRequired={false}>
                <BtnSelect
                    name={name}
                    placeholder='Seleccionar logo'
                    isFocus={isRequired}
                    value={value}
                    statusError={null}
                    pressable
                    onPress={loadImage}
                />
            </BoxBtnSelect>
            <AlertMessage
                alertState={alertMessage}
                closeAlert={() => setAlertMessage({ visible: false, title: '', message: '' })}
            />
        </>
    );
}