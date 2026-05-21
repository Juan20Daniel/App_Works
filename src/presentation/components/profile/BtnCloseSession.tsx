import { Pressable, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';
import { signOutUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { useUserStore } from '@/presentation/store';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';

interface Props {
	navigation: StackNavigationProp<RootStackParamList, "Profile", undefined>
}

export const BtnCloseSession = ({navigation}:Props) => {
	const removeUser = useUserStore(state => state.removeUser);

	const signOut = async () => {
		await signOutUseCase(authRepositoryImpl);
		removeUser();
		navigation.navigate("Home", {animationType:'slide_from_left'});
	}
	return (
		<View style={{...styles.boxBtnCloseSession, height:120, marginTop:isTablet ? 40 : 0}}>
			<Pressable 
				onPress={signOut}
				style={({pressed})=>[styles.btnCloseSession,{opacity:pressed? 0.3 : 1}]}
			>
				<Text style={{fontSize: 18, fontFamily:globalStyles.fontMonserratMedium, color:globalColors.gray}}>
					Cerrar sesión
				</Text>
			</Pressable>
		</View>
	);
}