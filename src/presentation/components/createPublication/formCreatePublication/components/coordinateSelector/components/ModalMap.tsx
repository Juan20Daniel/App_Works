import { SetStateAction, useRef, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Coords } from '@/presentation/types/google-map';
import { ConfirmationAlert } from '@/presentation/components/ui/alerts/confirmationAlert/ConfirmationAlert';
import { BtnClose } from '@/presentation/components/ui/btnClose/BtnClose';
import { GoogleMap } from '@/presentation/components/googleMap/GoogleMap';
import { BtnFloat } from '@/presentation/components/ui/btnFloat/BtnFloat';
import { ModalSearchCoords } from './modalSearchCoords/ModalSearchCoords';
import type { AlertState } from '@/presentation/types/alerts';

interface Props {
  visible: boolean;
  markerCoords: Coords;
  setMarkerCoords: React.Dispatch<SetStateAction<Coords>>;
  closeModal: () => void;
}

export const ModalMap = ({visible, markerCoords, setMarkerCoords, closeModal}:Props) => {
  const [ modalSearchCoords, setModalSearchCoords ] = useState(false);
  const [ confirmAlert, setConfirmAlert ] = useState<AlertState>({visible:false, title:'', message:''});
  const initialMarkerCoords = useRef<Coords>({latitude:markerCoords.latitude, longitude: markerCoords.longitude});
  const {top} = useSafeAreaInsets();

  const confirm = () => {
    setMarkerCoords({
      latitude: markerCoords?.latitude??0, 
      longitude: markerCoords?.longitude??0
    });
    initialMarkerCoords.current = {
      latitude:markerCoords?.latitude, 
      longitude: markerCoords?.longitude
    }
    resetAndCloseModal();
  }
  const cancelAlert = () => {
    setMarkerCoords({
      latitude:initialMarkerCoords.current.latitude, 
      longitude:initialMarkerCoords.current.longitude
    });
    setConfirmAlert({visible:false, title:'', message:''});
  }
  const getCoords = (lat:number, lon:number) => {
    setMarkerCoords({latitude: lat, longitude:lon});
    setTimeout(() => {
      setConfirmAlert({
        visible:true,
        title:'Agregar ubicación',
        message:'¿Quieres agregar esta ubicación?'
      });
    }, 500);
  }
  const resetAndCloseModal = () => {
    setConfirmAlert({visible:false, title:'', message:''});
    setTimeout(() => {
      closeModal();
    },500);
  }
  return (
    <Modal visible={visible} transparent={false} animationType='slide'>
      <View style={styles.container}>
        <BtnClose top={top+20} backTo={resetAndCloseModal} />
        <GoogleMap
          initialLocation={{
            latitude: markerCoords.latitude === 0 ? 19.0906368 : markerCoords.latitude,
            longitude: markerCoords.longitude === 0 ? -104.2972672 : markerCoords.longitude
          }}
          mapAction='selectLocatin'
          markerCoords={markerCoords}
          setMarkerCoords={setMarkerCoords}
          onPressMap={getCoords}
        />
        <BtnFloat
          value='Buscar'
          iconName='search'
          customStyle={{
            top: top+20
          }}
          action={() => setModalSearchCoords(true)}
        />
      </View>
      <ModalSearchCoords 
        visible={modalSearchCoords}
        closeModal={() => setModalSearchCoords(false)}
      />
      <ConfirmationAlert
        alertState={confirmAlert}
        textBtnCancel='No'
        textBtnConfirm='Si'
        cancelAction={() => cancelAlert()}
        confirmAction={() => confirm()}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    position:'relative',
    justifyContent: 'flex-start'
  }
});