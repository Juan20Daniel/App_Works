import { View } from 'react-native';
import { Icon } from '@/presentation/components/ui';
import { IsRequire, TextLabel } from './componens';

interface Props {
    text: string;
    isRequire?: boolean;
}
export const InputLabel = ({
    text,
    isRequire=false
}:Props) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10,
            gap: 5
        }}>
            <TextLabel text={text} />
            <Icon name="Circle" size={5} />
            <IsRequire isRequire={isRequire} />
        </View>
    );
}