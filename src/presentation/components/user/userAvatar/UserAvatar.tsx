import { isTablet } from '@/presentation/helpers/isTablet';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    isTable?:boolean;
    username: string;
    userImage?:string;
}

export const UserAvatar = ({username, userImage}:Props) => {
    return (
        <View style={{
            ...styles.container,
            width:isTablet ? 90 : 70, 
            height:isTablet ? 90 : 70
        }}>
            {userImage 
                ?   <Image
                        source={require('../../../../assets/user/userImg.jpg')}
                        style={styles.img}
                    />
                :   <Text style={{...styles.text, fontSize:isTablet ? 50 : 35}}>
                        {username[0].toUpperCase()}
                    </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9A7F20',
        marginRight: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        borderRadius: 35,
        width:'100%', 
        height:'100%',
        objectFit: 'cover'
    },
    text: {
        color: 'white',
        fontSize: 35
    }
});