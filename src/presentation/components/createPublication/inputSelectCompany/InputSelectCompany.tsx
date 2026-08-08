import { Pressable, Text } from "react-native";
import { CreatePublicStackParamList, PublicationFormValues } from "@/presentation/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

interface Props {
    control: Control<PublicationFormValues, any, PublicationFormValues>;
    navigation: StackNavigationProp<CreatePublicStackParamList, "PublicationForm", undefined>
    setValue: UseFormSetValue<PublicationFormValues>;
}

export const InputSelectCompany = ({control, navigation, setValue}:Props) => {
    return (
        <Controller
            control={control}
            name="selectCompany"
            rules={{
                required: 'La empresa es requerida',
            }}
            render={({field: {value,onBlur,ref}}) => {
                console.log(value);
                return (
                    <Pressable
                        onPress={() => navigation.navigate('SelectCompany')}
                        ref={ref}
                        onBlur={onBlur}
                    >
                        <Text>Company name</Text>
                    </Pressable>
                );
            }}
        />
    );
}