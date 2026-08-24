import { Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

interface Props {
    show: boolean;
    message?: string;
}

export const InputErrorMessage = ({
    show,
    message
}:Props) => {
    return (
        <View style={{
            paddingLeft: 20,
            height: 15,
        }}>
            {show &&
                <Text style={{
                    fontFamily: globalStyles.fontMonserratMedium,
                    fontSize: 11,
                    color: globalColors.darkRed
                }}>
                    {message}
                </Text>
            }
        </View>
    );
}