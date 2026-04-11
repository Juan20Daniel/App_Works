import { Pressable, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { Info } from './components/Info';
import { ImgCompany } from './components/ImgCompany';
import { isTablet } from '@/presentation/helpers/isTablet';
import { BtnIcon } from '../../ui';

interface Props {
    openNotificationOptions:() => void;
}

export const Notification = ({openNotificationOptions}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Pressable
            onPress={() => navigation.navigate('Publication', {typeUser:'user'})}
            style={({pressed}) => [
                styles.container,
                {
                    backgroundColor: pressed ? globalColors.lightGray : undefined,
                    height: isTablet ? 160 : 100
                    // opacity: 0.6
                }
            ]}
        >
            <View style={{...styles.content, height: isTablet ? 150 : 90 }}>
                <ImgCompany />
                <Info />
                <View style={{width:30, alignItems:'flex-end', height: isTablet ? 150 : 90}}>
                    <BtnIcon
                        iconName="More"
                        action={() => openNotificationOptions()}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginTop: 10
    },
    content: {
        flexDirection:'row',
        alignItems:'center',
        gap: 20
    }
});