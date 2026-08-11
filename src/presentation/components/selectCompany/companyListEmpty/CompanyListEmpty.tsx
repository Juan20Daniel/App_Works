import { percentageHeight, percentageWidth } from "@/presentation/helpers/calcPercentage";
import { Image, View } from "react-native";

export const CompanyListEmpty = () => {
    return (
        <View style={{width:'100%', alignItems:'center'}}>
            <Image
                source={require('@/presentation/assets/selectCompany/company-list-empty-small.png')}
                style={{
                    width: percentageWidth(90),
                    height: percentageHeight(65),
                    objectFit: 'contain'
                }}
            />
        </View>
    );
}