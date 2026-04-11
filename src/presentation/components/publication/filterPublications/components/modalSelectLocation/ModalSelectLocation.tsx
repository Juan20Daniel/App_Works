import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { ItemLocation } from './components/ItemLocation';
import { ListBtnLocations } from './components/ListBtnLocations';
import { BtnFooter, HeaderApp } from '@/presentation/components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isTablet } from '@/presentation/helpers/isTablet';
import { calcResolutionDevice } from '@/presentation/helpers/calcResolutionDevice';

interface Props {
    visible: boolean;
    closeModal:() => void;
}

export const ModalSelectLocation = ({visible, closeModal}:Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <View style={{...styles.container, marginTop: top}}>
                <HeaderApp 
                    subText='Ubicaciónes'
                    actionBtnClose={() => closeModal()} 
                />
                <Text style={{...styles.textDescriptión, fontSize: calcResolutionDevice({low: 12, medium: 15}), width: isTablet ? 450 : 300}}>
                    Seleccióna las ciudades para ver las ofertas de trabajo disponibles
                </Text>
                <ListBtnLocations />
                <ScrollView style={styles.listItemLocations} showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%', height: 30}} />
                    <ItemLocation id={1} state='Colima' city='Colima' />
                    <ItemLocation id={2} state='Colima' city='Manzanillo' />
                    <ItemLocation id={3} state='Colima' city='Tecoman' />
                    <ItemLocation id={4} state='Colima' city='Armeria' />
                    <ItemLocation id={5} state='Colima' city='Comala' />
                    <ItemLocation id={6} state='Colima' city='Minatitlan' />
                    <ItemLocation id={7} state='Jalisco' city='Guadalajara' />
                    <ItemLocation id={8} state='Jalisco' city='Molines' />
                    <ItemLocation id={9} state='Jalisco' city='Calcoman' />
                    <ItemLocation id={10} state='Jalisco' city='Mazatlan' />
                    <View style={{width:'100%', height: 100}} />
                </ScrollView>
                <BtnFooter
                    value='Filtrar'
                    iconName="FilterAlt"
                    sizeIcon={30}
                    action={() => {}}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
    },
    textDescriptión: {
        marginLeft:globalStyles.marginHorizontal,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.darkGray,
        paddingTop:10
    },
    listItemLocations: {
        flex:1,
    }
});