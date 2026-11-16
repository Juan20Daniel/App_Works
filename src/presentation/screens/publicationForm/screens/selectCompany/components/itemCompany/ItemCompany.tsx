import { StyleSheet, Text, View } from 'react-native';
import { CompanyEntity } from '@/domain/entities';
import { CompanyLogo, PressableHighlight } from '@/presentation/components/shared';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    company:CompanyEntity;
}

export const ItemCompany = ({company}:Props) => {
    return (
        <PressableHighlight
            onPress={() => {}}
            styles={styles.container}
        >
            <View style={styles.boxInfo}>
                <Text numberOfLines={1} style={styles.title}>{company.name}</Text>
                <Text numberOfLines={2} style={styles.desc}>{company.desc}</Text>
            </View>
            <CompanyLogo logo={company.logo} />
        </PressableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingHorizontal: globalStyles.paddingHorizontal,
        paddingVertical: calcDimension({small:10, medium: 15}),
        gap:calcDimension({small:10, medium: 15, large:20, extraLarge:30}),
    },
    boxInfo: {
        flex:1,
        justifyContent: 'center',
        gap: 10
    },
    title: {
        fontSize: 20,
        fontFamily: globalStyles.fontMonserratMedium
    },
    desc: {
        fontSize: 12,
        fontFamily: globalStyles.fontMonserratMedium
    }
})