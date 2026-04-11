import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { isTablet } from '@/presentation/helpers/isTablet';

interface Props {
    message: string;
    valueBtn: string;
    action:() => void;
}

export const EmptyListPublications = ({message, valueBtn, action}:Props) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.content, borderRadius:isTablet?40:20}}>
                <Image 
                    source={require('../../../../assets/notData.png')}
                    style={{...styles.image, width:isTablet ? 250 : 140, height: isTablet ? 150 : 90}}
                />
                <Text style={styles.message}>{message}</Text>
                <Pressable 
                    style={({pressed}) => [
                        styles.btnAction,
                        {
                            paddingHorizontal:isTablet ? 20 : 15,
                            paddingVertical: 10,
                            opacity:pressed ? 0.5 : 1,

                        }
                    ]} 
                    onPress={() => action()}
                >
                    <Text style={{...styles.textBtnAction, fontSize:isTablet ? 14 : 10}}>{valueBtn}</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
    },
    content: {
        padding: 10,
        flex:1,
        borderWidth:1,
        borderColor:globalColors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    image: {
        objectFit: 'contain'
    },
    message: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.gray,
        textAlign: 'center',
    },
    btnAction: {
        backgroundColor: globalColors.black,
        borderRadius: 10
    },
    textBtnAction: {
        color:globalColors.white,
        fontFamily: globalStyles.fontMonserratMedium
    }
});