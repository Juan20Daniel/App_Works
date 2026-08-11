import { Image, useWindowDimensions, View } from "react-native";

export const IlustrationSearch = () => {
    const width = useWindowDimensions().width;
    const isTable = width>500;
    const maxWidth = isTable ? width-250 : width-100;
    return (
        <View style={{width: '100%', alignItems: 'center', marginTop:isTable?40:0}}>
            <Image
                source={require('../../../assets/search/ilustration.png')}
                style={{width:maxWidth, height:maxWidth, objectFit:'contain', marginTop:30}}  
            />
        </View>
    );
}
