import { View } from 'react-native';

interface Props {
    marginBottom?: number;
    children: React.ReactNode;
}

export const InputContainer = ({marginBottom, children}:Props) => {
    return (
        <View
            style={{
                position: 'relative',
                paddingHorizontal: 10,
                justifyContent: 'center',
                marginBottom:marginBottom??0
            }}
        >
            {children}
        </View>
    );
}