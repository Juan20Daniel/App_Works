import { useState } from 'react';
import { View } from 'react-native';
import { BoxModal } from './components/Modal';
import { isTablet } from '@/presentation/helpers/isTablet';
import { Label } from '../shared/label/Label';
import { BtnSelect } from '../shared/btnSelect/BtnSelect';
import { InputState } from '@/presentation/types/input';

interface Props {
    state: InputState;
    handleChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    closeFocus:() => void;
}

export const InputSelectSchedule = ({
    state,
    onFocus, 
    handleChange, 
    closeFocus
}:Props) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ schedule, setSchedule ] = useState<Record<string, {index:number, name:string}>>({
        startDay:{index:3, name:''},
        startHour:{index:5, name:''},
        startMinute:{index:30, name:''},
        startTime:{index:0, name:'A.M'},
        finishDay:{index:3, name:''},
        finishHour:{index:5, name:''},
        finishMinute:{index:30, name:''},
        finishTime:{index:1, name:''},
    });
    const { name, } = state;
    const onChange = (field:string, name:string, index:number) => {
        setSchedule(preState => ({
            ...preState,
            [field]:{index:index, name:name}
        }));
    }
    const handleValue = () => {
        const {startDay, finishDay, finishHour, startHour, startMinute, startTime, finishMinute, finishTime} = schedule;
        const value = `De ${startDay.name} a ${finishDay.name} de ${startHour.name}:${startMinute.name} ${startTime.name} a ${finishHour.name}:${finishMinute.name} ${finishTime.name}`;
        handleChange(name, value);
        closeFocus();
    }
    return (
        <>
            <View style={{width:isTablet ? '50%' : '100%', paddingHorizontal:10}}>
                <View style={{flex:1}}>
                    <Label
                        text='Horario'
                        state={state}
                        showTextRequire
                     
                    />
                    <BtnSelect
                        state={{name:'benefits', value:'', isValid: false, status:null, isFocus:false, isRequired:true}}
                        placeholder='Selecciona el horario de trabajo'
                        onPress={() => {
                            onFocus(name);
                            setShowModal(!showModal);
                        }}
                    />
                </View>
            </View>
            <BoxModal 
                schedule={schedule}
                visible={showModal}
                handleChange={onChange}
                handleValue={handleValue}
                closeModal={() => {
                    setShowModal(false);
                    onFocus(name);
                    closeFocus();
                }}
            />
        </>
    );
}