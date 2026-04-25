import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { Icon } from '@/presentation/components/ui/icon/Icon';


export const Status = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.value}>Visto</Text>
        <Icon name="Circle" size={6} color={globalColors.darkGray} />
        <Text style={styles.value}>Disponible</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    value: {
        color: globalColors.gray, 
        fontSize: calcDimension({small: 10, medium: 12})
    }
});