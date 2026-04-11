import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { Skeletor } from '@/presentation/components/shared/skeletor/Skeletor';

export const PublicationSkeletor = () => {
    const width = useWindowDimensions().width;
    const widthOfferSkeletor = width < 500 ? width : Math.floor(width/2-20);
    return (
        <View style={{...styles.container, width:width < 500 ? '100%' : '50%'}}>
            <View style={styles.boxContent}>
                <Skeletor 
                    width={width < 500 ? width-20 : widthOfferSkeletor }
                    height={500}
                    borderRadius={30}
                />
                <View style={{paddingTop:20, paddingHorizontal: 15, flexDirection:'row', alignItems: 'center', gap:15}}>
                    <Skeletor 
                        width={70}
                        height={70}
                        borderRadius={35}
                    />
                    <View style={{gap:10}}>
                        <Skeletor 
                            width={widthOfferSkeletor-140}
                            height={15}
                        />  
                        <Skeletor 
                            width={widthOfferSkeletor-150}
                            height={15}
                        />  
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    imgOffer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        ...globalStyles.shadow
    },
    boxContent: {
        marginBottom: 50,
    }
});