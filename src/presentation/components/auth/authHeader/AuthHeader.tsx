import { Text, View } from "react-native";
import { BtnClose } from "../../ui";
import { styles } from "./styles";

interface Props {
    subTitle: string;
    actionBtnBack?: () => void;
}

export const AuthHeader = ({
    subTitle, 
    actionBtnBack
}:Props) => (
    <View style={styles.container}>
        <View style={styles.titleContent}>
            <Text style={styles.title}>
                Bienvenido a App Works
            </Text>
            <Text style={styles.subTitle}>
                {subTitle}
            </Text>
        </View>
        <View style={styles.boxBtnExit}>
            <BtnClose
                backTo={() => actionBtnBack && actionBtnBack()} 
            />
        </View>
    </View>
);