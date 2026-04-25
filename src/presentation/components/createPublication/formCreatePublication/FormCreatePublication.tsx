import { Keyboard } from "react-native";
import { useCreatePublication } from "@/presentation/context/CreatePublicationContext";
import type { InputSelectOption } from "@/presentation/types/input-select-option";
import {
    BtnSelectLogo,
    CoordinateSelector,
    InputListManager,
    InputSelect,
    InputSelectSchedule,
    InputTextForm,
    Row,
    UploadImage,
} from "./components";

const availableJobs:InputSelectOption[] = [
    {id:1, name:'Camionero', isSelected:false},
    {id:2, name:'Asistente', isSelected:false},
    {id:3, name:'Montacargas', isSelected:false},
    {id:4, name:'Mesero', isSelected:false},
    {id:5, name:'Cajero', isSelected:false},
    {id:6, name:'Repartidor', isSelected:false},
    {id:7, name:'Albañil', isSelected:false},
    {id:8, name:'Errero', isSelected:false},
    {id:9, name:'Conductor', isSelected:false},
    {id:10, name:'Bombero', isSelected:false},
    {id:11, name:'Doctor', isSelected:false},
]

export const FormCreatePublication = () => {
    const { formState, setFocus, setValue, clearInput } = useCreatePublication();
    return (
        <>
            <Row>
                <BtnSelectLogo
                    state={formState.logoCompany!}
                    onChange={setValue}
                />
                <InputTextForm
                    state={formState.companyName!}
                    label="Nombre de la empresa"
                    placeholder="Ingresa el nombre de la empresa"
                    keyboardType="default"
                    onChange={setValue}
                    onFocus={setFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputTextForm
                    state={formState.companyDesc!}
                    label="Acerca de la empresa"
                    placeholder="Descripción de la empresa"
                    keyboardType="default"
                    multiline
                    inputType='input-area'
                    containerWidth='100%'
                    onChange={setValue}
                    onFocus={setFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <UploadImage />
            </Row>
            {/* <Row>
                <InputSelect
                    label="Tipo de trabajo" 
                    placeholder="Selecciona una opción" 
                    name='typeWork'
                    listOptions={availableJobs}
                    isFocus={formState.values.typeWork.isFocus}
                    value={formState.values.typeWork.value}
                    statusError={formState.errors.typeWork.status}
                    errorFieldInvalid="El tipo de trabajo no es válido"
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                    onFocus={(field:string) => {
                        Keyboard.dismiss();
                        putFocus(field)}
                    }
                />
                <InputSelectSchedule
                    name='schedule'
                    value={formState.values.schedule.value}
                    isFocus={formState.values.schedule.isFocus}
                    statusError={formState.errors.schedule.status}
                    onFocus={putFocus}
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                />
            </Row> */}
            <Row>
                <InputTextForm
                    state={formState.description!}
                    label="Descrición del empleo"
                    placeholder="Ingresa la descrición del empleo"
                    keyboardType="default"
                    multiline
                    inputType='input-area'
                    containerWidth='100%'
                    onChange={setValue}
                    onFocus={setFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputTextForm 
                    state={formState.maximumWage!}
                    label="Sueldo mínimo"
                    placeholder="Ingresa el sueldo"
                    keyboardType="numeric"
                    onChange={setValue}
                    onFocus={setFocus}
                    clearInput={clearInput}
                />
                <InputTextForm
                    state={formState.maximumWage!}
                    label="Sueldo máximo"
                    placeholder="Ingresa el sueldo"
                    keyboardType="numeric"
                     onChange={setValue}
                    onFocus={setFocus}
                    clearInput={clearInput}
                />
            </Row>
            {/* <Row>
                <InputListManager
                    name="requirements"
                    title="Lista de requisitos"
                    label="Requisitos"
                    placeholder="Agrega un requisito"
                    value={formState.values.requirements.value}
                    list={formState.values.requirements.list??[]}
                    isFocus={formState.values.requirements.isFocus}
                    errorFieldInvalid="El requisito ingresado no es válido"
                    onFocus={putFocus}
                    onChange={handleChange}
                    clearInput={clearInput}
                    addToList={addToList}
                    removeItemFromList={removeItemFromList}
                    updateListItem={updateListItem}
                />
                <InputListManager
                    name="benefits"
                    title="Lista de lo que ofrecemos"
                    label="Lo que ofrecemos"
                    placeholder="Agrega un beneficio"
                    value={formState.values.benefits.value}
                    list={formState.values.benefits.list??[]}
                    errorFieldInvalid="El beneficio ingresado no es válido"
                    isFocus={formState.values.benefits.isFocus}
                    onFocus={putFocus}
                    onChange={handleChange}
                    clearInput={clearInput}
                    addToList={addToList}
                    removeItemFromList={removeItemFromList}
                    updateListItem={updateListItem}
                />
            </Row> */}
            {/* <Row>
                <CoordinateSelector 
                    name="coords"
                    isRequired={true}
                    value={formState.values.coords.value}
                    statusError={formState.errors.coords.status}
                    errorFieldEmpty="El campo ubicación no puede estar vacio"
                    errorFieldInvalid="La ubicación no es valida"
                    handleChange={handleChange}
                />
            </Row> */}
        </>
    );
}