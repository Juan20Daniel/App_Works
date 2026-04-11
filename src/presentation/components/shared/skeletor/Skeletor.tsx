import { StyleProp, View, ViewStyle } from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
    width:number;
    height: number;
    borderRadius?:number;
    boxSkeletorStyles?: StyleProp<ViewStyle>;
}

export const Skeletor = ({width, height, borderRadius=0, boxSkeletorStyles}:Props) => {
    return (
        <View style={[{width, height}, boxSkeletorStyles]}>
            {/* <SkeletonPlaceholder speed={1500} borderRadius={borderRadius}>
                <SkeletonPlaceholder.Item width={width} height={height} />
            </SkeletonPlaceholder> */}
        </View>
    );
}