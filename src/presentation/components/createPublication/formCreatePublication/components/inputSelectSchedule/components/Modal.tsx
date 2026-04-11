import { useRef } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { globalColors } from "@/presentation/globalStyles/global.styles";
import { Header } from "./Header";
import { BtnSave } from "./BtnSave";
import { SelectonScroll } from "./SelectonScroll";
import { HourSelector } from "./HourSelector";
import { SelectScrollItem } from "@/presentation/types/select-scroll";
import { isTablet } from "@/presentation/helpers/isTablet";
import { formStyles } from "../../../styles";


interface Props {
    schedule:Record<string, {index:number, name:string}>;
    visible: boolean;
    closeModal: () => void;
    handleChange:(field:string, name:string, index:number) => void;
    handleValue: () => void;
}
const days:SelectScrollItem[] = [
    {id:0, name:'Lunes'},
    {id:1, name:'Martes'},
    {id:2, name:'Miercoles'},
    {id:3, name:'Jueves'},
    {id:4, name:'Viernes'},
    {id:5, name:'Sábado'},
    {id:6, name:'Domingo'},
]

export const BoxModal = ({schedule, visible, closeModal, handleChange, handleValue}:Props) => {
    const startDayRef = useRef<number|null>(null);
    const startHourRef = useRef<number|null>(null);
    const startMinuteRef = useRef<number|null>(null);
    const startTimeRef = useRef<number|null>(null);
    const finishDayRef = useRef<number|null>(null);
    const finishHourRef = useRef<number|null>(null);
    const finishMinuteRef = useRef<number|null>(null);
    const finishTimeRef = useRef<number|null>(null);

    const clear = () => {
        startDayRef.current = null;
        startHourRef.current = null;
        startMinuteRef.current = null;
        startTimeRef.current = null;
        finishDayRef.current = null;
        finishHourRef.current = null;
        finishMinuteRef.current = null;
        finishTimeRef.current = null;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent>
            <View style={styles.container}>
                <View style={{...styles.content, width:isTablet ? 500 : 300}}>
                    <Header action={() => {
                        closeModal();
                        clear();
                    }} />
                    <Text style={styles.title}>Selecciona el día y la hora</Text>
                    <View style={isTablet ? styles.row : styles.column}>
                        <View style={styles.row}>
                            {!isTablet && <Text style={{fontSize:18}}>de</Text>}
                            <SelectonScroll
                                name='startDay'
                                list={days}
                                indexCenterElement={schedule.startDay}
                                lastIndexCenterElement={startDayRef}
                                initiallySelectedOption={schedule.startDay.index}
                                width={90}
                                setIndexCenterElement={handleChange}
                            />
                            <Text style={{fontSize:18, paddingRight:10}}>a</Text>
                            <SelectonScroll
                                name='finishDay'
                                list={days}
                                indexCenterElement={schedule.finishDay}
                                lastIndexCenterElement={finishDayRef}
                                initiallySelectedOption={schedule.finishDay.index}
                                width={90}
                                setIndexCenterElement={handleChange}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{fontSize:18}}>de</Text>
                            <HourSelector
                                hourName='startHour'
                                hour={schedule.startHour}
                                hourRef={startHourRef}
                                initiallyHourSelectedOption={schedule.startHour.index}

                                minuteName='startMinute'
                                minute={schedule.startMinute}
                                minuteRef={startMinuteRef}
                                initiallyMinuteSelectedOption={schedule.startMinute.index}

                                timeName='startTime'
                                time={schedule.startTime}
                                timeRef={startTimeRef}
                                initiallyTimeSelectedOption={schedule.startTime.index}
                                handleChange={handleChange}
                            />
                            <Text style={{fontSize:18}}>a</Text>
                            <HourSelector 
                                hourName='finishHour'
                                hour={schedule.finishHour}
                                hourRef={finishHourRef}
                                initiallyHourSelectedOption={schedule.finishHour.index}

                                minuteName='finishMinute'
                                minute={schedule.finishMinute}
                                minuteRef={finishMinuteRef}
                                initiallyMinuteSelectedOption={schedule.finishMinute.index}
                                
                                timeName='finishTime'
                                time={schedule.finishTime}
                                timeRef={finishTimeRef}
                                initiallyTimeSelectedOption={schedule.finishTime.index}
                                handleChange={handleChange}
                            />
                        </View>
                    </View>
                    <BtnSave action={() => {
                        clear();
                        closeModal();
                        handleValue();
                    }} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        ...formStyles.fullBoxCenter
    },
    content: {
        minHeight: 100,
        backgroundColor: globalColors.white,
        padding: 25,
        borderRadius: 20,
    },
    row: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    column: {
        flexDirection: 'column', 
    },
    title: {
        paddingBottom:20, 
        fontSize:15
    },
});
