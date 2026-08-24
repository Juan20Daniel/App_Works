import { KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, View } from 'react-native';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { HeaderApp, InputTextBasic, UploadImage } from '@/presentation/components/ui';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
import { SubmitBtn } from '@/presentation/components/companyForm';
import { CompanyFormValue } from './types';
import { defaultValue } from './defaultValue';
import { expretions } from '@/shared';

interface Props extends StackScreenProps<CreatePublicStackParamList, 'CompanyForm'>{}

export const CompanyForm = ({navigation, route}:Props) => {
    const { control, handleSubmit, setFocus } = useForm<CompanyFormValue>({
        defaultValues: defaultValue,
        mode: 'onSubmit',
        shouldFocusError:false,
    });
    const { type } = route.params.form;
    const { top, bottom } = useSafeAreaInsets();
    const height = useWindowDimensions().height;

    const onSubmit:SubmitHandler<CompanyFormValue> = async (data) => {
        console.log(data);
    }
 
    return (
        <View style={{height:height, backgroundColor: globalColors.white}}>
            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
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
                        errorRequireMessage='El nombre es requerido'
                        errorInvalidInputMessage='El nombre no es válido'
                        regex={expretions.companyName}
                        returnKeyType='next'
                        onSubmitEditing={() => setFocus('companyDesc')}
                    />
                    <InputTextBasic
                        control={control}
                        name='companyDesc'
                        label='Descripción de la empresa'
                        placeholder='Ingresa una descripción'
                        isRequire
                        errorRequireMessage='La descripción es requerido'
                        errorInvalidInputMessage='La descripción no es válida'
                        regex={expretions.companyDesc}
                        returnKeyType='done'
                        marginBottom={20}
                        onSubmitEditing={handleSubmit(onSubmit)}
                    />
                    <SubmitBtn
                        text={type === 'CREATE' 
                            ? 'AGREGAR EMPRESA' 
                            : 'Edit company'
                        }
                        onPress={handleSubmit(onSubmit)}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}