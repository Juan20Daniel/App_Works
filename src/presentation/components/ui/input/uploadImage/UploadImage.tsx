import { Image, Pressable } from 'react-native';
import { Placeholder } from './components/Placeholder';
import { useLoadImage } from './hooks';
import { InputContainer, InputLabel } from '../shared';
import { Controller, Control, FieldValues, FieldPath, UseFormSetValue, FieldPathByValue } from 'react-hook-form';
import { isTablet } from '@/presentation/helpers/isTablet';
import { styles } from './styles';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPathByValue<T, string>;
    setValue: UseFormSetValue<T>;
}

export const UploadImage = <T extends FieldValues,> ({
    control, 
    name,
    setValue
}:Props<T>) => {
    const { loadImage } = useLoadImage<T>(name, setValue);
    return (
        <InputContainer>
            <InputLabel text='Logo de la empresa' />
            <Controller
                control={control}
                name={name}
                render={({field:{value}}) => (
                    //usar la funcion y sacar el valor desde aquí.
                    <Pressable
                        onPress={() => loadImage()}
                        style={({pressed}) => [{
                            flex: 1,
                            height: isTablet ? 500 : 350,
                            opacity: pressed ? 0.5 : 1,
                        }]}
                    >
                        {value !== ''
                            ?   <Image
                                    source={{uri:''}}
                                    style={styles.imgOffer}
                                />
                            :   <Placeholder />
                        }
                    </Pressable>
                )}
            />
        </InputContainer>
    );
}