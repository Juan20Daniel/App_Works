import { View, Pressable, Text } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { calcDimension } from '@/presentation/helpers/calcDimension';

interface Props {
    textQuestion:string;
    textLink: string;
    navigateTo:() => void;
}

export const AuthSwitchLink = ({textQuestion, textLink, navigateTo}:Props) => {
    return (
        <View style={{flexDirection:'row', gap:5, justifyContent: 'center',marginTop:30}}>
            <Text style={{fontSize:calcDimension({small: 12, medium:15})}}>
                {textQuestion}
            </Text>
            <Pressable 
                style={({pressed}) => [
                    {opacity: pressed?0.4:1}
                ]}
                onPress={() => navigateTo()}
            >
                <Text style={{
                    color:globalColors.azureBlue,
                    fontFamily: globalStyles.fontMonserratMedium,
                    fontSize: calcDimension({small: 12, medium:15})
                }}>
                    {textLink}
                </Text>
            </Pressable>
        </View>
    );
}
