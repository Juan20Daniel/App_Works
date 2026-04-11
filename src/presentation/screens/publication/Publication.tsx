import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { StackScreenProps } from "@react-navigation/stack";
import { globalColors } from "@/presentation/globalStyles/global.styles";
import { RootStackParamList } from "../../navigators/StackNavigator";
import { PublicationSettingsProvider } from "../../context/PublicationSettingsContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BtnClose } from "@/presentation/components/ui";
import { ModalPublicationSettings, PublicationDetails } from "@/presentation/components/publication";
import { GoogleMap } from "@/presentation/components/googleMap";

interface Props extends StackScreenProps<RootStackParamList, 'Publication'>{}

export const Publication = ({ route }: Props) => {
  const { typeUser } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { top } = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['40%', '85%'];
  return (
    <PublicationSettingsProvider>
      <View style={styles.container}>
        <BtnClose top={top}  backTo={() => navigation.goBack()} />
        <GoogleMap
          initialLocation={{
            latitude: 19.0906368,
            longitude: -104.2972672
          }}
          height='70%'
          markerCoords={{latitude:19.0906368, longitude:-104.2972672}}
          rotateEnabled={false}
        />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          enablePanDownToClose={false}
          handleIndicatorStyle={{width:100, backgroundColor: globalColors.darkGray}}
        >
          <PublicationDetails typeUser={typeUser} />
        </BottomSheet>
      </View> 
      {typeUser === 'owner' &&
        <ModalPublicationSettings />
      }
    </PublicationSettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});