import { StatusBar, StyleSheet } from "react-native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertMessage, LoaderScreen } from "./presentation/components/ui";
import { AuthProvider } from "./presentation/context";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./config";
import { Settings } from "react-native-fbsdk-next";

Settings.initializeSDK();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <StatusBar barStyle='dark-content' />
            <GestureHandlerRootView style={styles.gesture}>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
                <LoaderScreen />
                <AlertMessage />
            </GestureHandlerRootView>
        </AuthProvider>
    </QueryClientProvider>
);

const styles = StyleSheet.create({
    gesture: {
        flex:1
    }
})

export default App;