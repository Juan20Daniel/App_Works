import { useState } from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { Container, HeaderApp } from '../../components/ui';
import {
  ModalPublicationSettings, 
  SavedPublicationOptionsModal
} from '@/presentation/components/publication';
import { 
	BtnCloseSession, 
	UserAccountInformation,
	ProfileSectionHeader,
	ProfileEmptySection
} from '@/presentation/components/profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParamList, 'Profile'>{};

export const Profile = ({navigation}:Props) => {
	const [ savedOfferOpModal, setSavedOfferOpModal ] = useState(false);
	const statusBarSpace = useSafeAreaInsets().top;
	const bottomMenuSpace = useSafeAreaInsets().bottom;
	const height = useWindowDimensions().height;

	return (
		<>
			<Container>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<View style={{
						position: 'relative',
						width:'100%',
						
						height:height < 700 
							? 700 
							: height-statusBarSpace-bottomMenuSpace,
						paddingBottom: height < 700 
							? 70 
							: 0,
					}}>
						<HeaderApp
							alignTitle='flex-start'
							subText='Mi cuenta' 
							actionBtnClose={() => {
								navigation.replace('Home', {animationType:"slide_from_left"})
							}} 
						/>
						<UserAccountInformation />
						<ProfileSectionHeader 
							iconName='BookmarkFill'
							title='Publicaciones guardadas'
							subTitle='Aquí puedes ver las publicaciones que has guardado'
							marginTop={20}
						/>
						<ProfileEmptySection
							title='Aún no has guardado ninguna publicación'
							description='Guarda publicaciones que te interesen y encuéntralas fácilmente.'
							textBtnAction='Explorar publicaciones'
							ilustration={require('@/assets/profile/empty-saved-posts.png')}
							background='#F9FCFF'
							btnAction={() => {
								navigation.replace('Home', {animationType:"slide_from_left"})
							}}
						/>
						<ProfileSectionHeader 
							iconName='EditDocumentFill'
							title='Mis publicaciones'
							subTitle='Aquí puedes gestionar y consultar todas las publicaciones que has creado.'
							marginTop={20}
						/>
						<ProfileEmptySection
							title='Aún no has creado ninguna publicación'
							description='Comparte tu primera publicación y comienza a conectar con audiencia.'
							textBtnAction='Crear publicacion'
							ilustration={require('@/assets/profile/empty-created-posts.png')}
							background='#F9FBFA'
							btnAction={() => navigation.navigate('PublicationFormStack')}
						/>
						{/* <HorizontalPagination list={list}>
						<OfferInImgSmall 
							openOptions={() => setSavedOfferOpModal(true)}
						/>
						</HorizontalPagination> */}
						{/* <HorizontalPagination>
						<OfferPersonalizedSmall />
						</HorizontalPagination> */}
						<BtnCloseSession navigation={navigation} />
					</View>
				</ScrollView>
			</Container>
			<ModalPublicationSettings />
			<SavedPublicationOptionsModal
				visible={savedOfferOpModal} 
				closeModal={() => setSavedOfferOpModal(!savedOfferOpModal)} 
			/>
		</>
	);
}