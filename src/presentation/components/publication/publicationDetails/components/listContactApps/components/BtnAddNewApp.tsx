import { Pressable, StyleSheet, View } from 'react-native';

import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Icon } from '@/presentation/components/ui/icon/Icon';

export const BtnAddNewApp = () => {
    return (
        <Pressable style={styles.btnAddNewApp}>
            <View style={styles.fontIcon}>
                <Icon name="Question" size={27} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnAddNewApp: {
        width: 65,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
        gap: 10,
        marginTop:10,
        borderRadius: 10,
    },
    fontIcon: {
        backgroundColor: globalColors.lightGray,
        padding:8,
        borderRadius: 30
    }
});