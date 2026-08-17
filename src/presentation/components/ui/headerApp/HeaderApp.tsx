import { Text, View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { BtnClose } from '../btnClose/BtnClose';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Icon } from '../icon/Icon';
import { ScrollEdgeFade } from '../../shared';
import { styles } from './styles';

interface Props {
    alignTitle?: 'center'|'flex-start',
    subText?: string;
    paddingTop?: number;
    showBtnClose?: boolean;
    heigthScrollEdgeFade?: number;
    marginBottom?: number; 
    actionBtnClose: () => void;
}

export const HeaderApp = ({
    alignTitle='flex-start',
    subText,
    paddingTop,
    showBtnClose=true,
    heigthScrollEdgeFade,
    marginBottom=0,
    actionBtnClose
}:Props) => {
    return (
        <View style={{
            ...styles.container, 
            justifyContent: alignTitle, 
            paddingTop:paddingTop??20,
            marginBottom:marginBottom
        }}>
            <TitleApp />
            {subText &&
                <>
                    <Icon 
                        name="Circle" 
                        size={6} 
                        color={globalColors.darkGray} 
                    />
                    <Text style={styles.subText}>
                        {subText}
                    </Text>
                </>
            }
            {showBtnClose &&
                <BtnClose 
                    backTo={() => {actionBtnClose()}} 
                />
            }
            <ScrollEdgeFade
                direction='top'
                heigth={heigthScrollEdgeFade}
            />
        </View>
    );
}