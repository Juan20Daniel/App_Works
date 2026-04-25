import { Pressable, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UserInfo } from './UserInfo';
import { isTablet } from '@/presentation/helpers/isTablet';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    children:React.ReactNode;
}

export const Container = ({children}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={{...styles.container}}>
            <View style={styles.content}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Publication', {typeUser:'user'});
                    }}
                    style={styles.btn}
                >
                    {children}
                </Pressable>
            </View>
            <UserInfo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor:globalColors.lightGray,
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: calcDimension({small:0, medium:0, large: 30})
    },
    content: {
        backgroundColor: globalColors.white,
        maxWidth: 500,
        borderRadius: isTablet ? 30 : 0,
        ...globalStyles.shadow
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 20,
    }
});