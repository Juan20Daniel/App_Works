import { StyleSheet, Text, View } from 'react-native';
import { SelectonScroll } from './SelectonScroll';
import { SelectScrollItem } from '@/presentation/types/select-scroll';
import { formStyles } from '../../../styles';

interface Props {
    hourName: string;
    hour: {index:number, name:string};
    hourRef: React.RefObject<number|null>; 
    initiallyHourSelectedOption?:number;
    
    minuteName:string;
    minute: {index:number, name:string};
    minuteRef: React.RefObject<number|null>; 
    initiallyMinuteSelectedOption?:number;
    
    timeName:string;
    time: {index:number, name:string};
    timeRef: React.RefObject<number|null>; 
    initiallyTimeSelectedOption?:number;

    handleChange:(field:string, name:string, index:number) => void;
}

const hours:SelectScrollItem[] = [
    {id:0, name:'1'},
    {id:1, name:'2'},
    {id:2, name:'3'},
    {id:3, name:'4'},
    {id:4, name:'5'},
    {id:5, name:'6'},
    {id:6, name:'7'},
    {id:7, name:'8'},
    {id:8, name:'9'},
    {id:9, name:'10'},
    {id:10, name:'11'},
    {id:11, name:'12'},
]
const minutes = ():SelectScrollItem[] => {
    const minutes = Array.from({length:59}, (_, i) => i+1)
    .map(minute => ({id:minute, name:`${minute}`}));
    minutes.unshift({id:0, name:'00'});
    return minutes;
}

export const HourSelector = ({
    hourName,
    hour, 
    hourRef,

    minuteName,
    minute,
    minuteRef,

    timeName,
    time,
    timeRef,

    initiallyHourSelectedOption=5,
    initiallyMinuteSelectedOption=30,
    initiallyTimeSelectedOption=0,

    handleChange,
}:Props) => {
    return (
        <View style={{...styles.row, width:110}}>
            <SelectonScroll
                name={hourName}
                list={hours}
                indexCenterElement={hour}
                lastIndexCenterElement={hourRef}
                setIndexCenterElement={handleChange}
                alignItems="flex-end"
                initiallySelectedOption={initiallyHourSelectedOption}
                width={25}
            />
            <Text style={{fontSize:18}}>:</Text>
            <SelectonScroll
                name={minuteName}
                list={minutes()}
                indexCenterElement={minute}
                lastIndexCenterElement={minuteRef}
                setIndexCenterElement={handleChange}
                initiallySelectedOption={initiallyMinuteSelectedOption}
                width={25}
            />
            <SelectonScroll
                name={timeName}
                list={[{id:0, name:'A.M'},{id:1, name:'P.M'}]}
                indexCenterElement={time}
                lastIndexCenterElement={timeRef}
                setIndexCenterElement={handleChange}
                initiallySelectedOption={initiallyTimeSelectedOption}
                width={35}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row', 
        ...formStyles.center
    }
});