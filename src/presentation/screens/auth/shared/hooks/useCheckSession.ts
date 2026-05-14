import { useLayoutEffect } from "react";
import { useAuthStore } from "@/presentation/store";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/presentation/navigators/StackNavigator";

export const useCheckSession = () => {
    const isAutenticated = useAuthStore(state => state.isAutenticated);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    useLayoutEffect(() => {
        if(isAutenticated) {
            navigation.reset({
                index: 0,
                routes: [{ name:"Home" }],
            });
        }
    },[]);
}