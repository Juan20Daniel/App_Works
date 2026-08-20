import { ScrollView, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { HeaderApp, InputTextBasic, UploadImage } from '@/presentation/components/ui';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
import { SubmitBtn } from '@/presentation/components/companyForm';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { CompanyFormValue } from './types';
import { defaultValue } from './defaultValue';

interface Props extends StackScreenProps<CreatePublicStackParamList, 'CompanyForm'>{}

export const CompanyForm = ({navigation, route}:Props) => {
    const { control, handleSubmit } = useForm<CompanyFormValue>({
        defaultValues: defaultValue,
        mode: 'onSubmit'
    });
    const { type } = route.params.form;
    const { top, bottom } = useSafeAreaInsets();
    const height = useWindowDimensions().height;

    const onSubmit:SubmitHandler<CompanyFormValue> = async (data) => {
        console.log(data);
    }

    const onInvalid: SubmitErrorHandler<CompanyFormValue> = errors => {
        console.log('Formulario inválido:', errors);
    };
    
   
    return (
        <View style={{height:height, backgroundColor: globalColors.white}}>
            <ScrollView 
                style={{
                    height:height-bottom, 
                    backgroundColor: globalColors.white, 
                    marginTop: top
                }}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <HeaderApp
                    subText={type === 'CREATE' 
                        ? 'Agregar empresa' 
                        : 'Edit comany'
                    }
                    marginBottom={20}
                    actionBtnClose={() => navigation.goBack()}
                />
                <UploadImage
                    control={control}
                    name='companyLogo'
                    marginBottom={20}
                />
                <InputTextBasic 
                    control={control}
                    name='companyName'
                    label='Nombre de la empresa'
                    placeholder='Ingresa el nombre de la empresa'
                    isRequire
                    marginBottom={20}
                />
                <InputTextBasic 
                    control={control}
                    name='companyName'
                    label='Nombre de la empresa'
                    placeholder='Ingresa el nombre de la empresa'
                    isRequire
                    marginBottom={20}
                />
                <SubmitBtn
                    text={type === 'CREATE' 
                        ? 'AGREGAR EMPRESA' 
                        : 'Edit company'
                    }
                    onPress={handleSubmit(onSubmit, onInvalid)}
                />
            </ScrollView>
        </View>
    );
}