import { Image, Text, View } from 'react-native';
import { UserAvatarSkeletor } from './UserAvatarSkeletor';
import { styles } from './styles';

interface Props {
    imageUrl?: string;
    userName: string;
    avatarColor: string;
    isLoading?: boolean;
}

export const UserAvatar = ({
    imageUrl, 
    userName, 
    avatarColor,
    isLoading
}:Props) => {
    if(isLoading || !userName) {
        return <UserAvatarSkeletor />
    }
    
    console.log({userName})
    console.log({imageUrl})
    return (
        <View style={{
            ...styles.container,
            // backgroundColor: avatarColor
        }}>
            {imageUrl
                ?   <Image
                        source={{uri:imageUrl}}
                        style={styles.img}
                    />
                :   <Text style={styles.text}>
                        {userName[0].toUpperCase()}
                    </Text>
            }
        </View>
    );
}