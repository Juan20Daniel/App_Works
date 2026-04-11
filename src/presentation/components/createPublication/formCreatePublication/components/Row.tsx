import { View } from "react-native";
import { isTablet } from "@/presentation/helpers/isTablet";

interface Row {
    children:React.ReactNode;
}

export const Row = ({children}:Row) => {
    
    return (
        <View style={{
            marginTop: 25,
            width: '100%',
            flexDirection:isTablet ? 'row' : 'column',
            gap: isTablet ? 0 : 25
        }}>
            {children}
        </View>
    );
}