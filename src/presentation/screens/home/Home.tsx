import { FlatList, ImageSourcePropType, RefreshControl, View } from 'react-native';
import { Container, Navbar } from '@/presentation/components/ui';
import { AdsCarrucel } from '@/presentation/components/home';
import { styles } from './styles';
import { 
    FilterPublications,
    ItemPublication
} from '@/presentation/components/publication';
import { useAuthContext } from '@/presentation/context';

const source:ImageSourcePropType = require('../../assets/publications/imgOffer.jpg');
const source2:ImageSourcePropType = require('../../assets/publications/imgOffer2.jpg');
const source3:ImageSourcePropType = require('../../assets/publications/imgOffer3.jpg');

export const Home = () => {
    const { isPullRefreshing, onPullToRefresh } = useAuthContext();
    return (
        <Container marginTop={0}>
            <Navbar />
            <FlatList
                data={['carrucel','filter', 1, 2, 3]}
                stickyHeaderIndices={[1]}
                stickyHeaderHiddenOnScroll
                refreshControl={
                    <RefreshControl 
                        refreshing={isPullRefreshing}
                        onRefresh={onPullToRefresh}
                    />
                }
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={styles.box} />
                }
                keyExtractor={(item) => item.toString()}
                
                renderItem={({item}) => {
                    if(item === 'carrucel') {
                        return <AdsCarrucel />
                    }
                    if(item === 'filter') {
                        return <FilterPublications /> 
                    }
                    if(item === 3) {
                        return <ItemPublication 
                            title='Chofer de camión' 
                            source={source3}
                        />
                    }
                    return <ItemPublication
                        title='Chofer de camión' 
                        source={Number(item) % 2 === 0 ? source : source2}
                    />
                }}
            />
        </Container>
    );
}