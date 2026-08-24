import { View } from 'react-native';
import { Icon } from '@/presentation/components/ui';
import { IsRequire, TextLabel } from './componens';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    text: string;
    isRequire?: boolean;
    isFocused?: boolean;
    isInvalid?: boolean;
}
export const InputLabel = ({
    text,
    isRequire=false,
    isFocused=false,
    isInvalid=false,
}:Props) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10,
            gap: 5
        }}>
            <TextLabel
                text={text}
                isFocused={isFocused}
                isInvalid={isInvalid}
            />
            <Icon
                name="Circle"
                size={5}
                color={isFocused
                    ? globalColors.azureBlue
                    : isInvalid 
                        ? globalColors.darkRed
                        : globalColors.black
                }
            />
            <IsRequire
                isRequire={isRequire}
                isFocused={isFocused}
                isInvalid={isInvalid}
            />
        </View>
    );
}