import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

export const BtnCloseSession = () => {
  return (
    <View style={{...styles.boxBtnCloseSession, height:120, marginTop:isTablet ? 40 : 0}}>
      <Pressable style={({pressed})=>[styles.btnCloseSession,{opacity:pressed? 0.3 : 1}]}>
      <Text style={{fontSize: 18, fontFamily:globalStyles.fontMonserratMedium, color:globalColors.gray}}>
        Cerrar sesión
      </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  boxBtnCloseSession: {
    width:'100%', 
    alignItems:'center', 
    paddingTop:10, 
  },
  btnCloseSession: {
    width:300, 
    height: 40, 
    borderWidth:1, 
    borderRadius: 10, 
    borderColor: globalColors.softGray, 
    justifyContent:'center', 
    alignItems:'center'
  }
});