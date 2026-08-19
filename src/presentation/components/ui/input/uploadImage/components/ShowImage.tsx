import { Image } from 'react-native';

interface Props {
    url?: string;
}

export const ShowImage = ({url}:Props) => {
    if(!url) return null;
    return (
        <Image
            source={{uri:url}}
            style={{
                objectFit: 'contain', 
                flex: 1
            }}
        />
    )
}
