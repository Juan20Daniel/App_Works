import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';

import { BtnIcon } from '@/presentation/components/ui/btnIcon/BtnIcon';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Icon } from '../../ui/icon/Icon';

interface Props {
    hasSeen?:boolean;
    openOptions: () => void;
}

export const PublicationSmall = ({hasSeen=false, openOptions}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    return (
        <View style={{...styles.container, width:isTablet ? 500 : width}}>
            <Pressable
                onPress={() => navigation.navigate('Publication', {typeUser:'user'})}
                style={({pressed}) => [
                    styles.content,
                    {
                        borderColor:pressed ? globalColors.azureBlue : globalColors.lightGray,
                        borderRadius:isTablet ? 40 : 20,
                    }
                ]}
            >
                <Image
                    source={require('../../../../assets/publications/imgOffer.jpg')}
                    style={{
                        ...styles.imgOffer, 
                        opacity: hasSeen ? 0.4 : 1, objectFit:'cover',
                        borderRadius: isTablet ? 40 : 20,
                    }}
                />
                <View style={{
                    ...styles.info, 
                    padding:isTablet ? 30 : 10, 
                    borderBottomStartRadius:isTablet ? 40 : 20, 
                    borderBottomRightRadius:isTablet ? 40 : 20
                }}>
                    <View style={{flexDirection: 'row', alignItems:'center', gap: 5,}}>
                        <Text style={{...styles.offerStatus, fontSize:isTablet ? 15 : 10}}>
                            Estado de la  vacante
                        </Text>
                        <Icon name="Question" />
                        <Text style={{fontSize:14}}>Disponible</Text>
                    </View>
                    <Text style={{...styles.publishedAgo, paddingTop:isTablet ? 10:2, fontSize: isTablet ?15:10}}>
                        Publicado hace 6 días
                    </Text>
                </View>
                <View style={styles.boxBtnShowOptions}>
                    <BtnIcon
                        iconName='Question'
                        action={() => openOptions()} 
                        iconColor={globalColors.white}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 10
    },
    content: {
        borderWidth:1,
    },
    imgOffer: {
        width: '100%',
        height: '100%',
        backgroundColor: globalColors.white,
    },
    info: {
        position:'absolute', 
        bottom:0, 
        backgroundColor: globalColors.white, 
        width:'100%'
    },
    offerStatus: {
        color: globalColors.black
    },
    publishedAgo: {
        fontSize: 15,
        color: globalColors.gray
    },
    boxBtnShowOptions: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding:3,
        borderRadius: 20,
        right: 20,
        top: 20,
    }
});