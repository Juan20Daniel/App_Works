import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { NavLink } from './NavLink';
import { TitleApp } from '../titleApp/TitleApp';

export const Navbar = () => {
    const {top} = useSafeAreaInsets();
    return (
        <View style={{...styles.container, paddingTop:top, height: 60+top,}}>
            <TitleApp />
            <View style={styles.boxButtons}>
                <NavLink
                    iconName="Search"
                    iconSize={30}
                    redirect='Search'
                />
                <NavLink
                    iconName="Notification" 
                    redirect='Notifications' 
                />
                <NavLink
                    iconName="AccountCircle" 
                    iconSize={30}
                    redirect='Profile' 
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
        gap: 20
    }
});