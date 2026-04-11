import { SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { globalColors } from "@/presentation/globalStyles/global.styles";
import { calcResolutionDevice } from "@/presentation/helpers/calcResolutionDevice";
import { formStyles } from "@/presentation/components/createPublication/formCreatePublication/styles";
import { Icon } from "@/presentation/components/ui/icon/Icon";

interface Props {
    value: string;
    onChangeText: React.Dispatch<SetStateAction<string>>;
}

export const InputSearch = ({value, onChangeText}:Props) => {
    return (
        <View style={styles.contianer}>
            <View style={styles.boxIcon}>
                <Icon name="Question" size={30} color={globalColors.gray} />
            </View>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                placeholder="Buscar localidad"
                style={styles.input}
                autoFocus
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        position: 'relative',
        height: 50,
        paddingRight: 50,
    },
    boxIcon: {
        height: 50,
        width: 50,
        ...formStyles.center
    },
    input: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalColors.softGray,
        paddingLeft: 50,
        paddingRight: 20,
        fontSize: calcResolutionDevice({low: 14, medium: 16}),
        zIndex: 1,  
    }
})