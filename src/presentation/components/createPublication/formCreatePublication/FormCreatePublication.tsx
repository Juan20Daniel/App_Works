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
    const { formState, putFocus, handleChange, removeFocus, clearInput, addToList, removeItemFromList, updateListItem } = useCreatePublication();
    return (
        <>
            <Row>
                <BtnSelectLogo
                    name="logoCompany"
                    value={formState.values.logoCompany.value}
                    onChange={handleChange}
                />
                <InputTextForm
                    label="Nombre de la empresa"
                    placeholder="Ingresa el nombre de la empresa"
                    value={formState.values.companyName.value}
                    keyboardType="default"
                    name="companyName"
                    isFocus={formState.values.companyName.isFocus}
                    statusError={formState.errors.companyName.status}
                    errorFieldInvalid="El nombre de la empresa no es válido"
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputTextForm
                    label="Acerca de la empresa"
                    placeholder="Descripción de la empresa"
                    value={formState.values.companyDesc.value}
                    keyboardType="default"
                    name="companyDesc"
                    multiline
                    inputType='input-area'
                    isFocus={formState.values.companyDesc.isFocus}
                    statusError={formState.errors.companyDesc.status}
                    errorFieldInvalid="La descripción de la empresa no es válida"
                    containerWidth='100%'
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <UploadImage />
            </Row>
            <Row>
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
            </Row>
            <Row>
                <InputTextForm
                    label="Descrición del empleo"
                    placeholder="Ingresa la descrición del empleo"
                    value={formState.values.description.value}
                    keyboardType="default"
                    name="description"
                    multiline
                    inputType='input-area'
                    isFocus={formState.values.description.isFocus}
                    statusError={formState.errors.description.status}
                    errorFieldEmpty="El campo nombre no puede estar vacio"
                    containerWidth='100%'
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputTextForm 
                    label="Sueldo mínimo"
                    placeholder="Ingresa el sueldo"
                    value={formState.values.minimumWage.value}
                    keyboardType="numeric"
                    name="minimumWage"
                    isFocus={formState.values.minimumWage.isFocus}
                    statusError={formState.errors.minimumWage.status}
                    errorFieldInvalid="El sueldo mínimo no es válido"
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
                <InputTextForm
                    label="Sueldo máximo"
                    placeholder="Ingresa el sueldo"
                    value={formState.values.maximumWage.value}
                    keyboardType="numeric"
                    name="maximumWage"
                    isFocus={formState.values.maximumWage.isFocus}
                    statusError={formState.errors.maximumWage.status}
                    errorFieldInvalid="El sueldo máximo no es válido"
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
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
            </Row>
            <Row>
                <CoordinateSelector 
                    name="coords"
                    isRequired={true}
                    value={formState.values.coords.value}
                    statusError={formState.errors.coords.status}
                    errorFieldEmpty="El campo ubicación no puede estar vacio"
                    errorFieldInvalid="La ubicación no es valida"
                    handleChange={handleChange}
                />
            </Row>
        </>
    );
}