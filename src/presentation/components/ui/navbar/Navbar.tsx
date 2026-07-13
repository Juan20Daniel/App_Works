import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavLink } from './components';
import { TitleApp } from '../titleApp/TitleApp';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { BtnOpenProfile } from '../../profile';
import { styles } from './styles';

export const Navbar = () => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
    return (
        <View style={{...styles.container, paddingTop:top, height: 60+top}}>
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
                <BtnOpenProfile />
            </View>
        </View>
    );
}