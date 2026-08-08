import { View } from 'react-native';

interface Props {
    children: React.ReactNode;
}

export const InputContainer = ({children}:Props) => {
    return (
        <View
            style={{
                position: 'relative',
                paddingHorizontal: 10,
                justifyContent: 'center',
            }}
        >
            {children}
        </View>
    );
}