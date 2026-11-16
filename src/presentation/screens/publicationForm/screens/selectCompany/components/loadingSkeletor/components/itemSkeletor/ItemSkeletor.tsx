import { styles } from "./styles";
import { Skeletor } from "@/presentation/components/shared";
import { calcDimension } from "@/presentation/helpers/calcDimension";
import { View } from "react-native";

export const ItemSkeletor = () => (
    <View style={styles.container}>
        <View style={styles.boxInfo}>
            <Skeletor
                width={calcDimension({small:130, medium: 200, large:250})}
                height={calcDimension({small:15, medium: 20, large:25})}
            />
            <Skeletor
                width={calcDimension({small:130, medium: 230, large:280})}
                height={calcDimension({small:20, medium: 25, large:30})}
            />
        </View>
        <Skeletor
            width={calcDimension({small:100, medium: 120, large:150})}
            height={calcDimension({small:60, medium: 80, large:110})}
            borderRadius={calcDimension({small:5, medium: 20, large:15})}
        />
    </View>
);