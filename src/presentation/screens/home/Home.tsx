import { FlatList, ImageSourcePropType, View } from 'react-native';
import { Container, Navbar } from '@/presentation/components/ui';
import { AdsCarrucel } from '@/presentation/components/home';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { 
    FilterPublications,
    Publication
} from '@/presentation/components/publication';

const source:ImageSourcePropType = require('../../../assets/publications/imgOffer.jpg');
const source2:ImageSourcePropType = require('../../../assets/publications/imgOffer2.jpg');
const source3:ImageSourcePropType = require('../../../assets/publications/imgOffer3.jpg');

export const Home = () => {
    
    return (
        <Container marginTop={0}>
            <Navbar />
            <FlatList 
                data={['carrucel','filter', 1, 2, 3]}
                stickyHeaderIndices={[1]}
                stickyHeaderHiddenOnScroll
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{width: '100%', height: 100, backgroundColor: globalColors.lightGray}} />
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
                        return <Publication title='Chofer de camión' source={source3}/>
                    }
                    return <Publication title='Chofer de camión' source={Number(item) % 2 === 0 ? source : source2}/>
                }}
            />
        </Container>
    );
}