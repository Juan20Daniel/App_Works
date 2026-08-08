import { Pressable, Text } from "react-native";
import { CreatePublicStackParamList, PublicationFormValues } from "@/presentation/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { InputContainer } from "../../ui";
import { styles } from "./styles";
import { globalColors } from "@/presentation/globalStyles/global.styles";

interface Props {
    control: Control<PublicationFormValues, any, PublicationFormValues>;
    navigation: StackNavigationProp<CreatePublicStackParamList, "PublicationForm", undefined>
    setValue: UseFormSetValue<PublicationFormValues>;
}

export const InputSelectCompany = ({control, navigation, setValue}:Props) => {
    return (
        <InputContainer>
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
                            style={({pressed}) => [
                                styles.containerBtn,
                                {
                                    backgroundColor: pressed 
                                        ? globalColors.softGray 
                                        : globalColors.white
                                }
                            ]}
                            onPress={() => navigation.navigate('SelectCompany')}
                            ref={ref}
                            onBlur={onBlur}
                        >
                            <Text style={styles.placeholder}>
                                Company name
                            </Text>
                        </Pressable>
                    );
                }}
            />
        </InputContainer>
    );
}