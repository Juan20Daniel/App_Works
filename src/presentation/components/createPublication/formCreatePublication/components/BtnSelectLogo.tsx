import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { BoxBtnSelect } from './BoxBtnSelect';
import { BtnSelect } from './BtnSelect';
import { InputState } from '@/presentation/types/input';
import { FormField } from '@/presentation/types/form';

interface Props {
    state: InputState;
    onChange: (field: FormField, value: string) => void;
}
export const BtnSelectLogo = ({ state, onChange}: Props) => {
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary();
            if (result.url) {
                onChange(state.name, result.name);
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            // setAlertMessage({ visible: true, title: 'Error al cargar la imagen', message: errorMessage });
        }
    }
    return (
        <>
            <BoxBtnSelect label='Logo de la empresa' showTextRequire isRequired={false}>
                <BtnSelect
                    state={state}
                    placeholder='Seleccionar logo'
                    pressable
                    onPress={loadImage}
                />
            </BoxBtnSelect>
        </>
    );
}