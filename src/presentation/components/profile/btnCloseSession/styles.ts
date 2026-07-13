import { globalColors } from "@/presentation/globalStyles/global.styles";
import { isTablet } from "@/presentation/helpers/isTablet";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxBtnCloseSession: {
    position: 'absolute',
    
    width:'100%', 
    alignItems:'center', 
    paddingTop:10, 
    paddingHorizontal: 10
  },
  btnCloseSession: {
    width: isTablet ? 300 : '100%',
    height: isTablet ? 60 : 50,
    borderRadius: 15,
    backgroundColor: globalColors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 20,
  }
});