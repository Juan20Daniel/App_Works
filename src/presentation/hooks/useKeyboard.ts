import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
    const [ keyboardVisible, setKeyboardVisible ] = useState(false);

    useEffect(() => {
        const showSubsciption = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });
        return () => {
            showSubsciption.remove();
            hideSubscription.remove();
        };
    },[]);

    return {
        keyboardVisible
    }
}