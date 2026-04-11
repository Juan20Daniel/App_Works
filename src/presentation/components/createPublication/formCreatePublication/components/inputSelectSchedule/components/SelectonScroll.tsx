import { DimensionValue, FlexAlignType, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, Vibration, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { SelectScrollItem } from '@/presentation/types/select-scroll';
import { useEffect } from 'react';

interface Props {
    name:string;
    indexCenterElement:{index:number, name:string};
    list:SelectScrollItem[];
    lastIndexCenterElement: React.RefObject<number|null>;
    width?:DimensionValue;
    backgroundColor?:string;
    alignItems?:FlexAlignType;
    initiallySelectedOption?:number;
    setIndexCenterElement: (field:string, name:string, index:number) => void;
}

export const SelectonScroll = ({
    name,
    indexCenterElement,
    list,
    lastIndexCenterElement,
    width,
    backgroundColor,
    initiallySelectedOption=0, 
    alignItems,
    setIndexCenterElement
}:Props) => {
    useEffect(() => {
        setIndexCenterElement(name, list[indexCenterElement.index].name, indexCenterElement.index);
        lastIndexCenterElement.current = indexCenterElement.index;
    },[]);
    const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const {contentOffset} = event.nativeEvent;
        const index = Math.max(0, Math.floor(Math.ceil(contentOffset.y) / 40));
        if(lastIndexCenterElement.current !== null) {
            if(lastIndexCenterElement.current !== index) Vibration.vibrate(100);
        }
        setIndexCenterElement(name, list[index].name, index);
        lastIndexCenterElement.current = index;
    }
    return (
        <View style={{height: 200, width:width??100, backgroundColor:backgroundColor??undefined}}>
            <ScrollView
                pagingEnabled
                snapToInterval={40}
                contentOffset={{x:0, y:(initiallySelectedOption)*40}}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.boxItem}/>
                <View style={styles.boxItem}/>
                {list.map((item, index) => (
                    <View style={{...styles.boxItem, alignItems:alignItems??'flex-start'}} key={index}>
                        <Text
                            style={{
                                fontSize:item.id === indexCenterElement.index ? 18 : 14,
                                color:item.id === indexCenterElement.index
                                    ?   globalColors.black
                                    :   (item.id+1 === indexCenterElement.index || item.id-1 === indexCenterElement.index)
                                        ?   globalColors.softGray
                                        :   globalColors.lightGray
                            }}>
                            {item.name}
                        </Text>
                    </View>
                ))}
                <View style={styles.boxItem}/>
                <View style={styles.boxItem}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    boxItem: {
        height: 40,
        width: '100%',
        justifyContent: 'center'
    }
});