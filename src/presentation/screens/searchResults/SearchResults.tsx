import { FlatList, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Container, HeaderApp } from '@/presentation/components/ui';
import { StatusResult } from '@/presentation/components/search/searchResultsModal/components';
import { Publication } from '../../components/publication/publication';
import { ModalPublicationOptions } from '@/presentation/components/publication';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList, 'SearchResults'> {}
    
export const SearchResults = ({ navigation, route }: Props) => {
    return (
        <Container>
            <FlatList
                data={['header', 1, 2, 3, 4, 5]}
                keyExtractor={(_, index) => index.toString()}
                stickyHeaderHiddenOnScroll={true}
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor:globalColors.lightGray
                    }} />
                }
                renderItem={({item}) => {
                    if(item === 'header') {
                        return  (
                            <View>
                                <HeaderApp
                                    alignTitle='flex-start'
                                    subText='Chofer en tecoman' 
                                    actionBtnClose={() => navigation.goBack()}
                                />
                                <StatusResult />
                            </View>
                        )
                    } 
                    return <Publication
                        title='Cores netos'
                        source={require('../../../assets/publications/imgOffer3.jpg')}
                    />
                }}
            />
        </Container>
    );
}