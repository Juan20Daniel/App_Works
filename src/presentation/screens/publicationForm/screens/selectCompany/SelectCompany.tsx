import { Pressable, ScrollView, useWindowDimensions, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { HeaderApp } from '@/presentation/components/ui';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
import { CompanyListEmpty } from '@/presentation/components/selectCompany';
import { BtnAddCompany } from '@/presentation/components/selectCompany/btnAddCompany';
interface Props extends StackScreenProps<CreatePublicStackParamList, 'SelectCompany'>{}

export const SelectCompany = ({navigation}:Props) => {
    const { top, bottom } = useSafeAreaInsets();
    const height = useWindowDimensions().height;
    
    const closeAlertConfirm = () => {
        // setConfirmAlert({visible:false, title:'', message:''});
    }
    const confirmedAction = () => {
        closeAlertConfirm();
        navigation.goBack();
    }
   
    return (
        <View style={{height:height, backgroundColor: globalColors.white}}>
            <ScrollView 
                style={{height:height-bottom-100, backgroundColor: globalColors.white, marginTop: top}} 
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <HeaderApp
                    subText='Seleccionar empresa'
                    actionBtnClose={() => confirmedAction()}
                    actionBox={() => {}}
                />
                <CompanyListEmpty />
                {/* <CompanyListEmpty /> */}
            </ScrollView>
            <BtnAddCompany />
        </View>
    );
}