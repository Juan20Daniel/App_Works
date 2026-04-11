import { View, Pressable, Text } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

interface Props {
    textQuestion:string;
    textLink: string;
    navigateTo:() => void;
}

export const AuthSwitchLink = ({textQuestion, textLink, navigateTo}:Props) => {
    return (
        <View style={{flexDirection:'row', gap:5, justifyContent: 'center',marginTop:30}}>
            <Text>
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
                    fontSize: 15
                }}>
                    {textLink}
                </Text>
            </Pressable>
        </View>
    );
}
