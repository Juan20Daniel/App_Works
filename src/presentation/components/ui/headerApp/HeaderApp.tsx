import { View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { BtnClose } from '../btnClose/BtnClose';
import { ScrollEdgeFade } from '../../shared';
import { styles } from './styles';
import { SubTitle } from './components';

interface Props {
    subText?: string;
    paddingTop?: number;
    showBtnClose?: boolean;
    heigthScrollEdgeFade?: number;
    marginBottom?: number; 
    actionBtnClose: () => void;
}

export const HeaderApp = ({
    subText,
    paddingTop,
    showBtnClose=true,
    heigthScrollEdgeFade,
    marginBottom,
    actionBtnClose
}:Props) => {
    return (
        <View style={{
            ...styles.container,
            paddingTop:paddingTop??0,
            marginBottom:marginBottom??0
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex:1,
            }}>
                <View style={styles.boxTitle}>
                    <TitleApp />
                    <SubTitle text={subText} />
                </View>
                <BtnClose
                    show={showBtnClose}
                    backTo={() => {actionBtnClose()}} 
                />
            </View>
            <ScrollEdgeFade
                direction='top'
                heigth={heigthScrollEdgeFade}
            />
        </View>
    );
}