import { View } from "react-native";

interface Props {
    isLoading: boolean;
}

export const LoaderScreen = ({isLoading}:Props) => {
    if(!isLoading) return null;

    return (
        <View style={{
                position: 'absolute',
                backgroundColor: 'rgba(202, 202, 202, 0.47)', 
                width: '100%',
                height: '100%',
                zIndex: 10,
            }}
        />
    );
}