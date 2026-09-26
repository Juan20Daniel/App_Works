import { StatusBar, StyleSheet } from "react-native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertMessage, LoaderScreen } from "./presentation/components/ui";
import { AuthProvider } from "./presentation/providers";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <StatusBar barStyle='dark-content' />
                <GestureHandlerRootView style={styles.container}>
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                    <LoaderScreen />
                    <AlertMessage />
                </GestureHandlerRootView>
            </AuthProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;