import { FlatList, RefreshControl, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { HeaderApp } from '@/presentation/components/ui';
import { CreatePublicStackParamList } from '../../PublicationFormStack';
import { CompanyListEmpty } from '@/presentation/components/selectCompany';
import { BtnGoToCompanyForm } from '@/presentation/components/selectCompany';
import { useCompaniesByCreatorId } from './hooks';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { useOnPullToRefresh, useSession } from '@/presentation/hooks';

interface Props extends StackScreenProps<CreatePublicStackParamList, 'SelectCompany'>{}

export const SelectCompany = ({navigation}:Props) => {
    const { user } = useSession();
    const { top, bottom } = useSafeAreaInsets();
    const height = useWindowDimensions().height;
    const { 
        companies, 
        isPending, 
        isLoading, 
        isError, 
        isFetchNextPageError, 
        refetch, 
        fetchNextPage, 
        loadMore 
    } = useCompaniesByCreatorId(user?.id!); 
    const { 
        isPullRefreshing,
        onPullToRefresh
     } = useOnPullToRefresh(async () => {
        if(isFetchNextPageError) return fetchNextPage();
        return refetch();
     })

    const closeAlertConfirm = () => {
        // setConfirmAlert({visible:false, title:'', message:''});
    }
    const confirmedAction = () => {
        closeAlertConfirm();
        navigation.goBack();
    }

    const containerHeight = height-bottom-calcDimension({small:100, medium:120})
   
    return (
        <View style={{height:height, backgroundColor: globalColors.white}}>
            <View style={{
                height:containerHeight, 
                backgroundColor: globalColors.white, 
                marginTop: top, 
            }}>
                <HeaderApp
                    subText='Seleccionar empresa'
                    actionBtnClose={() => confirmedAction()}
                />
                <FlatList
                    data={companies}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl 
                            refreshing={isPullRefreshing} 
                            onRefresh={onPullToRefresh}
                        />
                    }
                    ListEmptyComponent={
                        <>
                            {(!isPending && !isLoading && isError) 
                                ?   <View style={styles.erorrr}>
                                        <Text>Error al cargar los datos</Text>
                                    </View>
                                :   undefined
                            }
                            {(!isPending && !isLoading && !isError)
                                ?    <View style={styles.erorrr}>
                                        <Text>No hay ni vergas</Text>
                                    </View>
                                :   undefined
                            }
                        </>
                    }
                    ListFooterComponent={
                        <>
                            {isPending
                                ?    <View style={styles.loading}>
                                        <Text>Cargando mas jodidos datos</Text>
                                    </View>
                                :   undefined
                            }
                        </>
                    }
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    keyExtractor={(item) => item.id}
                    renderItem={() => (
                        <CompanyListEmpty />
                    )}
                />
            </View>
            <BtnGoToCompanyForm
                text='AGREGAR EMPRESA'
                onPress={() => navigation.navigate('CompanyForm', {form:{type:'CREATE'}})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    erorrr: {
        padding: 50,
    },
    loading: {
        width:'100%',
        height: 400,
        backgroundColor: 'gray'
    }
})