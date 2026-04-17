import { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { PublicationSettingsProvider } from '../../context/PublicationSettingsContext';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Container, HeaderApp } from '../../components/ui';
import { UserAccountInformation } from '@/presentation/components/user';
import { EmptyListPublications, ModalPublicationSettings, SavedPublicationOptionsModal } from '@/presentation/components/publication';
import { BtnCloseSession } from '@/presentation/components/profile';

interface Props extends StackScreenProps<RootStackParamList, 'Profile'>{};
const list = [1,2,3,4,5,6,7,8,9];

export const Profile = ({navigation}:Props) => {
  const [ savedOfferOpModal, setSavedOfferOpModal ] = useState(false);
  const width = useWindowDimensions().width;
  return (
    <PublicationSettingsProvider>
      <Container>
        <HeaderApp
          alignTitle='flex-start' 
          subText='Mi cuenta' 
          actionBtnClose={() => navigation.goBack()} 
        />
        <UserAccountInformation
          username='Juan Daniel Morales Abarca' 
          email='carlosmanuel@gmail.com'
        />
        <View style={{...styles.line, width:width-20}} />
        <View style={{paddingHorizontal: 20, height:isTablet ? 40 : 30, justifyContent:'center'}}>
          <Text style={{fontSize:15}}>Ofertas guardadas</Text>
        </View>
         {/* <HorizontalPagination list={list}>
          <OfferInImgSmall 
            openOptions={() => setSavedOfferOpModal(true)}
          />
        </HorizontalPagination> */}
        <EmptyListPublications
          message='No has guardado ninguna vacante' 
          valueBtn='Ver ofertas' 
          action={() => navigation.navigate('Home', {animationType:'slide_from_left'})}
        />
        <View style={{paddingHorizontal: 20, height:isTablet ? 40 : 30, justifyContent:'center'}}>
          <Text style={{fontSize:15}}>Mis ofertas creadas</Text> 
        </View> 
        {/* <HorizontalPagination>
          <OfferPersonalizedSmall />
        </HorizontalPagination> */}
        <EmptyListPublications
          message='No has creado ninguna oferta laboral' 
          valueBtn='Crear oferta' 
          action={() => navigation.navigate('CreatePublication')}
        />
        <BtnCloseSession />
      </Container>
      <ModalPublicationSettings />
      <SavedPublicationOptionsModal
        visible={savedOfferOpModal} 
        closeModal={() => setSavedOfferOpModal(!savedOfferOpModal)} 
      />
    </PublicationSettingsProvider>
  );
}

const styles = StyleSheet.create({
  line: {
    marginVertical:10,
    marginHorizontal:10,
    height: 1,
    backgroundColor: globalColors.lightGray
  },
});