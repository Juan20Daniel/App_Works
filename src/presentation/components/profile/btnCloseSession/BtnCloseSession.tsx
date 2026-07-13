import { Pressable, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';
import { signOutUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { useAuthStore, useUserStore } from '@/presentation/store';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Icon } from '../../ui';

interface Props {
	navigation: StackNavigationProp<RootStackParamList, "Profile", undefined>
}

export const BtnCloseSession = ({navigation}:Props) => {
	const removeUser = useUserStore(state => state.removeUser);
	const deauthenticate = useAuthStore(state => state.deauthenticate);
	const bottom = useSafeAreaInsets().bottom;
	const signOut = async () => {
		await signOutUseCase(authRepositoryImpl);
		removeUser();
		deauthenticate();
		navigation.navigate("Home", {animationType:'slide_from_left'});
	}

	return (
		<View style={{
			...styles.boxBtnCloseSession,
			bottom: 10,
			marginTop:isTablet ? 40 : 10,

		}}>
			<Pressable 
				onPress={signOut}
				style={({pressed})=>[
					styles.btnCloseSession,
					{opacity:pressed? 0.3 : 1}
				]}
			>
				<Icon 
					name='Logout'
					color={globalColors.gray}
				/>
				<Text style={{fontSize: 18, fontFamily:globalStyles.fontMonserratMedium, color:globalColors.gray}}>
					CERRAR SESIÓN
				</Text>
			</Pressable>
		</View>
	);
}