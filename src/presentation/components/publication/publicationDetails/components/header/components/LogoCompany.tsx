import { StyleSheet, Image } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';

export const LogoCompany = () => {
  return (
    <Image
      source={require('../../../../../../assets/publications/logoIndustry.png')}
      style={styles.logo}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width:150, 
    height:100, 
    objectFit:'contain', 
    backgroundColor: 'white', 
    borderRadius:30,
    marginTop: 10,
    borderWidth: 1,
    borderColor: globalColors.lightGray
  }
});