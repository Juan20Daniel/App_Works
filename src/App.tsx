import { StatusBar, StyleSheet } from "react-native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertMessage } from "./presentation/components/ui";
const App = () => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <GestureHandlerRootView style={styles.container}>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
                <AlertMessage />
            </GestureHandlerRootView>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;