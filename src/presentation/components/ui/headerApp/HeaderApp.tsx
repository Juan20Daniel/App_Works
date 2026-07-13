import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { BtnClose } from '../btnClose/BtnClose';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';
import { Icon } from '../icon/Icon';

interface Props {
    alignTitle?: 'center'|'flex-start',
    subText?: string;
    paddingTop?: number;
    showBtnClose?: boolean;
    actionBtnClose: () => void;
    actionBox?: () => void;
}

export const HeaderApp = ({
    alignTitle='flex-start', 
    subText, 
    paddingTop, 
    showBtnClose=true,
    actionBtnClose, 
    actionBox
}:Props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            actionBox && actionBox();
        }}>
            <View style={{...styles.container, justifyContent: alignTitle, paddingTop:paddingTop??20}}>
                <TitleApp />
                {subText &&
                    <>
                        <Icon name="Circle" size={6} color={globalColors.darkGray} />
                        <Text style={styles.subText}>{subText}</Text>
                    </>
                }
                {showBtnClose && 
                    <BtnClose backTo={() => {actionBtnClose()}} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        backgroundColor: globalColors.white,
        paddingLeft: globalStyles.marginHorizontal,
        paddingBottom: 10,
    },
    subText: {
        fontSize: calcDimension({small:12, medium: 16, large: 20}), 
        color:globalColors.darkGray,
        fontFamily: globalStyles.fontMonserratSemiBold
    }
});