import { ImageSourcePropType, useWindowDimensions, View } from 'react-native';
import { percentageHeight } from '@/presentation/helpers/calcPercentage';
import { isTablet } from '@/presentation/helpers/isTablet';
import { BtnAction, Description, Ilustration, Title } from './components';
import { styles } from './styles';

interface Props {
    title: string;
    description: string;
    textBtnAction: string;
    ilustration: ImageSourcePropType;
    background: string;
    btnAction:() => void;
}

export const ProfileEmptySection = ({
    title,
    description,
    textBtnAction,
    ilustration,
    background,
    btnAction
}:Props) => {
    const height = useWindowDimensions().height;
    return (
        <View style={styles.outSpace}>
            <View style={{
                ...styles.container, 
                // backgroundColor:background,
                backgroundColor: 'green',
                height: height < 750 
                    ? 160 
                    : percentageHeight(isTablet ? 25 : 22),    
            }}> 
                <Ilustration ilustration={ilustration} />
                <View style={styles.boxInfo}>
                    <Title text={title} />
                    <Description text={description} />
                    <BtnAction 
                        text={textBtnAction} 
                        onPress={btnAction}
                    />
                </View>
            </View>
        </View>
    );
}