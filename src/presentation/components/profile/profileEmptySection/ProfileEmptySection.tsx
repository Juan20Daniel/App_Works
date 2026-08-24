import { ImageSourcePropType, View } from 'react-native';
import { percentageHeight } from '@/presentation/helpers/calcPercentage';
import { BtnAction, Description, Ilustration, Title } from './components';
import { styles } from './styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

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
    return (
        <View style={styles.outSpace}>
            <View style={{
                ...styles.container, 
                backgroundColor:background,
                height: percentageHeight(calcDimension({
                    small: 30,
                    medium: 23,
                    large: 25,
                    extraLarge: 27
                })),
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