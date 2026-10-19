import { StatusBar } from "react-native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertMessage, LoaderScreen } from "./presentation/components/ui";
import { AuthProvider } from "./presentation/providers";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./config";

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <StatusBar barStyle='dark-content' />
            <GestureHandlerRootView style={{flex:1}}>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
                <LoaderScreen />
                <AlertMessage />
            </GestureHandlerRootView>
        </AuthProvider>
    </QueryClientProvider>
);

export default App;