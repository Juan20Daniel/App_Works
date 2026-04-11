import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Header } from './components/header/Header';
import { ItemDetail } from './components/ItemDetail';
import { ItemList } from './components/itemList/ItemList';
import { ListContactApps } from './components/listContactApps/ListContactApps';
import { globalStyles } from '../../../globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
  typeUser: 'user'|'owner';
}

export const PublicationDetails = ({typeUser}:Props) => {
  return (
    <BottomSheetScrollView 
      contentContainerStyle={{
        paddingBottom: 50,
        paddingLeft:isTablet ? 20 : globalStyles.marginHorizontal
      }}
    >
      <Header typeUser={typeUser} />
      <ItemDetail typeUser={typeUser} title='Sobre la empresa' text='Apex Systems prioritizes innovation and collaboration to deliver cutting-edge IT services and solutions to its clients' />
      <ItemDetail typeUser={typeUser} title='Acerca del empleo' text='Empleo dedicado al transporte de personal de las distintas areas que conforman la empresa People.' />
      <ItemDetail typeUser={typeUser} title='Horario' text='lunes a viernes, de 09:00 a.m a 5 p.' />
      <ItemDetail typeUser={typeUser} title='Sueldo' text='De 8.000 a 9.000 pesos mensuales' />
      <ItemList
        typeUser={typeUser} 
        title='Requisitos'
        list={[
          'Certificado de bachillerato.',
          'Comprobante de domicilio.',
          'Carta de recomendación.',
          'Disponibilidad de horario.',
          'Licencia de conducir.',
          'Experiencia manejando autobús.'
        ]}
      />
      <ItemList 
        typeUser={typeUser} 
        title='Lo que ofrecemos'
        list={[
          'Prestaciones',
          'Bono de bienvenida.',
          'Vacaciones pagadas.',
          'Transporte.',
          'Comida gratis.'
        ]}
      />
      <ListContactApps typeUser={typeUser} />
    </BottomSheetScrollView>
  );
}