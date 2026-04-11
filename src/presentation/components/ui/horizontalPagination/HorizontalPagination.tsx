import { globalColors } from "@/presentation/globalStyles/global.styles";
import { useState } from "react";
import { 
    FlatList, 
    StyleProp,
    View, 
    ViewStyle, 
    NativeSyntheticEvent, 
    NativeScrollEvent, 
    StyleSheet
} from "react-native";

interface Props {
    list: number[];
    customStyleContainer?:StyleProp<ViewStyle>;
    customStyleBoxScroll?:StyleProp<ViewStyle>;
    children:React.ReactNode;
    pagingEnabled?:boolean;
    showNavigation?:boolean;
}

export const HorizontalPagination = ({
    list, 
    customStyleContainer,
    customStyleBoxScroll,
    children,
    pagingEnabled=false,
    showNavigation=false,
}:Props) => {
    const [ index, setIndex ] = useState(0);
    const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
       setIndex(Math.floor(contentOffset.x / layoutMeasurement.width))
    }
    return (
        <View style={[{flex:1}, customStyleContainer]}>
            <View style={[{flex:1}, customStyleBoxScroll]}>
                <FlatList 
                    data={list}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    pagingEnabled={pagingEnabled}
                    showsHorizontalScrollIndicator={false}
                    renderItem={() => (
                        <>
                            {children}
                        </>
                    )}
                    onScroll={onScroll}
                />
            </View>
            {showNavigation &&
                <View style={styles.boxPoints}>
                    {list.map(item => (
                        <View 
                            key={item}
                            style={{
                                ...styles.point, 
                                backgroundColor:item===index+1
                                    ? 'black' 
                                    : globalColors.lightGray
                            }} 
                        />
                    ))}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    boxPoints: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    point: {
        width: 17,
        height: 17,
        borderRadius: 10,
    }
});