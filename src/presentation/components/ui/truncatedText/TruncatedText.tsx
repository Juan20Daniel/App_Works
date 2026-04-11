import React, { useState } from 'react';
import { Platform, Text, TextLayoutEvent, View } from 'react-native';
import { calcResolutionDevice } from '@/presentation/helpers/calcResolutionDevice';
import { TextShowMore } from './components/TextShowMore';

interface Props {
    value: string;
    smallSize?: number;
    mediumSize?: number;
    hideSize?: number;
    numberofLines?: number;
    minNumOfCharactersInPhones?: number;
    maxNumOfCharactersInTablets?: number;
}

export const TruncatedText = ({
    value, 
    numberofLines=1, 
    smallSize=10, 
    mediumSize, 
    hideSize,
}:Props) => {
    const [ isTruncated, setIsTruncated ] = useState(false);
     const handleText = (event: TextLayoutEvent) => {
        if(Platform.OS === 'ios') {
            const { lines } = event.nativeEvent;
            if(lines.length <= 1) return (setIsTruncated(false));
            const maxTextLength = lines[lines.length-2]?.text.length ?? 0;
            const lengthLastText = lines[lines.length-1]?.text.length ?? 0;
            return setIsTruncated(lengthLastText > maxTextLength);
        }
        const { lines } = event.nativeEvent;
        const lastWord = lines[numberofLines-1].text.split(' ').pop();
        setIsTruncated(/…/g.test(lastWord!));
    }
    return (
        <View style={{position: 'relative'}}>
            <Text 
                onTextLayout={handleText}
                numberOfLines={numberofLines} 
                style={{
                    fontSize: calcResolutionDevice({
                        low: smallSize, 
                        medium:mediumSize??smallSize, 
                        high:hideSize??mediumSize??smallSize
                    })
                }}
            >
                {value}
            </Text>
            {isTruncated && 
                <TextShowMore 
                    smallSize={smallSize}
                    mediumSize={mediumSize}
                    hideSize={hideSize}
                />
            }
        </View>
    );
}