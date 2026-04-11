import { ReactNode } from 'react';
import { DimensionValue, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '@/presentation/globalStyles/global.styles';
import { BtnClose, Container } from '@/presentation/components/ui';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    navigation: StackNavigationProp<RootStackParamList>;
    subTitle:string;
    marginTop?:DimensionValue;
    children:ReactNode;
}

export const AuthLayout = ({navigation, subTitle, children}:Props) => {
    const { top } = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = width>500;
    return (
        <Container>
            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <View style={{...styles.container, minHeight:height-top}}>
                    <View style={{...styles.content,  padding:isTable ? 30:10}}>
                        <BtnClose backTo={() => navigation.replace('Home', {animationType:'fade'})} top={20} />
                        <View style={{width:'100%', maxWidth: 500}}>
                            <Text style={{...styles.title, fontSize: isTable?40:35,width:isTable?400:300}}>
                                Bienvenido a Nuestra App
                            </Text>
                            <Text style={{...styles.subTitle, width:isTable ? 250 : 230}}>
                                {subTitle}
                            </Text>
                            {children}
                            {(height <= 790 && height >= 700) &&
                                <View style={{width:'100%', height: 100}} />
                            } 
                            {(height <= 700) &&
                                <View style={{width:'100%', height: 200}} />
                            } 
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center', 
        height:'100%',
    },
    content: {
        position: 'relative',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: globalStyles.fontMonserratMedium,
        width: 330,
    }
});