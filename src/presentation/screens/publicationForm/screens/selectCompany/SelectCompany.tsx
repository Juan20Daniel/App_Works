import { ScrollView, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { HeaderApp } from '@/presentation/components/ui';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
interface Props extends StackScreenProps<CreatePublicStackParamList, 'SelectCompany'>{}

export const SelectCompany = ({navigation}:Props) => {
    const { top } = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    
    const closeAlertConfirm = () => {
        // setConfirmAlert({visible:false, title:'', message:''});
    }
    const confirmedAction = () => {
        closeAlertConfirm();
        navigation.goBack();
    }
   
    return (
        <View style={{flex: 1, backgroundColor: globalColors.white}}>
            <ScrollView 
                style={{flex: 1, backgroundColor: globalColors.white, marginTop: top}} 
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <HeaderApp
                    subText='Seleccionar empresa'
                    actionBtnClose={() => confirmedAction()}
                    actionBox={() => {}}
                />
               
            </ScrollView>
        </View>
    );
}