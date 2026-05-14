import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { NavLink } from './NavLink';
import { TitleApp } from '../titleApp/TitleApp';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@/presentation/store';

export const Navbar = () => {
    const {top} = useSafeAreaInsets();
    const autenticate = useAuthStore(state => state.autenticate);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
    const goToProfile = async () => {
        const isAutenticated = await autenticate();
        if(!isAutenticated) {
            return navigation.navigate('Login', {animationType:'fade'});
        };

        navigation.navigate('Profile');
    }
    return (
        <View style={{...styles.container, paddingTop:top, height: 60+top,}}>
            <TitleApp />
            <View style={styles.boxButtons}>
                <NavLink
                    iconName="Search"
                    iconSize={calcDimension({small:30, medium:30, large:35})}
                    onPress={() => navigation.navigate('Search')}
                />
                <NavLink
                    iconName="Notification" 
                    onPress={() => navigation.navigate('Notifications')}
                />
                <NavLink
                    iconName="AccountCircle" 
                    iconSize={30}
                    onPress={goToProfile}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.paddingHorizontal,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: globalColors.lightGray,
        backgroundColor: globalColors.white,
    },
    boxButtons: {
        flexDirection: 'row',
        gap: calcDimension({small: 20, medium:20, large:30})
    }
});