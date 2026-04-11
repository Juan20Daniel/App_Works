import { View, ScrollView, StyleSheet } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { BtnLocation } from './BtnLocation';

export const ListBtnLocations = () => {
    return (
          <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
                <View style={styles.place} />
                <BtnLocation />
                <BtnLocation />
                <BtnLocation />
                <BtnLocation />
            </ScrollView>
        </View>      
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%', 
        height:65, 
        borderBottomWidth:1, 
        borderBottomColor:globalColors.lightGray
    },
    scrollView: {
        flex:1,
        flexDirection: 'row'
    },
    place: {
        height: 35, 
        width: 12, 
        backgroundColor: globalColors.white
    }
});