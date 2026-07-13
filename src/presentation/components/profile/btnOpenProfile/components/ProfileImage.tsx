import { Image } from 'react-native';

interface Props {
    imageUrl: string;
}

export const ProfileImage = ({imageUrl}:Props) =>  (
    <Image
        source={{uri:imageUrl}}
        style={{
            width:30, 
            height: 30, 
            borderRadius: 15, 
            objectFit:'cover'
        }}
    />
);