import { calcDimension } from "@/presentation/helpers/calcDimension";
import { percentageHeight, percentageWidth } from "@/presentation/helpers/calcPercentage";
import { Image, View } from "react-native";

export const CompanyListEmpty = () => {
    return (
        <View style={{width:'100%', alignItems:'center'}}>
            <Image
                source={require('@/presentation/assets/selectCompany/company-list-empty-small.png')}
                style={{
                    width: percentageWidth(calcDimension({
                        small:90, 
                        medium: 90, 
                        large: 100
                    })),
                    height: percentageHeight(calcDimension({
                        small:65, 
                        medium: 65, 
                        large: 70
                    })),
                    objectFit: 'contain'
                }}
            />
        </View>
    );
}