import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/presentation/navigators/StackNavigator";
import { useSession } from "@/presentation/hooks";

export const useCheckSession = () => {
    const { authStatus } = useSession();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
    useLayoutEffect(() => {
        if(authStatus === 'authenticated') {
            navigation.reset({
                index: 0,
                routes: [{ name:"Home" }],
            });
        }
    },[authStatus, navigation]);
}