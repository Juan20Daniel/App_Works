import { Pressable } from 'react-native';
import { BtnRemoveImage, Placeholder, ShowImage} from './components';
import { useLoadImage } from './hooks';
import { InputContainer, InputLabel } from '../shared';
import { Controller, Control, FieldValues, FieldPathByValue } from 'react-hook-form';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
}

export const UploadImage = <T extends FieldValues,> ({
    control, 
    name
}:Props<T>) => {
    const { loadImage } = useLoadImage();
    return (
        <InputContainer>
            <InputLabel text='Logo de la empresa' />
            <Controller
                control={control}
                name={name}
                render={({field:{value, onChange}}) => (
                    <Pressable
                        onPress={async () => {
                            const image = await loadImage();
                            if(!image) return;
                            onChange(image);
                        }}
                        style={({pressed}) => [{
                            position: 'relative',
                            flex: 1,
                            height: isTablet ? 500 : 350,
                            opacity: pressed ? 0.5 : 1,
                        }]}
                    >
                        <BtnRemoveImage 
                            show={value !== ''} 
                            onPress={() => onChange('')}
                        />
                        <ShowImage url={value} />
                        <Placeholder show={value === ''} />
                    </Pressable>
                )}
            />
        </InputContainer>
    );
}