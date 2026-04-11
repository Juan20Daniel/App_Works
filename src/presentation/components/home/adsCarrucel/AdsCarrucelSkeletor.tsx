import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { Skeletor } from '../../shared/skeletor/Skeletor';

export const AdsCarrucelSkeletor = () => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    return (
        <>
            <View style={{...styles.container, height: height*0.4}}>
                <Skeletor
                    width={width-50}
                    height={height*0.3}
                    borderRadius={30}
                    boxSkeletorStyles={{ ...styles.boxSkeletor, width: width-50, height: height*0.3}} 
                />
            </View>
            <View style={styles.boxPoints}>
                <Skeletor 
                    width={100}
                    height={17}
                    borderRadius={10}
                    boxSkeletorStyles={styles.pointSkeletor} 
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white', 
    },
    boxSkeletor: {
        borderRadius: 30, 
        backgroundColor:'white', 
        ...globalStyles.shadow
    },
    boxPoints: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pointSkeletor: {
        width:100, 
        height:17,
        borderRadius:10
    }
});