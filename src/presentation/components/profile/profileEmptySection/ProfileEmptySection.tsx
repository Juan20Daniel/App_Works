import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { percentageHeight } from '@/presentation/helpers/calcPercentage';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
    title: string;
    description: string;
    textBtnAction: string;
    ilustration: ImageSourcePropType;
    background: string;
}

export const ProfileEmptySection = ({
    title,
    description,
    textBtnAction,
    ilustration,
    background,
}:Props) => {
    const height = useWindowDimensions().height;
    
    return (
        <View style={styles.outSpace}>
            <View style={{
                ...styles.container, 
                backgroundColor:background,
                height: height < 750 
                    ? 160 
                    : percentageHeight(isTablet ? 24 : 21),    
            }}>
                
                <View style={{width: '40%', alignItems:'flex-end'}}>
                    <Image
                        source={ilustration}
                        style={{
                            width: calcDimension({small: 120, medium: 130, large: 150, extraLarge: 180}),
                            height: calcDimension({small: 120, medium: 130, large: 150, extraLarge: 180}),
                        }}
                    />
                </View>
                <View style={{
                    width: '60%', 
                    gap: calcDimension({small: 5, medium: 10, large:10, extraLarge:15}),
                    alignItems: 'flex-start',
                    paddingLeft: calcDimension({small: 5, medium: 10, large: 15, extraLarge: 40}),
                }}>
                    <Text style={{
                        fontFamily:globalStyles.fontMonserratSemiBold,
                        width: calcDimension({small: 150, medium: 180, large: 180, extraLarge: 250}),
                        fontSize: calcDimension({small: 12, medium: 14, large: 15}),
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        fontFamily:globalStyles.fontMonserratMedium,
                        width: calcDimension({small: 150, medium: 200, large: 230, extraLarge: 250}),
                        fontSize: calcDimension({small: 10, medium: 12, large: 13}),
                        
                        color: globalColors.gray
                    }}>
                        {description}
                    </Text>
                    <Pressable 
                        style={({pressed}) => [{
                            backgroundColor: globalColors.black, 
                            paddingVertical: calcDimension({small: 8, medium: 10, large: 11}),
                            borderRadius: calcDimension({small: 13, medium: 15, large: 16}),
                            paddingHorizontal: calcDimension({small: 13, medium: 15, large: 16}),
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                            opacity: pressed ? 0.5 : 1
                        }]}
                    >
                        <Text style={{
                            color: globalColors.white,
                            fontSize: calcDimension({small: 10, medium: 12, large: 13}),
                        }}>
                            {textBtnAction}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outSpace: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    container: {
        width:'100%', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:calcDimension({small: 20, medium: 30, large: 40}),
    }
});