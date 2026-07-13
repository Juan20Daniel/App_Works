import { StyleSheet, View } from 'react-native';
import { BtnIcon } from '@/presentation/components/ui/btnIcon/BtnIcon';
import { CompanyNameAndDate } from './components/CompanyNameAndDate';
import { LogoCompany } from './components/LogoCompany';
import { isTablet } from '@/presentation/helpers/isTablet';
import { useVisibleModalPublicOpStore } from '@/presentation/store';

interface Props {
  typeUser: 'user'|'owner';
}

export const Header = ({typeUser}:Props) => {
  const openModalPublicOptions = useVisibleModalPublicOpStore((state) => state.open);
  return (
    <View style={{...styles.container, alignItems:isTablet ?'center':'flex-start'}}>
      <View style={{
        gap:20,
        flexDirection:isTablet ? 'row' : 'column', 
        alignItems:isTablet ? 'center' : 'flex-start'
      }}>
        <LogoCompany />
        <CompanyNameAndDate />
      </View>
      {typeUser === 'user' 
        ? <BtnIcon
            iconName="More"
            marginRight={isTablet ? 10 : 5} 
            action={() => {
              openModalPublicOptions();
            }} 
          />
        : <BtnIcon
            iconName='Question'
            marginRight={isTablet ? 10 : 5} 
            action={() => {
              {}
            }} 
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  }
});