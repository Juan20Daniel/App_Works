import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalColors } from "@/presentation/globalStyles/global.styles";
import { calcResolutionDevice } from "@/presentation/helpers/calcResolutionDevice";
import { publicationStyles } from "../styles";

export const Salary = () => {
    const [ widthBoxSalary, setWidthBoxSalary ] = useState(100);
    return (
        <View style={styles.container}>
            <View style={{...styles.boxTitle, width:widthBoxSalary}}>
                <Text style={styles.title}>Sueldo</Text>
            </View>
            <View style={styles.boxSalary} onLayout={(event) => {
                setWidthBoxSalary(event.nativeEvent.layout.width);
            }}>
                <Text style={styles.salary}>$4000 a 6000 mensual</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'flex-start'
    },
    boxTitle: {
        alignItems: 'center',
        marginBottom: 5,
    },
    title: {
        fontSize: calcResolutionDevice({low: 10, medium: 12})
    },
    boxSalary: {
        backgroundColor: globalColors.black,
        paddingLeft: publicationStyles.paddingHorizontal.paddingHorizontal,
        paddingRight: 40,
        paddingVertical: 15,
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30
    },
    salary: {
        color: globalColors.white,
        fontSize: calcResolutionDevice({low: 12, medium: 15}),
    }
})