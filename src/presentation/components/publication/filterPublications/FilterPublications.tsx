import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalColors, globalStyles } from "@/presentation/globalStyles/global.styles";
import { isTablet } from "@/presentation/helpers/isTablet";
import { ModalSelectLocation } from "./components";
import { BtnLocationSelecter } from "./components/BtnLocationSelecter";

export const FilterPublications = () => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
    return (
        <>
            <View style={{...styles.container, height:isTablet? 120 : 90,}}>
                <Text style={[styles.note, isTablet && styles.noteTable]}>
                    Mira las ofertas de trabajo que tiene tu ciudad
                </Text>
             <BtnLocationSelecter action={() => setListLocationModal(true)}/>
            </View>
            <View style={styles.boxFiltersSelected} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{height:30, width:15,}} />
                    <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                    <View style={{height:30, width:5,}} />
                </ScrollView>
            </View>
            <ModalSelectLocation
                visible={listLocationsModal}
                closeModal={() => setListLocationModal(false)}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  
    },
    note: {
        fontFamily:globalStyles.fontMonserratMedium, 
        paddingHorizontal: 10, 
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 'auto',
        color: 'black',
        fontSize: 16,
        width: 320,
    },
    noteTable: {
        marginTop: 20,
        width: 420,
        fontSize: 25
    },
    boxFiltersSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  
        width: '100%',
        paddingTop: 30,
        height: 75,
    }
});