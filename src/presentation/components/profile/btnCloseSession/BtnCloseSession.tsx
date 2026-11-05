import { Pressable, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { signOutUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { Icon } from '../../ui';
import { queryClient } from '@/config';
import { sessionQueryOptions } from '@/presentation/queries';

interface Props {
	navigation: StackNavigationProp<RootStackParamList, "Profile", undefined>
}

export const BtnCloseSession = ({navigation}:Props) => {
	
	// const bottom = useSafeAreaInsets().bottom;
	const signOut = async () => {
		await signOutUseCase(authRepositoryImpl);
		queryClient.setQueryData(sessionQueryOptions.queryKey, null);
		navigation.navigate("Home", {animationType:'slide_from_left'});
	}

	return (
		<View style={styles.boxBtnCloseSession}>
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
				<Text style={styles.text}>
					CERRAR SESIÓN
				</Text>
			</Pressable>
		</View>
	);
}