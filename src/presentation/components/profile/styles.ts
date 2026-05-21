import { globalColors } from "@/presentation/globalStyles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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