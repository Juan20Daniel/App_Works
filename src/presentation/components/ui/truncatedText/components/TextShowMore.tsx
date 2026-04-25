import React from 'react';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { StyleSheet, Text, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    smallSize: number;
    mediumSize?: number;
    hideSize?: number;
}

export const TextShowMore = ({smallSize,mediumSize,hideSize}:Props) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                locations={[0.15,0.30]}
                colors={['rgba(255, 255, 255, 0.68)', '#ffffff']}
            >
                <Text style={{
                    color: globalColors.azureBlue,
                    fontSize: calcDimension({
                        small: smallSize, 
                        medium:mediumSize??smallSize, 
                        large:hideSize??mediumSize??smallSize
                    })
                }}>     ...mas</Text>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
    }
});