import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { BtnFooter, Container, HeaderApp } from '@/presentation/components/ui';
import { IlustrationSearch, Select } from '../../components/search';
import type { SelectOption } from '@/presentation/types/select-option';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList, 'Search'> {}

const availableJobs:SelectOption[] = [
    {id:1, name:'Camionero', selected:false},
    {id:2, name:'Asistente', selected:false},
    {id:3, name:'Montacargas', selected:false},
    {id:4, name:'Mesero', selected:false},
    {id:5, name:'Cajero', selected:false},
    {id:6, name:'Repartidor', selected:false},
    {id:7, name:'Albañil', selected:false},
    {id:8, name:'Errero', selected:false},
    {id:9, name:'Conductor', selected:false},
    {id:10, name:'Bombero', selected:false},
    {id:11, name:'Doctor', selected:false},
]
const availableLocations:SelectOption[] = [
    {id:1, name:'Colima', selected:false},
    {id:2, name:'Manzanillo', selected:false},
    {id:3, name:'Armeria', selected:false},
    {id:4, name:'Tecoman', selected:false},
    {id:5, name:'Minatitlan', selected:false},
    {id:6, name:'Calcoman', selected:false},
    {id:7, name:'México', selected:false},
    {id:8, name:'Lazaro', selected:false},
    {id:9, name:'La corona', selected:false},
    {id:10, name:'Zapotitlan', selected:false},
]

export const Search = ({ navigation }:Props) => {
    const [ jobSelected, setJobSelected ] = useState(''); 
    const [ locationSelected, setLocationJobSelected ] = useState(''); 
    const [ showModalResults, setShowModalResults ] = useState(false); 
    

    return (
        <>
            <Container> 
                <View style={styles.content}>
                    <HeaderApp
                        alignTitle='center'
                        actionBtnClose={() => navigation.goBack()}
                    />
                    <View style={{width:'100%', height: 30}} />
                    <Select
                        value={jobSelected}
                        label='Selecciona un trabajo'
                        options={availableJobs}
                        onChangeText={setJobSelected}
                    />
                    <View style={{width:'100%', height: 20}} />
                    <Select
                        value={locationSelected}
                        label='Selecciona un ciudad'
                        options={availableLocations}
                        onChangeText={setLocationJobSelected}
                    />
                    <IlustrationSearch />
                    <BtnFooter
                        disable={jobSelected === '' || locationSelected === ''}
                        value='Buscar'
                        iconName='Search'
                        height={80}
                        sizeIcon={25}
                        action={() => navigation.navigate('SearchResults')}
                    />
                </View>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'relative',
        width: '100%', 
        height: '100%',
    },
});