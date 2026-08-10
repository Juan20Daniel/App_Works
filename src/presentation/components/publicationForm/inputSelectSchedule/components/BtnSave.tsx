import { Pressable, Text, View } from 'react-native';

interface Props {
    action:() => void;
}

export const BtnSave = ({action}:Props) => {
    return (
        <View style={{alignItems:'flex-end', paddingRight: 15}}>
            <Pressable 
                onPressOut={() => action()}
                style={({pressed}) => ({
                    opacity: pressed ? 0.4 : 1}
                )}
            >
                <Text>Guardar</Text>
            </Pressable>
        </View>
    )
}
