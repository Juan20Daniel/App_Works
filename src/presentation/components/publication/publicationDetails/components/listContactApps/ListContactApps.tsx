import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title';
import { ItemApp } from './components/ItemApp';
import { BtnAddNewApp } from './components/BtnAddNewApp';

interface Props {
  typeUser: 'user'|'owner';
}

export const ListContactApps = ({ typeUser }:Props) => {
    return (
        <>
            <Title />  
            <View style={{...styles.boxApps}}>
                <ItemApp icon='logo-whatsapp' name='WhatsApp' />
                <ItemApp icon='logo-facebook' name='Facebook' />
                <ItemApp icon='mail-outline' name='Email' />
                {typeUser === 'user' && <ItemApp icon='logo-instagram' name='Instagram' />}
                {typeUser === 'owner' && <BtnAddNewApp />}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    boxApps: {
        gap:10,
        flexDirection: 'row',
        width: 320, 
        height: 100
    }
});